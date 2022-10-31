import json
import urllib3

class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","EOH","EPC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR", "HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR", "LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUST","SWRK","TH","UNIV","URBS"]

dict = {}
for code in class_codes:
    print(code)
    
    dict[code] = []
    try:
        data = json.load(open("../json_schedule/" + code + "_schedule.json"))
    except Exception as e:
        data = json.loads({})
        
    for course in data["classes"]:
        if (course["subject"] + " " + course["catalog_number"] + " " + course["title"]) not in dict[code]:
            dict[code].append(course["subject"] + " " + course["catalog_number"] + " " + course["title"])
            
file1 = open("spring23_offering.json", "w")
json.dump(dict, file1, indent=4)
file1.close()