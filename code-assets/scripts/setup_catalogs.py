"""-------------------------------------------------------------------------'''
combine course listings from most recent fall and spring semester to produce catalogs 
'''-------------------------------------------------------------------------"""
import urllib3
import json
import sys

class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","EOH","EPC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUST","SWRK","TH","UNIV","URBS"]

sems = ["Fall", "Spring"]
for code in class_codes:
    tuples = []
    json_blobs = []
    for sem in sems:
    
        url = u"https://api.metalab.csun.edu/curriculum/api/2.0/terms/" + sem + "-2022/courses/" + code

        print("Data Link: " + url)

        #try to read the data
        try:
            data = json.loads(urllib3.PoolManager().request("GET", url).data)
        except Exception as e:
            data = json.loads({})


        


        current_class = ""
        for course in data["courses"]:
            if (current_class != course["title"]):
                current_class = course["title"]
                del course["term"]
                del course["section_number"]
                del course["course_id"]
                if not([course["subject"] + " " + course["catalog_number"] + " " +  course["title"], course["description"]] in tuples):
                    tuples.append([course["subject"] + " " + course["catalog_number"] + " " +  course["title"], course["description"]])
                    json_blobs.append(course)

        #print(*tuples, sep='\n')
        #print(*json_blobs, sep="\n")
        #print("\n\n\n\n")
    catalog_file = open(f"../../code-assets/backend/json_catalog/{code}_catalog.json", "w")

    json.dump(json_blobs, catalog_file, indent=4)














"""-------------------------------------------------------------------------'''
Webscrape desciprtions.
'''-------------------------------------------------------------------------"""
from selenium.common.exceptions import NoSuchElementException
import sys
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time
import json

s = Service(ChromeDriverManager().install())
op = webdriver.ChromeOptions()
op.add_argument('headless')
op.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Chrome(service=s, options=op)


for code in class_codes:
    with open(f"../../code-assets/backend/json_catalog/{code}_catalog.json") as curr_sub:
        try:
            classes = json.load(curr_sub)
        except json.JSONDecodeError as jce:
            with open('ERROR_LOG.txt', 'a') as f:
                f.write(str(jce))
                f.write("\n")
                f.write(str(curr_sub))
                f.write("\n")
        for course in classes:
            try:
                print("------------------------------------------")
                print(f'https://catalog.csun.edu/academics/{code.lower()}/courses/{code.lower()}-{course["catalog_number"]}/')
                driver.get(f'https://catalog.csun.edu/academics/{code.lower()}/courses/{code.lower()}-{course["catalog_number"]}/')
                #print(driver.find_element("id", "inset-content").text)
                #print(driver.find_element(By.CLASS_NAME, "main").find_element(By.CLASS_NAME, "container").find_element(By.CLASS_NAME, "row").find_element(By.CLASS_NAME, "row").text)
                print(driver.find_element("id", "inset-content").find_element(By.CLASS_NAME, "section-content").text)
                course["description"] = driver.find_element("id", "inset-content").find_element(By.CLASS_NAME, "section-content").text
            except NoSuchElementException as e:
                continue
    new_desc_file = open(f"../../code-assets/backend/json_catalog/{code}_catalog.json", "w")
    json.dump(classes, new_desc_file, indent=4)
    new_desc_file.close()    


for code in class_codes:
    print(code)
    with open(f"../../code-assets/backend/json_catalog/{code}_catalog.json") as curr_sub:
        subject_dict = json.load(curr_sub)
        for course in subject_dict:
            if course["description"] is None:
                del course
        subject_file = open(f"../backend/json_catalog/{code}_catalog.json", "w")
        json.dump(subject_dict, subject_file, indent=4)
        subject_file.close()







"""-------------------------------------------------------------------------'''
sorts every course document blob by its catalog number
'''-------------------------------------------------------------------------"""



for code in class_codes:
    print(code)
    with open(f"../../code-assets/backend/json_catalog/{code}_catalog.json") as curr_sub:
        subject_dict = json.load(curr_sub)
        subject_dict.sort(key = lambda item: item.get("catalog_number"))
        subject_file = open(f"../backend/json_catalog/{code}_catalog.json", "w")
        json.dump(subject_dict, subject_file, indent=4)
        subject_file.close()
            
        

"""-------------------------------------------------------------------------'''
simply adds a new attribute to every course in every file in 
json_catalog named "prerequisite" that is the first sentence of every course description  
'''-------------------------------------------------------------------------"""




for code in class_codes:
    try:
        classes = json.load(open(f"../backend/json_catalog/{code}_catalog.json"))
    except json.JSONDecodeError as jce:
        with open('ERROR_LOG.txt', 'a') as f:
            f.write(str(jce))
            f.write("\n")
            f.write(str(curr_sub))
            f.write("\n")
    for course in classes:
        print("------------------------------")
        if course["description"] is not None:
            try:
                print(course["subject"] + " " + course["catalog_number"] + ": " + course["description"][0:course["description"].index('.')])
                course["prerequisites"] = course["description"][0:course["description"].index('.')]
            except ValueError:
                print(course["subject"] + " " + course["catalog_number"] + ": " + course["description"])
                course["prerequisites"] = "N/A"
        else:
            print(course["subject"] + " " + course["catalog_number"] + " has no description")
        print("------------------------------")
    catalog_file = open(f"../backend/json_catalog/{code}_catalog.json", "w")
    json.dump(classes, catalog_file, indent=4)
    
    




for code in class_codes:
    print(code)
    with open(f"../../code-assets/backend/json_catalog/{code}_catalog.json") as curr_sub:
        try:
            subject_dict = json.load(curr_sub)
        except json.JSONDecodeError as jce:
            with open('ERROR_LOG.txt', 'a') as f:
                f.write(str(jce))
                f.write("\n")
                f.write(str(curr_sub)) 
                f.write("\n")
        for course in subject_dict:
            title_split = course["title"].split(" ")
            for i in range(0, len(title_split)):
                title_split[i] = f"{title_split[i][0:1].upper()}{title_split[i][1:].lower()}"
            course["title"] = ' '.join(title_split)
        subject_file = open(f"../backend/json_catalog/{code}_catalog.json", "w")
        json.dump(subject_dict, subject_file, indent=4)
        subject_file.close()