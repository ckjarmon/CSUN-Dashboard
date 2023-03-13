# due to how fuckin dumb the api is, courses only show up in the 
# catalog part of the api if they are being taught for that semester


from selenium.common.exceptions import NoSuchElementException
import selenium.common.exceptions
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
from pprint import pprint as pp
import mariadb
import urllib3

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


catalog_url = "https://api.metalab.csun.edu/curriculum/api/2.0/terms/Spring-2023/courses/"
# schedule_url = "https://api.metalab.csun.edu/curriculum/api/2.0/terms/Spring-2023/classes/"

missing_courses = json.load(open("Missing_Items.json", "r"))["courses_to_add"]


# print(*missing_courses, sep="\n")        

"""while True:
    try:    
        all_subs_catalog = urllib3.PoolManager().request("GET", catalog_url).data
        
        break
    except json.JSONDecodeError:
        continue
    """
all_subs_catalog = json.load(open("all_subs_catalog.json", "r"))
"""
Example Json Body for Catalog  
    {
        "subject": "COMP",
        "catalog_number": "100",
        "title": "Computers: Their Impact and Use",
        "description": "Not open to Computer Science majors. Introduction to the uses, concepts, techniques and terminology of computing. Places the possibilities and problems of computer use in historical, economic and social contexts. Shows how computers can assist in a wide range of personal, commercial and organizational activities. Typical computer applications, including word processing, spreadsheets and databases. (Available for General Education, E Lifelong Learning.) (IC)",
        "units": "3",
        "prerequisites": "{None}",
        "corequisites": "{None}"
    },
    
    
"""

# check that classes dont exist in catalog first

for c in missing_courses:
    try:    
        with open(f"./json_catalog/{c.split(' ')[0].replace('/', '').replace(' ', '')}_catalog.json") as sub_dict:
            sub_dict = json.load(sub_dict)
            for d in sub_dict:
                if c.split(' ')[1] == d["catalog_number"]:
                    print(c)
                    missing_courses.remove(c)
    except FileNotFoundError:
        print(f"{c.split(' ')[0].replace('/', '').replace(' ', '')} doesnt have a catalog file.")
        
        
found, mc_dict, no_desc= [], [], []    
for c in missing_courses:
    for d in all_subs_catalog["courses"]:
        if c.split(' ')[1] == d["catalog_number"] and c.split(' ')[0].replace(' ', '') == d["subject"]:
            if d["description"] is not None:
                _d = dict(d)
                del _d["term"]
                del _d["section_number"]
                del _d["course_id"]
                _d["prerequisites"] =  "{Err}"
                _d["corequisites"] =  "{Err}"
                mc_dict.append(_d)
                found.append(c)
            else:
                no_desc.append(c)
            
print("\nNot found => ")
print(*sorted(list(set(missing_courses) - set(found) - set(no_desc))), sep='\n')
mc_dict.sort(key = lambda item: f"{item['subject']} {item['catalog_number']}") 



def b():
    s = Service(ChromeDriverManager().install())
    op = webdriver.ChromeOptions()
    op.add_argument('headless')
    op.add_experimental_option('excludeSwitches', ['enable-logging'])
    driver = webdriver.Chrome(service=s, options=op)


    for c in mc_dict:
        # print("------------------------------------------")
        
        driver.get(f'https://catalog.csun.edu/academics/{c["subject"]}/courses/{c["subject"]}-{c["catalog_number"]}/')
        t = driver.find_element("id", "main-section").text.split('(')[0].split(".")[1].lstrip().rstrip()
        if not t.__contains__("Return to the Home Page"):
            print(f'https://catalog.csun.edu/academics/{c["subject"]}/courses/{c["subject"]}-{c["catalog_number"]}/')
            c["title"] = t
            print(c["title"])
        else:
            mc_dict.remove(c)
        


b()


for c in mc_dict:
    if c["description"].__contains__("Corequisite") :
        spc = c["description"].replace('\n', '').split(".")
        print(spc[0] + spc[1])
    elif c["description"].__contains__("Prerequisite"):    
        spc = c["description"].replace('\n', '').split("Prerequisite")
        print(spc[0])
        if 
    else:
        c["prerequisites"] =  "{None}"
        c["corequisites"] =  "{None}" 

        

 

json.dump(mc_dict, open("mc_dump.json", "w"), indent=4)

# print(len(max(mc_dict, key=lambda x:len(x["description"]))["description"]   ))

def a():    
    """-------------------------------------------------------------------------'''
    sorts every course document blob by its catalog number
    '''-------------------------------------------------------------------------"""
    for code in class_codes:
        with open(f"./json_catalog/{code}_catalog.json") as curr_sub:
            while True:    
                try:
                    subject_dict = json.load(curr_sub)
                    subject_dict.sort(key = lambda item: item.get("catalog_number"))
                    subject_file = open(f"./json_catalog/{code}_catalog.json", "w")
                    json.dump(subject_dict, subject_file, indent=4)
                    subject_file.close()
                    break
                except json.JSONDecodeError:
                    continue
                except FileNotFoundError:
                    print(f"{code.upper()} doesnt have a catalog.")
                    break
                
                
