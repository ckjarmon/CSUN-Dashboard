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
import pprint
import mariadb
import urllib3
import threading
import multiprocessing
from pprint import pprint as pp



try:
    rootConnection = mariadb.connect(
        user="py_serv",
        password=json.load(open("../../../secret.json", "r"))["db_pass"],
        host='127.0.0.1',
        port=3306,
        database='csun')
    rootCursor = rootConnection.cursor()
except mariadb.Error as err:
    print(f"Error connecting to MariaDB Platform: {err}")

def gather(code):
    sub_dict = {}
    _url = f"https://api.metalab.csun.edu/curriculum/api/2.0/terms/Fall-2022/classes/{code}"
    while True:
        try:
            data = json.loads(urllib3.PoolManager().request("GET", _url).data)
            for course  in data["classes"]:
                try:
                    try:
                        sub_dict[f"{code.upper()} {course['catalog_number']}"].append({
                            "class_number": course["class_number"],
                            "enrollment_cap": course["enrollment_cap"],
                            "enrollment_count": course["enrollment_count"],
                            "waitlist_cap": course["waitlist_cap"],
                            "waitlist_count": course["waitlist_count"],
                            "instructor": course["instructors"][0]["instructor"],
                            "days": course["meetings"][0]["days"],
                            "location": course["meetings"][0]["location"],
                            "start_time": course["meetings"][0]["start_time"],
                            "end_time": course["meetings"][0]["end_time"],
                        })
                    except IndexError:
                        continue
                except KeyError:
                    try:
                        sub_dict[f"{code.upper()} {course['catalog_number']}"] = [{
                            "class_number": course["class_number"],
                            "enrollment_cap": course["enrollment_cap"],
                            "enrollment_count": course["enrollment_count"],
                            "waitlist_cap": course["waitlist_cap"],
                            "waitlist_count": course["waitlist_count"],
                            "instructor": course["instructors"][0]["instructor"],
                            "days": course["meetings"][0]["days"],
                            "location": course["meetings"][0]["location"],
                            "start_time": course["meetings"][0]["start_time"],
                            "end_time": course["meetings"][0]["end_time"],
                        }]
                    except IndexError:
                        continue
            print(code)
            break
        except json.decoder.JSONDecodeError:
            print(f"{code} caused decode error")
    # pp(sub_dict)
    json.dump(sub_dict, open(f"./results/{code}_schedule.json", "w"), indent=4)
        
    
    
if __name__ == "__main__":
    class_codes = [
    "AE",
    "AM",
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
    "URBS", ]
  
    t = []
    
    for code in class_codes:
        t.append(threading.Thread(target=gather, args=(code,)))
        t[len(t)-1].start()

    for a in t:
        a.join()

#     for code in class_codes:
#         with open(f"./results/{code}_schedule.json") as s:
#             s = json.load(s)
#             try:
#                 for c in s.keys():
#                     for course in s[c]:
#                         rootCursor.execute(f"""update section set 
#                                                enrollment_cap = '{course['enrollment_cap']}', 
#                                                enrollment_count = '{course['enrollment_count']}', 
#                                                instructor = %s, 
#                                                waitlist_cap = '{course['waitlist_cap']}', 
#                                                waitlist_count = '{course['waitlist_count']}'
#                                                where class_number = '{course['class_number']}'""", (course['instructor'], ))
#             except AttributeError:
#                 continue
#     for code in class_codes:
#         with open(f"./results/{code}_schedule.json") as new_ss:
#             new_ss = json.load(new_ss)
#             for new_c in new_ss.keys():
#                 for course in new_ss[new_c]:
#                     with open(f"../web_scrape_sp23/results/{code}_schedule.json") as old_ss:
#                         old_ss = json.load(old_ss)
#                         for c1 in old_ss[new_c]:
#                             if course["class_number"] == c1["class_number"]:
#                                 old_ss[new_c][old_ss[new_c].index(c1)] = course
#                                 json.dump(old_ss, open(f"../web_scrape_sp23/results/{code}_schedule.json", "w"), indent=4)
#                                 break
                                
                
    
            
#     rootConnection.commit()
#     rootCursor.close()
#     rootConnection.close()