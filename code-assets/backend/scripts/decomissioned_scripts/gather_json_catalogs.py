import urllib3
import json
import sys

class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","EOH","EPC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUST","SWRK","TH","UNIV","URBS"]

sems = ["Fall", "Spring"]

for sem in sems:
    for a in class_codes:

        url = u"https://api.metalab.csun.edu/curriculum/api/2.0/terms/" + sem + "-2022/classes/" + a

        print("\n Data Link: " + url)

        #try to read the data
        try:
            data = json.loads(urllib3.PoolManager().request("GET", url).data)
        except Exception as e:
            data = json.loads({})


        tuples = []
        json_blobs = []


        current_class = ""
        for course in data["classes"]:
            if (current_class != course["title"]):
                current_class = course["title"]
                del course["term"]
                del course["class_number"]
                del course["section_number"]
                del course["course_id"]
                del course["enrollment_cap"]
                del course["enrollment_count"]
                del course["waitlist_cap"]
                del course["waitlist_count"]
                del course["meetings"]
                del course["instructors"]
                if not([course["subject"] + " " + course["catalog_number"] + " " +  course["title"], course["description"]] in tuples):
                    tuples.append([course["subject"] + " " + course["catalog_number"] + " " +  course["title"], course["description"]])
                    json_blobs.append(course)

        print(*tuples, sep='\n')
        #print(*json_blobs, sep="\n")
        print("\n\n\n\n")
        file1 = open(a + "_catalog.json", "w")

        json.dump(json_blobs, file1, indent=4)
