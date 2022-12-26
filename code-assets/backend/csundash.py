import pprint
from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import itertools
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
        


# create function to teardown connection after every return 

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
                    pass
            case '&':
                if _start == "":
                    parsed_ret += "AND Take "
                else:
                    parsed_ret += "<br>AND<br>Take "
                c_iterate += 1
            case '|':
                if _start == "":
                    parsed_ret += "OR Take"
                else:     
                    parsed_ret += "<br>or<br>Take"
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
    return repr(parsed_ret).replace('\'', '')[1:-1] # .replace('or a passing score', 'or Earn a passing score')

@app.route('/')
def home():
    return "<h1 style='color:red; background:black;'>This would prolly be a good place to list the endpoints</h1>"


@app.route('/<string:subject>/catalog')
def get(**kwargs):
    # return json.load(open(f'./data/json_{kwargs["data"]}/{kwargs["subject"].upper()}_{kwargs["data"]}.json'))
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
# @app.route('/sql')
# def sql(**kwargs):
#    rootCursor.execute("SELECT * FROM csun.COMP_view")
#    return [x for x in rootCursor.fetchall()]

@app.route('/<string:subject>/professors')
def professors(**kwargs):
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


"""
Addings a rating for a {string:prof} in a specific {string:subject}
Returns all previous ratings plus new posted rating for {prof} FROM {subject}
Blob return: Each professor rating is a an array of ratings with the professor first and last name as the key
{
    {professor_first_name formatted} {professor_last_name formatted}: [
    {
        "star_rating": int,
        "professor_first_name": string: any_case,
        "professor_last_name": string: any_case,
        "paragraph": string,
        "author_grade": char: any_case,
        "subject": string: uppercase,
        "catalog_number": string: all numbers
    },
    {
        
        
    },
    ...
    ]   
}

Example:
{
    "John Noga": [
        {
            "professor_first_name": "John",
            "professor_last_name": "Noga",
            "subject": "COMP",
            "catalog_number": "Comp 410",
            "star_rating": 5,
            "grade": "A",
            "difficulty": 3,
            "retake_professor": "Yes",
            "require_textbooks": "No",
            "mandatory": "Yes",
            "review": "Takes long to grade."
        },
        {
            "professor_first_name": "John",
            "professor_last_name": "Noga",
            "subject": "COMP",
            "catalog_number": "Comp 210",
            "star_rating": 1,
            "grade": "C",
            "difficulty": 1,
            "retake _professor": "No",
            "require_textbooks": "No",
            "mandatory": "No",
            "review": "Bad!"
        },
        ...
        ] //End of array
"""


@app.route('/<string:subject>/rating', methods=['POST'])
def new_rating(**kwargs):
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
def get_ratings(**kwargs):
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
Returns a dictionary of the {int:amount} professors who have taught the Subject Catalog_Number the most in past Fall-Spring iterations.
{
prof_email: amt_of_times they taught :: int
}


Example: /comp/182/history/5
{
  "bahram.zartoshty@csun.edu": 4,
  "gholamhossein.dastghaibyfard@csun.edu": 5,
  "maryam.jalalitabar@csun.edu": 4,
  "mohammed.abdelrahim@csun.edu": 3,
  "son.pham@csun.edu": 4
}

"""


@app.route('/<string:subject>/<string:catalog_number>/history/<int:amount>')
def historical_profs(**kwargs):
    with open(f"../backend/data/json_historical_profs/{kwargs['subject'].upper()}_history.json") as subject:
        classes = json.load(subject)
        return dict(itertools.islice(classes[f"{kwargs['subject'].upper()} {kwargs['catalog_number'].upper()}"].items(), kwargs["amount"]))


"""
given {string:prof_email} return the name of the prof
Example:
/comp/prof/name/john.noga@csun.edu

Returns: John Noga
"""

# DEPRECATED
@app.route('/<string:subject>/prof/name/<string:prof_email>')
def prof_name(**kwargs):
    # with open(f"../backend/data/json_profname/{kwargs['subject'].upper()}_profname.json") as profs:
    #    profs = json.load(profs)
    #    return profs[kwargs['prof_email']]
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
    rootCursor.execute(f"""SELECT 
                       first_name, 
                       last_name 
                       FROM professor WHERE subject = '{kwargs['subject'].upper()}' and email = '{kwargs['prof_email']}'""")
    le_fetch = rootCursor.fetchall()
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    
    return [f"{x[0]} {x[1]}" for x in le_fetch][0]



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
def classes(**kwargs):
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
      
    rootCursor.execute(f"""SELECT 
                       catalog_number, 
                       title 
                       FROM csun.{kwargs['subject'].upper()}_view""")
    le_fetch = rootCursor.fetchall()
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    return [f"{x[0]} - {x[1]}" for x in le_fetch]



@app.route('/<string:subject>/schedule')
@app.route('/<string:subject>/<string:catalog_number>/schedule')
def schedule(**kwargs):
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
    try:
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
        return [{"class_number": c[0],
                 "enrollment_cap": c[1],
                 "enrollment_count": c[2],
                 "instructor": c[3],
                 "days": c[4],
                 "location": c[5],
                 "start_time": c[6],
                 "end_time": c[7],
                 "catalog_number": c[8],
                 "subject": c[9]} for c in rootCursor.fetchall()]
    except KeyError:
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
    
        rootConnection.commit()
        rootCursor.close()
        rootConnection.close()
        return [{"class_number": c[0],
                 "enrollment_cap": c[1],
                 "enrollment_count": c[2],
                 "instructor": c[3],
                 "days": c[4],
                 "location": c[5],
                 "start_time": c[6],
                 "end_time": c[7],
                 "catalog_number": c[8],
                 "subject": c[9]} for c in le_fetch]


@app.route('/planner', methods=['POST'])
def cost(**kwargs):
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
    new_data = request.get_json(force=True)
    units = 0
    for c in new_data["selections"]:
        rootCursor.execute(
            f"SELECT units FROM csun.{c.split()[0].upper()}_view WHERE catalog_number = '{c.split()[1]}'")
        units += int(rootCursor.fetchall()[0][0])
    return new_data | {"units": units, "cost": 2326.00 if units <= 6 else 3532.00}



if __name__ == "__main__":
    app.run(threaded=True, host='0.0.0.0')
