import urllib3
import json
from dotenv import load_dotenv
import mysql.connector
from mysql.connector import errorcode

class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","AT","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","ENT","EOH","EPC","FCFC","FCHC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HHD","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LIB","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUS","SUST","SWRK","TH","UNIV","URBS"]


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
        urls = [u"https://api.metalab.csun.edu/curriculum/api/2.0/terms/Fall-2022/classes/" + code, u"https://api.metalab.csun.edu/curriculum/api/2.0/terms/Spring-2022/classes/" + code]
        profs = []
        
        
        for us in urls:
            try:
                data = json.loads(urllib3.PoolManager().request("GET", us).data)
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
    
    
    
    rootCursor.execute('create table catalog(subject varchar(6) not null, catalog_number varchar(10) not null, title varchar(106) not null, description varchar(2553) not null, units varchar(3) not null,prerequisites varchar(474) not null,corequisites varchar(130) not null)')

    for code in class_codes:
        try:
            with open(f"../../../code-assets/backend/json_catalog/{code}_catalog.json") as catalog_file:
                for course in json.load(catalog_file):
                    tup = (course["subject"], course["catalog_number"], course["title"],
                           course["description"], course["units"], course["prerequisites"], course["corequisites"])
                    rootCursor.execute('insert into catalog values(%s, %s, %s, %s, %s, %s, %s)', tup)
            rootCursor.execute(f'create view {code}_view as select * from catalog where subject = "{code}"')
        except FileNotFoundError:
            continue
        
    
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
