from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import itertools
import mariadb
import uvicorn

app = FastAPI()


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



class CATALOG_LISTING(BaseModel):
    subject: str
    catalog_number: str
    title: str
    description: str
    units: str
    prerequisites: str
    corequisites: str
    


@app.get('/{subject}/catalog')
def get(subject: str):
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
                       corequisites from catalog WHERE subject = '{subject.upper()}'
                       """)
    le_fetch = rootCursor.fetchall()
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    return [CATALOG_LISTING(subject=x[0],
                            catalog_number=x[1],
                            title=x[2],
                            description=x[3],
                            units=x[4],
                            prerequisites=x[5],
                            corequisites=x[6]) for x in le_fetch]

    
    
class PROFESSOR_LISTING(BaseModel):
    email: str
    first_name: str
    last_name: str
    image_link: str
    phone_number: str
    location: str
    website: str
    mail_drop: str
    subject: str
    office: str

@app.get('/{subject}/professors')
def professors(subject: str):
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
                       FROM professor WHERE subject = '{subject.upper()}'""")
    le_fetch = rootCursor.fetchall()
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    return sorted([PROFESSOR_LISTING(email= x[0],
                    first_name= name_normalize(x[1]),
                    last_name= name_normalize(x[2]),
                    image_link= x[3] if x[3] not in [None, ""] else "N/A",
                    phone_number= x[4] if x[4] not in [None, ""] else "N/A",
                    location= x[5] if x[5] not in [None, ""] else "N/A",
                    website= x[6] if x[6] not in [None, ""] else "N/A",
                    mail_drop= x[7] if x[7] not in [None, ""] else "N/A",
                    subject= x[8] if x[8] not in [None, ""] else "N/A",
                    office= x[9] if x[9] not in [None, ""] else "N/A")
                   for x in le_fetch], key=lambda x: x.last_name)




class RATING(BaseModel):
    professor_first_name: str
    professor_last_name: str
    email: str
    subject: str
    catalog_number: str
    star_rating: int
    grade: str
    difficulty: int
    retake_professor: str
    require_textbooks: str
    mandatory: str
    review: str
    class_type: str

@app.post('/{subject}/rating')
def new_rating(rating: RATING):
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
    
    # print(rating)
    tup = (name_normalize(rating.professor_first_name),
           name_normalize(rating.professor_last_name),
           rating.email.lower(),
           rating.subject,
           rating.catalog_number,
           rating.star_rating,
           rating.grade,
           rating.difficulty,
           rating.retake_professor,
           rating.require_textbooks,
           rating.mandatory,
           rating.review,
           rating.class_type)
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
                        FROM rating WHERE email = '{rating.email.lower()}' """)            
    le_fetch = rootCursor.fetchall()
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    return [RATING(professor_first_name= c[0],
             professor_last_name= c[1],
             email= c[2],
             subject= c[3],
             catalog_number= c[4],
             star_rating= c[5],
             grade= c[6],
             difficulty= c[7],
             retake_professor= c[8],
             require_textbooks= c[9],
             mandatory= c[10],
             review= c[11],
             class_type=c[12]) for c in le_fetch if c[2] == rating.email.lower()]


@app.get('/{subject}/ratings')
def get_ratings(email: str = Body(embed=True)):
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
                        FROM rating WHERE email = '{email.lower()}' """)            
    le_fetch = rootCursor.fetchall()
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    return [RATING(professor_first_name= c[0],
             professor_last_name= c[1],
             email= c[2],
             subject= c[3],
             catalog_number= c[4],
             star_rating= c[5],
             grade= c[6],
             difficulty= c[7],
             retake_professor= c[8],
             require_textbooks= c[9],
             mandatory= c[10],
             review= c[11],
             class_type=c[12]) for c in le_fetch if c[2] == email.lower()]


@app.get('/{subject}/classes')
def classes(subject: str):
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
      
    rootCursor.execute(f"""SELECT 
                       catalog_number, 
                       title 
                       FROM csun.{subject.upper()}_view""")
    le_fetch = rootCursor.fetchall()
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    return [f"{x[0]} - {x[1]}" for x in le_fetch]


class SECTION_LISTING(BaseModel):
    class_number: str
    enrollment_cap: int
    enrollment_count: int
    instructor: str
    days: str
    location: str
    start_time: str
    end_time: str
    catalog_number: str
    subject: str
    units: str | None


@app.get('/{subject}/{catalog_number}/schedule')
def schedule(subject: str, catalog_number: str | None = None):
    rootConnection = establish_conn()
    rootCursor = rootConnection.cursor()
    try:
        assert 'catalog_number' is not None
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
                           FROM section WHERE subject = '{subject.upper()}' AND catalog_number = '{catalog_number}'""")
        le_fetch = rootCursor.fetchall()
        
        section_payload = [SECTION_LISTING(class_number= c[0],
                            enrollment_cap= c[1],
                            enrollment_count= c[2],
                            instructor= c[3],
                            days= c[4],
                            location= c[5],
                            start_time= c[6],
                            end_time= c[7],
                            catalog_number= c[8],
                            subject= c[9]) for c in le_fetch]
        rootCursor.execute(f"select units from catalog where catalog_number = '{catalog_number}'")
        units = rootCursor.fetchall()[0][0]
        
        return [SECTION_LISTING(class_number=c.class_number,
                                enrollment_cap=c.enrollment_cap,
                                enrollment_count=c.enrollment_count,
                                instructor=c.instructor,
                                days=c.days,
                                location=c.location,
                                start_time=c.start_time,
                                end_time=c.end_time,
                                catalog_number=c.catalog_number,
                                subject=c.subject,
                                units=units) for c in section_payload]
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
                           FROM section WHERE subject = '{subject.upper()}'""")
        le_fetch = rootCursor.fetchall()
    
        
        section_payload = [SECTION_LISTING(class_number= c[0],
                            enrollment_cap= c[1],
                            enrollment_count= c[2],
                            instructor= c[3],
                            days= c[4],
                            location= c[5],
                            start_time= c[6],
                            end_time= c[7],
                            catalog_number= c[8],
                            subject= c[9]) for c in le_fetch]
        rootCursor.execute(f"select catalog_number, units from catalog where subject = '{subject}'")
        course_units = rootCursor.fetchall()
        course_units = dict((x, y) for x, y in course_units)
        rootConnection.commit()
        rootCursor.close()
        rootConnection.close()
        return [SECTION_LISTING(class_number=c.class_number,
                                enrollment_cap=c.enrollment_cap,
                                enrollment_count=c.enrollment_count,
                                instructor=c.instructor,
                                days=c.days,
                                location=c.location,
                                start_time=c.start_time,
                                end_time=c.end_time,
                                catalog_number=c.catalog_number,
                                subject=c.subject,
                                units=course_units[c['catalog_number']]) for c in section_payload]



if __name__ == "__main__":
    uvicorn.run("csundash_fastapi:app", port=5000, log_level="info")