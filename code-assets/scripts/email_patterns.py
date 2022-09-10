
import re
import json



class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","EOH","EPC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUST","SWRK","TH","UNIV","URBS"]


"""Prints out professors NOT students"""
for code in class_codes:
    print(f"-----------------{code}-----------------")
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
                    print(f"{key[0:1].upper()}{key[1:key.find('.')]} {key[key.find('.')+1:key.find('.')+2].upper()}{key[key.find('.')+2:key.find('@')]}")
        
"""Prints out Student Profs"""
for code in class_codes:
    print(f"-----------------{code}-----------------")
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
                if re.search(re.compile(r"@my.csun.edu"), key):
                    name_with_fluff = f"{key[0:1].upper()}{key[1:key.find('.')]} {key[key.find('.')+1:key.find('.')+2].upper()}{key[key.find('.')+2:key.find('@')]}"
                    print(name_with_fluff[:name_with_fluff.find('.')])
