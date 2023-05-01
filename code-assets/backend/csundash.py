from flask import Flask, request
from flask_cors import CORS
import json
import mariadb

app = Flask(__name__)
CORS(app)


def establish_conn():
    try:
        rootConnection = mariadb.connect(
            user="py_serv",
            password=json.load(open("secret.json", "r"))["db_pass"],
            host='127.0.0.1',
            port=3306,
            database='csun')
        return rootConnection
    except mariadb.Error as err:
        print(f"Error connecting to MariaDB Platform: {err}")
        

def name_normalize(str):
    return f"{str[0:1].upper()}{str[1:].lower()}"

 
# do not call initial parse call with empty string
# all initial calls should start with _start = "Take "
def parse(_parseable, _start):
    unparsed, parsed_ret = _parseable[1:-1], _start
    c_iterate, parse_stack = 0, []
    
    while c_iterate < len(unparsed):
        match unparsed[c_iterate]:
            
            case '{':
                if unparsed[c_iterate+1] == '{':
                    sub_unparsed_end = unparsed[c_iterate:].index('}}')
                    parsed_ret += parse(unparsed[c_iterate:][0:sub_unparsed_end+3], "")
                    c_iterate += sub_unparsed_end + 1
                else:
                    parse_stack.append(unparsed[c_iterate])
                    
            case '}':
                try:
                    parse_stack.pop()
                except IndexError:
                    return "??????????"
                
            case '&':
                parsed_ret += "AND Take " if _start == "" else "<br>AND<br>Take "
                c_iterate += 1
            
            case '|':
                parsed_ret += "OR Take" if _start == "" else "<br>or<br>Take" 
                c_iterate += 1            
                
            case _:
                parsed_ret += unparsed[c_iterate]
                
        c_iterate += 1
        
        
    # cba programming the logic to avoid these from happening so just do replace calls lol
    parsed_ret = parsed_ret.replace('Take Obtain', 'Obtain')
    parsed_ret = parsed_ret.replace('Take Earn', 'Earn')
    parsed_ret = parsed_ret.replace('Take Permission', 'Permission')
    parsed_ret = parsed_ret.replace('Take None', 'None')
    parsed_ret = parsed_ret.replace('Take Be', 'Be')
    parsed_ret = parsed_ret.replace('\n ', '\n').replace('  ', ' ')
    return repr(parsed_ret).replace('\'', '') # .replace('or a passing score', 'or Earn a passing score')


async def home():
    return "<h1 style='color:red; background:black;'>This would prolly be a good place to list the endpoints</h1>"



@app.route('/<string:subject>/catalog')
async def get(**kwargs):
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
    rootCursor.execute(f"""SELECT
                       subject,
                       catalog_number,
                       title,
                       description,
                       units,
                       prerequisites,
                       corequisites from catalog WHERE subject = '{kwargs['subject'].upper()}'
                       """)
    le_fetch = rootCursor.fetchall()
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    return [{"subject":x[0],
    "catalog_number":x[1],
    "title":x[2],
    "description":x[3],
    "units":x[4],
    "prerequisites": parse(x[5], "Take "),
    "corequisites":x[6]} for x in le_fetch]
    
    

@app.route('/<string:subject>/professors')
async def professors(**kwargs):
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
    rootCursor.execute(f"""SELECT 
                       email, 
                       first_name, 
                       last_name, 
                       image_link, 
                       phone_number, 
                       location, 
                       website, 
                       mail_drop, 
                       subject, 
                       office 
                       FROM professor WHERE subject = '{kwargs['subject'].upper()}'""")
    le_fetch = rootCursor.fetchall()
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    return sorted([{"email": x[0],
                    "first_name": name_normalize(x[1]),
                    "last_name": name_normalize(x[2]),
                    "image_link": x[3] if x[3] not in [None, ""] else "N/A",
                    "phone_number": x[4] if x[4] not in [None, ""] else "N/A",
                    "location": x[5] if x[5] not in [None, ""] else "N/A",
                    "website": x[6] if x[6] not in [None, ""] else "N/A",
                    "mail_drop": x[7] if x[7] not in [None, ""] else "N/A",
                    "subject": x[8] if x[8] not in [None, ""] else "N/A",
                    "office": x[9] if x[9] not in [None, ""] else "N/A"}
                   for x in le_fetch], key=lambda x: x["last_name"])



@app.route('/<string:subject>/rating', methods=['POST'])
async def new_rating(**kwargs):
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
    new_rating = request.get_json(force=True)
    print(new_rating)
    tup = (name_normalize(new_rating["professor_first_name"]),
           name_normalize(new_rating["professor_last_name"]),
           new_rating["email"].lower(),
           new_rating["subject"],
           new_rating["catalog_number"],
           new_rating["star_rating"],
           new_rating["grade"],
           new_rating["difficulty"],
           new_rating["retake_professor"],
           new_rating["require_textbooks"],
           new_rating["mandatory"],
           new_rating["review"],
           new_rating["class_type"])
    # print(tup.__str__())
    rootCursor.execute(f"""INSERT INTO rating(
        professor_first_name,
        professor_last_name,
        email, 
        subject,
        catalog_number,
        star_rating,
        grade,
        difficulty,
        retake_professor,
        require_textbooks,
        mandatory,
        review,
        class_type) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s, %s, %s)""", tup)
    rootConnection.commit()

    rootCursor.execute(f"""SELECT 
                        professor_first_name,
                        professor_last_name,
                        email,
                        subject,
                        catalog_number,
                        star_rating,
                        grade,
                        difficulty,
                        retake_professor,
                        require_textbooks,
                        mandatory,
                        review,
                        class_type
                        FROM rating WHERE email = '{new_rating['email'].lower()}' """)            
    le_fetch = rootCursor.fetchall()
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    return [{"professor_first_name": c[0],
             "professor_last_name": c[1],
             "email": c[2],
             "subject": c[3],
             "catalog_number": c[4],
             "star_rating": c[5],
             "grade": c[6],
             "difficulty": c[7],
             "retake_professor": c[8],
             "require_textbooks": c[9],
             "mandatory": c[10],
             "review": c[11],
             "class_type": c[12]} for c in le_fetch]


@app.route('/<string:email>/ratings')
async def get_ratings(**kwargs):
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
    rootCursor.execute(f"""SELECT 
                        professor_first_name,
                        professor_last_name,
                        email,
                        subject,
                        catalog_number,
                        star_rating,
                        grade,
                        difficulty,
                        retake_professor,
                        require_textbooks,
                        mandatory,
                        review,
                        class_type
                        FROM rating WHERE email = '{kwargs['email'].lower()}' """)            
    le_fetch = rootCursor.fetchall()
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    return [{"professor_first_name": c[0],
             "professor_last_name": c[1],
             "email": c[2],
             "subject": c[3],
             "catalog_number": c[4],
             "star_rating": c[5],
             "grade": c[6],
             "difficulty": c[7],
             "retake_professor": c[8],
             "require_textbooks": c[9],
             "mandatory": c[10],
             "review": c[11],
             "class_type": c[12]} for c in le_fetch]



"""
Simply returns an array of strings of all classes in a {string:subject}

Example:
[
  "100 - Computers: Their Impact And Use",
  "105BAS - Computer Programming In Basic",
  "108 - Orientation To Computer Science",
  "110 - Introduction To Algorithms And Programming",
  "110L - Introduction To Algorithms And Programming Lab",
  "111A - Algrth Prog A",
  "111AL - Algrth/prog A Lab",
  "111B - Algrth Prog B",
  "111BL - Algrth Prog B Lab",
  "122 - Computer Architecture And Assembly Language",
  "122L - Computer Architecture And Assembly Language Lab",
  "182 - Data Structures And Program Design",
  "182L - Data Structures And Program Design Lab",
    ... and so on
]
"""
@app.route('/<string:subject>/classes')
async def classes(**kwargs):
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
      
    rootCursor.execute(f"""SELECT 
                       catalog_number, 
                       title 
                       FROM csun.{kwargs['subject'].lower()}_view""")
    le_fetch = rootCursor.fetchall()
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    return [f"{x[0]} - {x[1]}" for x in le_fetch]



@app.route('/<string:subject>/schedule')
@app.route('/<string:subject>/<string:catalog_number>/schedule')
async def schedule(**kwargs):
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
    try:
        assert 'catalog_number' in kwargs
        rootCursor.execute(f"""SELECT 
                           class_number, 
                           enrollment_cap, 
                           enrollment_count, 
                           instructor, 
                           days, 
                           location, 
                           start_time, 
                           end_time, 
                           catalog_number, 
                           subject 
                           FROM section WHERE subject = '{kwargs['subject'].upper()}' AND catalog_number = '{kwargs['catalog_number']}'""")
        le_fetch = rootCursor.fetchall()
        
        section_payload = [{"class_number": c[0],
                 "enrollment_cap": c[1],
                 "enrollment_count": c[2],
                 "instructor": c[3],
                 "days": c[4],
                 "location": c[5],
                 "start_time": c[6],
                 "end_time": c[7],
                 "catalog_number": c[8],
                 "subject": c[9]} for c in le_fetch]
        rootCursor.execute(f"select units from catalog where catalog_number = '{kwargs['catalog_number']}'")
        units = rootCursor.fetchall()[0][0]
        
        return [c | {"units": units} for c in section_payload]
    except (KeyError, AssertionError):
        rootCursor.execute(f"""SELECT 
                           class_number, 
                           enrollment_cap, 
                           enrollment_count, 
                           instructor, 
                           days, 
                           location, 
                           start_time, 
                           end_time, 
                           catalog_number, 
                           subject 
                           FROM section WHERE subject = '{kwargs['subject'].upper()}'""")
        le_fetch = rootCursor.fetchall()
    
        
        section_payload = [{"class_number": c[0],
                 "enrollment_cap": c[1],
                 "enrollment_count": c[2],
                 "instructor": c[3],
                 "days": c[4],
                 "location": c[5],
                 "start_time": c[6],
                 "end_time": c[7],
                 "catalog_number": c[8],
                 "subject": c[9]} for c in le_fetch]
        rootCursor.execute(f"select catalog_number, units from catalog where subject = '{kwargs['subject']}'")
        course_units = rootCursor.fetchall()
        course_units = dict((x, y) for x, y in course_units)
        rootConnection.commit()
        rootCursor.close()
        rootConnection.close()
    return [c | {"units": course_units[c['catalog_number']]} if c['catalog_number'] in course_units.keys() else c | {"units": 0} for c in section_payload ]


if __name__ == "__main__":
    app.run(threaded=True, host='0.0.0.0')
