"""
count how many times a professor taught a course in the past 5 Fall-Spring interations

Resulting files in json_historical_profs
{
    Subjet Catalog_Number: {
        "professor_email": amt_of_times_taught_Subject-Catalog_Number,
        .....
    }
    ........
}

Example:

{
    "COMP 100": {
        "cecile.bendavid@csun.edu": 17,
        "lucy.parker@csun.edu": 6,
        "jill.michaels@csun.edu": 3,
        "launis.look@csun.edu": 2
    },
"""

import json
import urllib3

#class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","EOH","EPC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUST","SWRK","TH","UNIV","URBS"]
class_codes = ["UNIV"]


terms = [("Fall", "2022"), ("Spring", "2022"), ("Fall", "2021"), ("Spring", "2021"), ("Fall", "2020")]
for code in class_codes:
    history_dict = {}
    for term in terms:    
        
        print("---------------------------------------------------------")
        url = f"https://api.metalab.csun.edu/curriculum/api/2.0/terms/{term[0]}-{term[1]}/classes/{code}"
        print(url)
        try:
            data = json.loads(urllib3.PoolManager().request("GET", url).data)
        except Exception as e:
            data = json.loads({})        

        

        for course in data["classes"]:
            #print(course)
            if len(course["meetings"]) > 0:
                if len(course["instructors"]) > 0:
                    if course["instructors"][0]["instructor"] is not None:
                        print(course["instructors"][0]["instructor"] + " " + course["subject"] + " " + course["catalog_number"])
                        try:
                            #history_dict[course["subject"] + " " + course["catalog_number"]].append(course["instructors"][0]["instructor"])
                            history_dict[course["subject"] + " " + course["catalog_number"]][f"{course['instructors'][0]['instructor']}"] += 1
                            history_dict[course["subject"] + " " + course["catalog_number"]] = dict(sorted(history_dict[course["subject"] + " " + course["catalog_number"]].items(), key=lambda x:x[1], reverse=True))
                        except KeyError:
                            try:
                                history_dict[course["subject"] + " " + course["catalog_number"]][f"{course['instructors'][0]['instructor']}"] = 1
                                history_dict[course["subject"] + " " + course["catalog_number"]] = dict(sorted(history_dict[course["subject"] + " " + course["catalog_number"]].items(), key=lambda x:x[1], reverse=True))
                            except:
                                history_dict[course["subject"] + " " + course["catalog_number"]] = {}
                                history_dict[course["subject"] + " " + course["catalog_number"]][f"{course['instructors'][0]['instructor']}"] = 1
                                history_dict[course["subject"] + " " + course["catalog_number"]] = dict(sorted(history_dict[course["subject"] + " " + course["catalog_number"]].items(), key=lambda x:x[1], reverse=True))
                            #history_dict[course["subject"] + " " + course["catalog_number"]] = []
                            #history_dict[course["subject"] + " " + course["catalog_number"]].append(course["instructors"][0]["instructor"])


        #json.load(open(f"../backend/json_historical_profs/{code}_schedule.json"))
    #print(history_dict)
    history_file = open(f"../backend/json_historical_profs/{code}_history.json", "w")
    json.dump(history_dict, history_file, indent=4)
    history_file.close()
"""    
for code in class_codes:
    newstuffs = {}
    with open(f"../backend/json_historical_profs/{code}_history.json") as subject:
        job = json.load(subject)
        for dict in job:
            marklist = sorted(job[dict].items(), key=lambda x:x[1], reverse=True)
            #sortdict = dict(marklist)
            print(marklist)
            newstuffs[dict] = marklist
            print(max([int(x[1]) for x in marklist]))
    history_file = open(f"../backend/json_historical_profs/{code}_history.json", "w")
    json.dump(newstuffs, history_file, indent=0)
    history_file.close()
"""