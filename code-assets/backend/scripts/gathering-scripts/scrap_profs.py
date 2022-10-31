
"""
    see what courses each professor is teaching
"""
            
import urllib3
import json

class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","EOH","EPC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUST","SWRK","TH","UNIV","URBS"]


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


    #print(*profs, sep='\n')


    dict = {}
    for prof in profs:
        dict[prof] = {}
        dict[prof]["classes"] = []
        dict["profs"] = []
        
    dict["profs"] = profs
    #print(dict)




    for course in data["classes"]:
        if len(course["instructors"]) > 0:
            if course["instructors"][0]["instructor"] != "Staff":
                dict[course["instructors"][0]["instructor"]]["classes"].append(course)

    pp = json.dumps(dict, indent=4)
    #print(pp)
    file1 = open(code + "_prof.json", "w")
    json.dump(dict, file1, indent=4)
    file1.close()
