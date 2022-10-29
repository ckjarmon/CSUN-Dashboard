from flask import Flask, request, jsonify
from flask_cors import CORS
from mysql.connector import errorcode
import sys
import json
import itertools
import mariadb
import mysql
import mysql.connector
import os

app = Flask(__name__)
CORS(app)


if sys.platform.startswith("win32"):
    try:
        rootConnection = mysql.connector.connect(
            user="root",
            password="dapassword",
            host='127.0.0.1',
            database='csun')
        rootCursor = rootConnection.cursor()
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print('Invalid credentials')
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print('Database not found')
        else:
            print('Cannot connect to database:', err)
else:
    try:
        rootConnection = mariadb.connect(
            user="py_serv",
            password=json.loads("secret_stuffs")["server_pass"],
            host='127.0.0.1',
            port=3306,
            database='csun')
        rootCursor = rootConnection.cursor()
    except mariadb.Error as err:
        print(f"Error connecting to MariaDB Platform: {err}")


"""
Abstract that returns any and all {subject} data from json_{data}
Primarily used for testing
"""
@app.route('/<string:subject>/<string:data>')
def get(**kwargs):
    return json.load(open(f'./json_{kwargs["data"]}/{kwargs["subject"].upper()}_{kwargs["data"]}.json'))


#@app.route('/sql')
#def sql(**kwargs):
#    rootCursor.execute("select * from csun.COMP_view")
#    return [x for x in rootCursor.fetchall()]
        
@app.route('/<string:subject>/professors')
def professors(**kwargs):
    rootCursor.execute(f"select first_name, last_name from professor where subject = '{kwargs['subject'].upper()}'")
    return [f"{x[0][0:1].upper()}{x[0][1:].lower()} {x[1][0:1].upper()}{x[1][1:].lower()}" for x in rootCursor.fetchall()]


"""
Addings a rating for a {string:prof} in a specific {string:subject}
Returns all previous ratings plus new posted rating for {prof} from {subject}
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
            "star_rating": 4,
            "professor_first_name": "jOhn",
            "professor_last_name": "noGA",
            "paragraph": "Noga takes forever to grade.",
            "author_grade": "A",
            "subject": "COMP",
            "catalog_number": "482"
        },
        {
            "star_rating": 4,
            "professor_first_name": "jOhn",
            "professor_last_name": "noGA",
            "paragraph": "Noga takes forever to grade.",
            "author_grade": "A",
            "subject": "COMP",
            "catalog_number": "482"
        },
        ...
        ] //End of array
"""
@app.route('/<string:subject>/rating', methods=['POST'])
def new_rating(**kwargs):
    current_ratings = json.load(open(f'./json_rating/{kwargs["subject"].upper()}_rating.json'))
    rating_file = open(f'./json_rating/{kwargs["subject"].upper()}_rating.json', "w")
    new_rating = request.get_json(force=True)
    print('Post Body:', new_rating)
    try:
        current_ratings[new_rating["professor_first_name"][0:1].upper() +
                        new_rating["professor_first_name"][1:].lower() + " " +
                        new_rating["professor_last_name"][0:1].upper() +
                        new_rating["professor_last_name"][1:].lower()].append(new_rating)
    except KeyError:
        current_ratings[new_rating["professor_first_name"][0:1].upper() +
                        new_rating["professor_first_name"][1:].lower() + " " +
                        new_rating["professor_last_name"][0:1].upper() +
                        new_rating["professor_last_name"][1:].lower()] = []

        current_ratings[new_rating["professor_first_name"][0:1].upper() +
                        new_rating["professor_first_name"][1:].lower() + " " +
                        new_rating["professor_last_name"][0:1].upper() +
                        new_rating["professor_last_name"][1:].lower()].append(new_rating)

    json.dump(current_ratings, rating_file, indent=4)
    return current_ratings

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
    with open(f"../backend/json_historical_profs/{kwargs['subject'].upper()}_history.json") as subject:
        classes = json.load(subject)
        return dict(itertools.islice(classes[f"{kwargs['subject'].upper()} {kwargs['catalog_number'].upper()}"].items(), kwargs["amount"]))

"""
given {string:prof_email} return the name of the prof
Example:
/comp/prof/name/john.noga@csun.edu

Returns: John Noga
"""
@app.route('/<string:subject>/prof/name/<string:prof_email>')
def prof_name(**kwargs):
    #with open(f"../backend/json_profname/{kwargs['subject'].upper()}_profname.json") as profs:
    #    profs = json.load(profs)
    #    return profs[kwargs['prof_email']]
    rootCursor.execute(f"select first_name, last_name from professor where subject = '{kwargs['subject'].upper()}' and email = '{kwargs['prof_email']}'")
    return [f"{x[0]} {x[1]}" for x in rootCursor.fetchall()][0]


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
  "222 - Computer Organization",
  "256 - Discrete Structures For Computer Science",
  "256L - Discrete Structures For Computer Science Lab",
  "282 - Advanced Data Structures",
  "300 - Computer Fluency",
  "310 - Automata, Languages, And Computation",
  "322 - Introduction To Operating Systems And System Architecture",
  "322L - Introduction To Operating Systems And System Architecture Lab",
  "333 - Concepts Of Programming Languages",
  "380 - Introduction To Software Engineering",
  "380L - Introduction To Software Engineering Lab",
  "410 - Logic Programming",
  "424 - Computer System Security",
  "429 - Computer Network Software",
  "430 - Language Design And Compilers",
  "440 - Database Design",
  "442 - Machine Learning",
  "465 - Computer Graphic Systems And Design",
  "465L - Computer Graphic Systems And Design Lab",
  "467 - Multimedia Systems Design",
  "469 - Introduction To Artificial Intelligence",
  "482 - Algorithm Design",
  "484 - Web Engineering I",
  "484L - Web Engineering I Lab",
  "485 - Human-computer Interaction",
  "490 - Senior Design Project",
  "490L - Senior Design Project Lab",
  "491L - Senior Project Lab",
  "522 - Embedded Apps",
  "528 - Mobile Computing",
  "528L - Mobile Comp Lab",
  "529 - Advanced Network Topics",
  "529L - Adv Network Lab",
  "539 - Network Infras",
  "541 - Data Mining",
  "542 - Machine Learning",
  "560 - Expert Systems",
  "565 - Advanced Computer Graphics",
  "581 - Open Source Software Engineering",
  "582 - Software Requirements Analysis And Specification",
  "583 - Software Engineering Management",
  "584 - Advanced Web Engineering",
  "585 - Graphical User Interfaces",
  "586 - Object-oriented Software Development",
  "587 - Software V And V",
  "589 - Software Metrics",
  "610 - Data Structures And Algorithms",
  "615 - Advanced Topics In Computation Theory",
  "620 - Computer System Architecture",
  "680 - Advanced Topics In Software Engineering",
  "684 - Software Architecture And Design",
  "696C - Directed Graduate Research",
  "698C - Thesis Or Graduate Project"
]
"""
@app.route('/<string:subject>/classes')
def catalog(**kwargs):
    #with open(f"../backend/json_catalog/{kwargs['subject'].upper()}_catalog.json") as subject:
    #    classes = json.load(subject)
    #    return ([f"{x['catalog_number']} - {x['title']}"  for x in classes])
    rootCursor.execute(f"select catalog_number, title from csun.{kwargs['subject'].upper()}_view")
    return [f"{x[0]} - {x[1]}" for x in rootCursor.fetchall()]


@app.route('/<string:subject>/schedule')
@app.route('/<string:subject>/<string:catalog_number>/schedule')
def schedule(**kwargs):
    with open(f"../backend/json_schedule/{kwargs['subject'].upper()}_schedule.json") as subject:
        classes = json.load(subject)
        try:    
            return classes[f"{kwargs['subject'].upper()} {kwargs['catalog_number']}"]
        except KeyError:
            ret = []
            for key in classes.keys():
                ret += classes[key]
            return ret
            

@app.route('/planner', methods=['POST'])
def cost(**kwargs):
    new_data = request.get_json(force=True)
    units = 0
    for c in new_data["selections"]:
        rootCursor.execute(f"select units from csun.{c.split()[0].upper()}_view where catalog_number = '{c.split()[1]}'")
        units += int(rootCursor.fetchall()[0][0])
    return new_data | {"units": units, "cost": 2326.00 if units <= 6 else 3532.00}



app.run(host='0.0.0.0')