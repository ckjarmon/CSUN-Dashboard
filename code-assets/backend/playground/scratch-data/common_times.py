import json


class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","EOH","EPC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUST","SWRK","TH","UNIV","URBS"]

time_dict = {}

for code in class_codes:
    classes = json.load(open(f"../backend/json_schedule/{code}_schedule.json"))
    
    for course in classes["classes"]:
        print(course)
        if len(course["meetings"]) > 0:
            print(course["meetings"][0]["start_time"] + " " +  course["meetings"][0]["end_time"])
            try:
                time_dict[f"{code}"][f'{course["meetings"][0]["start_time"]} - {course["meetings"][0]["end_time"]}'] += 1
            except KeyError:
                try:
                    time_dict[f"{code}"][f'{course["meetings"][0]["start_time"]} - {course["meetings"][0]["end_time"]}'] = 1
                except KeyError:
                    time_dict[f"{code}"] = {}
                    time_dict[f"{code}"][f'{course["meetings"][0]["start_time"]} - {course["meetings"][0]["end_time"]}'] = 1
                

print(time_dict)
time_file = open("time_stats.json", "w")
json.dump(time_dict, time_file, indent=4)