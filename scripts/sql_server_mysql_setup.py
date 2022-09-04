# bot.py
import urllib3
import json
from dotenv import load_dotenv
import mysql.connector
from mysql.connector import errorcode

class_codes = ["AE", "AM", "AAS", "ACCT", "AFRS", "AIS", "ANTH", "ARAB", "ARMN", "ART", "ASTR", "ATHL", "BANA", "BIOL", "BLAW", "BUS", "CE", "CADV", "CAS", "CCE", "CD", "CECS", "CHS", "CHEM", "CHIN", "CIT", "CJS", "CLAS", "CM", "COMP", "COMS", "CTVA", "DEAF", "EED", "ECE", "ECON", "EDUC", "ELPS", "ENGL", "EOH", "EPC", "FCS", "FIN", "FLIT", "FREN", "GBUS", "GEOG",
               "GEOL", "GWS", "HEBR", "HIST", "HSCI", "HUM", "INDS", "IS", "ITAL", "JS", "JAPN", "JOUR", "KIN", "KNFC", "KOR", "LING", "LRS", "ME", "MATH", "MCOM", "MGT", "MKT", "MSE", "MUS", "NURS", "PERS", "PHIL", "PHSC", "PHYS", "POLS", "PSY", "PT", "QS", "RS", "RE", "RTM", "RUSS", "SED", "SCI", "SCM", "SOC", "SOM", "SPAN", "SPED", "SUST", "SWRK", "TH", "UNIV", "URBS"]


data = {}
data["classes"] = []
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

    rootCursor.execute('create table professor('
                       'email varchar(50), '
                       'first_name varchar(50) not null, '
                       'last_name varchar(50) not null, '
                       'image_link varchar(120) null,'
                       'phone_number varchar(15) null,'
                       'location varchar(60) null,'
                       'website varchar(100) null,'
                       'mail_drop varchar(15) null,'
                       'subject varchar(6),' 
                       'office varchar(15) null)')
    for code in class_codes:
        url = u"https://api.metalab.csun.edu/curriculum/api/2.0/terms/Fall-2022/classes/" + code
        print(url)
        profs = []
        try:
            data = json.loads(urllib3.PoolManager().request("GET", url).data)
        except Exception as e:
            data = json.loads({})

        for course in data["classes"]:
            if len(course["instructors"]) > 0:
                if course["instructors"][0]["instructor"] not in profs and course["instructors"][0]["instructor"] != "Staff":
                    profs.append(course["instructors"][0]["instructor"])

        for prof in profs:
            if prof is not None:
                url = u"https://api.metalab.csun.edu/directory/api/members?email=" + prof
                print(url)
                try:
                    prof_info = json.loads(
                        urllib3.PoolManager().request("GET", url).data)
                except Exception as e:
                    prof_info = json.loads({})


                if prof_info["success"] != "false":
                    has_contact = len(prof_info["people"]["contacts"]) > 0
                    
                    tup = (prof, 
                           prof_info["people"]["first_name"], 
                           prof_info["people"]["last_name"], 
                           prof_info["people"]["profile_image"], 
                           "N/A" if not has_contact else prof_info["people"]["contacts"][0]["telephone"], 
                           "N/A" if not has_contact else prof_info["people"]["contacts"][0]["location"], 
                           "N/A" if not has_contact else prof_info["people"]["contacts"][0]["website"], 
                           "N/A" if not has_contact else prof_info["people"]["contacts"][0]["mail_drop"], 
                           code.upper(), 
                           "N/A" if not has_contact else prof_info["people"]["contacts"][0]["office"])

                    print(str(len(tup)) + " --- " + tup.__str__())
                    print()
                    rootCursor.execute('insert into professor values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)', tup)


    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
