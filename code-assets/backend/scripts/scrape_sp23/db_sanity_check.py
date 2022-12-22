import json
from pprint import pprint as pp
import mariadb

class_codes = [
    "AE",
    "AM",
    "AR",
    "AAS",
    "ACCT",
    "AFRS",
    "AIS",
    "ANTH",
    "ARAB",
    "ARMN",
    "ART",
    "ASTR",
    "AT",
    "ATHL",
    "BANA",
    "BIOL",
    "BLAW",
    "BUS",
    "CE",
    "CADV",
    "CAS",
    "CCE",
    "CD",
    "CECS",
    "CHS",
    "CHEM",
    "CHIN",
    "CIT",
    "CJS",
    "CLAS",
    "CM",
    "COMP",
    "COMS",
    "CTVA",
    "DEAF",
    "EED",
    "ECE",
    "ECON",
    "EDUC",
    "ELPS",
    "ENGL",
    "ENT",
    "EOH",
    "EPC",
    "FCS",
    "FIN",
    "FLIT",
    "FREN",
    "GBUS",
    "GEH",
    "GEOG",
    "GEOL",
    "GWS",
    "HEBR",
    "HHD",
    "HIST",
    "HSCI",
    "HUM",
    "HUMN",
    "INDS",
    "IS",
    "ITAL",
    "JS",
    "JAPN",
    "JOUR",
    "KIN",
    "KOR",
    "LIB",
    "LING",
    "LRS",
    "ME",
    "MATH",
    "MCOM",
    "MGT",
    "MKT",
    "MSE",
    "MUS",
    "NURS",
    "PERS",
    "PHIL",
    "PHSC",
    "PHYS",
    "POLS",
    "PSY",
    "PT",
    "QS",
    "RS",
    "RE",
    "RTM",
    "RUSS",
    "SED",
    "SCI",
    "SCM",
    "SOC",
    "SOM",
    "SPAN",
    "SPED",
    "SUS",
    "SUST",
    "SWRK",
    "TH",
    "UNIV",
    "URBS"]


def establish_conn():
    try:
        rootConnection = mariadb.connect(
            user="py_serv",
            password=json.load(open("../secret.json", "r"))["db_pass"],
            host='127.0.0.1',
            port=3306,
            database='csun')
        return rootConnection
    except mariadb.Error as err:
        print(f"Error connecting to MariaDB Platform: {err}")


rootConnection = establish_conn()
rootCursor = rootConnection.cursor()

"""for code in class_codes:
    try:
        with open(f"./json_catalog/{code}_catalog.json") as sub:
            sub = json.load(sub)
            for c in sub:
                try:
                    tup = (c["subject"],
                           c["catalog_number"],
                           c["title"],
                           c["description"],
                           c["units"],
                           c["prerequisites"],
                           c["corequisites"])
                    rootCursor.execute(f"insert into catalog values(%s,%s,%s,%s,%s,%s,%s)", tup)
                except mariadb.IntegrityError:
                    continue
    except FileNotFoundError:
        continue
    
rootConnection.commit()
rootCursor.close()
rootConnection.close()



missing_from_db = []
sub = json.load(open("new_catalog_additions.json", "r"))
for c in sub:
    rootCursor.execute(f"select subject, catalog_number from catalog where subject = '{c['subject']}' and catalog_number = '{c['catalog_number']}'")
    if rootCursor.fetchall() == []:
        missing_from_db.append(c)
        
        
json.dump(missing_from_db, open("missing_from_db.json", "w"), indent=4)

"""


with open(f"missing_from_db.json") as sub:
    sub = json.load(sub)
    for c in sub:
            try:
                tup = (c["subject"],
                       c["catalog_number"],
                       c["title"],
                       c["description"],
                       c["units"],
                       c["prerequisites"],
                       c["corequisites"])
                rootCursor.execute(f"insert into catalog values(%s,%s,%s,%s,%s,%s,%s)", tup)
            except mariadb.IntegrityError:
                continue

            
            
# json.dump(mfd, open("missing_from_db.json", "w"), indent=4)
    
rootConnection.commit()
rootCursor.close()
rootConnection.close()
