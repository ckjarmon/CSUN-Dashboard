import json
from multiprocessing.sharedctypes import Value

class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","AT","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","ENT","EOH","EPC","FCFC","FCHC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HHD","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LIB","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUS","SUST","SWRK","TH","UNIV","URBS"]


for code in class_codes:
    classes = json.load(open(f"../backend/json_catalog/{code}_catalog.json"))

    for course in classes:
        print("------------------------------")
        if course["description"] is not None:
            try:
                print(course["subject"] + " " + course["catalog_number"] + ": " + course["description"][0:course["description"].index('.')])
                course["prerequisites"] = course["subject"] + " " + course["catalog_number"] + ": " + course["description"][0:course["description"].index('.')]
            except ValueError:
                print(course["subject"] + " " + course["catalog_number"] + ": " + course["description"])
                course["prerequisites"] = "N/A"
        else:
            print(course["subject"] + " " + course["catalog_number"] + " has no description")
        print("------------------------------")
    catalog_file = open(f"../backend/json_catalog/{code}_catalog.json", "w")
    json.dump(classes, catalog_file, indent=4)