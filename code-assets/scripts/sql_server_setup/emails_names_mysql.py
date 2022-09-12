import re
import json
from dotenv import load_dotenv
import mysql.connector
from mysql.connector import errorcode


class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","EOH","EPC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUST","SWRK","TH","UNIV","URBS"]

def store_mysql():
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
        for code in class_codes:
            #print(f"-----------------{code}-----------------")
            with open(f"../../code-assets/backend/json_historical_profs/{code}_history.json") as curr_sub:
                try:
                    history_dict = json.load(curr_sub)
                except json.JSONDecodeError as jce:
                    with open('ERROR_LOG.txt', 'a') as f:
                        f.write("\n\n\n\n")
                        f.write(str(jce))
                        f.write("\n")
                        f.write(str(curr_sub)) 
                        f.write("\n")
                    break
                for class_key in history_dict.keys():
                    for key in history_dict[class_key].keys():
                        if re.search(re.compile(r"@csun.edu"), key):
                            actual_name = f"{key[0:1].upper()}{key[1:key.find('.')]} {key[key.find('.')+1:key.find('.')+2].upper()}{key[key.find('.')+2:key.find('@')]}"
                            #print(f"{actual_name} :: {key}")
                            try:
                                rootCursor.execute('insert into email_name values (%s, %s, %s)', (key, actual_name, code))
                            except mysql.connector.errors.IntegrityError:
                                continue
                        elif re.search(re.compile(r"@my.csun.edu"), key):
                            name_with_fluff = f"{key[0:1].upper()}{key[1:key.find('.')]} {key[key.find('.')+1:key.find('.')+2].upper()}{key[key.find('.')+2:key.find('@')]}"
                            actual_name = name_with_fluff[:name_with_fluff.find('.')]
                            #print(f"{actual_name} :: {key}")
                            try:
                                rootCursor.execute('insert into email_name values (%s, %s, %s)', (key, actual_name, code))
                            except mysql.connector.errors.IntegrityError:
                                continue   

    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    
def store_json():
    for code in class_codes:
        print(code)
        subject_dict = {}
        #print(f"-----------------{code}-----------------")
        with open(f"../../../code-assets/backend/json_historical_profs/{code}_history.json") as curr_sub:
            
            try:
                history_dict = json.load(curr_sub)


                for class_key in history_dict.keys():
                    for key in history_dict[class_key].keys():
                        if re.search(re.compile(r"@csun.edu"), key):
                            actual_name = f"{key[0:1].upper()}{key[1:key.find('.')]} {key[key.find('.')+1:key.find('.')+2].upper()}{key[key.find('.')+2:key.find('@')]}"
                            #print(f"{actual_name} :: {key}")
                            subject_dict[key] = actual_name

                        elif re.search(re.compile(r"@my.csun.edu"), key):
                            name_with_fluff = f"{key[0:1].upper()}{key[1:key.find('.')]} {key[key.find('.')+1:key.find('.')+2].upper()}{key[key.find('.')+2:key.find('@')]}"
                            actual_name = name_with_fluff[:name_with_fluff.find('.')]
                            #print(f"{actual_name} :: {key}")
                            subject_dict[key] = actual_name
                json.dump(subject_dict, open(f"../../../code-assets/backend/json_profname/{code}_profname.json", "w"), indent=4)

                 
            except json.JSONDecodeError as jce:
                with open('ERROR_LOG.txt', 'a') as f:
                    f.write("\n\n\n\n")
                    f.write(str(jce))

if __name__ == "__main__":
    store_json()