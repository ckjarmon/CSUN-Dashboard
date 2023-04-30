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


try:
    rootConnection = mariadb.connect(
        user="py_serv",
        password=json.load(open("../../secret.json", "r"))["db_pass"],
        host='127.0.0.1',
        port=3306,
        database='csun')
    rootCursor = rootConnection.cursor()
except mariadb.Error as err:
    print(f"Error connecting to MariaDB Platform: {err}")

catalog_link = 'https://cmsweb.csun.edu/psc/CNRPRD/EMPLOYEE/SA/c/NR_SSS_COMMON_MENU.NR_SSS_SOC_BASIC_C.GBL?PortalActualURL=https%3a%2f%2fcmsweb.csun.edu%2fpsc%2fCNRPRD%2fEMPLOYEE%2fSA%2fc%2fNR_SSS_COMMON_MENU.NR_SSS_SOC_BASIC_C.GBL&PortalContentURL=https%3a%2f%2fcmsweb.csun.edu%2fpsc%2fCNRPRD%2fEMPLOYEE%2fSA%2fc%2fNR_SSS_COMMON_MENU.NR_SSS_SOC_BASIC_C.GBL&PortalContentProvider=SA&PortalCRefLabel=Class%20Search&PortalRegistryName=EMPLOYEE&PortalServletURI=https%3a%2f%2fmynorthridge.csun.edu%2fpsp%2fPANRPRD%2f&PortalURI=https%3a%2f%2fmynorthridge.csun.edu%2fpsc%2fPANRPRD%2f&PortalHostNode=EMPL&NoCrumbs=yes&PortalKeyStruct=yes'


""" 
In the API the time is stored in 24-hour format followed by an "h"
"""


def convert_time(time):
    if (time == "TBA"):
        return "0000h", "0000h"
    start_hour = int(time[0:2])
    # print(start_hour)
    start_is_am = True if (time[5:7] == "am" or time[0:2] == "12") else False
    """
    In 24-hour time, every hour after 12pm is (12 + Hour)
    """
    # print(start_is_am)
    end_hour = int(time[8:10])
    # print(end_hour)
    end_is_am = True if (time[13:15] == "am" or time[8:10] == "12") else False
    # print(end_is_am)

    if not start_is_am:
        start_hour += 12
    if not end_is_am:
        end_hour += 12

    if start_hour < 10:
        start_string = "0" + str(start_hour)
    else:
        start_string = str(start_hour)

    if end_hour < 10:
        end_string = "0" + str(end_hour)
    else:
        end_string = str(end_hour)

    return (start_string + time[3:5] + "h"), (end_string + time[11:13] + "h")

# This is how the days are stored in the API.
def convertdays(days_str):
    match days_str:
        case "MoWe":
            return "MW"
        case "TuTh":
            return "TR"
        case "Mo":
            return "M"
        case "Tu":
            return "T"
        case "We":
            return "W"
        case "Th":
            return "R"
        case "Fr":
            return "F"
        case "MoTuWe":
            return "MTW"
        case "MoTuTh":
            return "MTR"
        case "MoWeTh":
            return "MWR"
        case "MoWeFr":
            return "MWF"
        case "MoTuFr":
            return "MTF"
        case "MoThFr":
            return "MRF"
        case "MoTuWeTh":
            return "MTWR"
        case "Sa":
            return "S"




def gather(arrow):
        
        
        s = Service(ChromeDriverManager().install())
        op = webdriver.ChromeOptions()
        # op.add_argument('headless')
        op.add_experimental_option('excludeSwitches', ['enable-logging'])
        driver = webdriver.Chrome(service=s, options=op)
        driver.get(catalog_link)
        time.sleep(4)

        sem_box = driver.find_element("name", "NR_SSS_SOC_NWRK_STRM")
        sem_box.click()
        sem_box.send_keys(Keys.ARROW_UP)
        time.sleep(1)
        sem_box.send_keys(Keys.ARROW_UP)
        time.sleep(1)
        
        id_box = driver.find_element("name", "NR_SSS_SOC_NWRK_SUBJECT")
        id_box.click()
        time.sleep(1)
        # id_box.send_keys(sys.argv[4])
        for i in range(0, arrow + 1):
            id_box.send_keys(Keys.ARROW_DOWN)
        id_box.send_keys(Keys.ENTER)
        time.sleep(2)

        while True:
            try:
                driver.find_element("id", "NR_SSS_SOC_NWRK_BASIC_SEARCH_PB").click()
                time.sleep(5)
                break
            except (selenium.common.exceptions.StaleElementReferenceException, selenium.common.exceptions.ElementClickInterceptedException):
                continue
        sub_sects = []

        for a in range(0, 600):
            try:
                
                # section_title = driver.find_element("id", "NR_SSS_SOC_NWRK_DESCR100_2$" + str(a)).text
                # print(section_title, flush=True)
                while True:
                    try:
                        section_title = driver.find_element("id", "NR_SSS_SOC_NWRK_DESCR100_2$" + str(a)).text
                        print(section_title, flush=True)
                        section_title = section_title.split()
                        break
                    except selenium.common.exceptions.StaleElementReferenceException:
                        continue
                
                while True:
                    try:
                        driver.find_element("id", "SOC_DETAIL$" + str(a)).click()
                        time.sleep(4)
                        break
                    except (selenium.common.exceptions.ElementClickInterceptedException,selenium.common.exceptions.ElementNotInteractableException):
                        continue
                    except selenium.common.exceptions.StaleElementReferenceException:
                        break
                
                
                course_dict = {}
                for i in range(600):
                    try:    
                        
                        if (section_title[2].isalnum()):  # Class_Number

                            # This Case: Subject Code Class_Number
                            course_dict["subject"] = section_title[0] + section_title[1]
                            course_dict["catalog_number"] = section_title[2]
                            course_dict["title"] = section_title[4]

                            start_of_class_name = 5
                            while section_title[start_of_class_name] != "(":
                                course_dict["title"] += " " + section_title[start_of_class_name]
                                start_of_class_name += 1
                        # print(course_dict)
                        else: # This Case: SubjectCode Class_Number
                            course_dict["subject"] = section_title[0]
                            course_dict["catalog_number"] = section_title[1]
                            course_dict["title"] = section_title[3]
            
                            start_of_class_name = 4
                            while section_title[start_of_class_name] != "(":
                                course_dict["title"] += " " + section_title[start_of_class_name]
                                start_of_class_name += 1
                            # print(course_dict)




                        while True:
                            try:
                                course_dict["class_number"] = driver.find_element("id", "NR_SSS_SOC_NSEC_CLASS_NBR$" + str(i)).text
                                break
                            except selenium.common.exceptions.StaleElementReferenceException:
                                print(f'{class_codes[arrow]}  ========')
                                continue
                        while True:
                            try:
                                course_dict["enrollment_cap"] = int(driver.find_element("id", "NR_SSS_SOC_NWRK_AVAILABLE_SEATS$" + str(i)).text)
                                break
                            except selenium.common.exceptions.StaleElementReferenceException:
                                print(f'{class_codes[arrow]}  ========')
                                continue
                        while True:
                            try:
                                course_dict["enrollment_count"] = 0
                                break
                            except selenium.common.exceptions.StaleElementReferenceException:
                                print(f'{class_codes[arrow]}  ========')
                                continue
                        while True:
                            try:
                                course_dict["days"] = convertdays(driver.find_element("id", "NR_SSS_SOC_NWRK_DESCR20$" + str(i)).text)
                                break
                            except selenium.common.exceptions.StaleElementReferenceException:
                                print(f'{class_codes[arrow]}  ========')
                                continue
                        while True:
                            try:
                                course_dict["location"] = driver.find_element("id", "MAP$" + str(i)).text
                                break
                            except selenium.common.exceptions.StaleElementReferenceException:
                                print(f'{class_codes[arrow]}  ========')
                                continue


                        while True:
                            try:    
                                if driver.find_element("id", "TIME$span$" + str(i)).text.__contains__("-"):
                                    course_dict["start_time"], course_dict["end_time"] = convert_time(
                                                driver.find_element("id", "TIME$span$" + str(i)).text)
                                    break
                                else:
                                    course_dict["start_time"], course_dict["end_time"] = driver.find_element(
                                                "id", "TIME$span$" + str(i)).text, driver.find_element("id", "TIME$span$" + str(i)).text
                                    break
                            except selenium.common.exceptions.StaleElementReferenceException:
                                continue
                        while True:        
                            try:
                                course_dict["instructor"] = driver.find_element("id", "FACURL$" + str(i)).text
                                break
                            except NoSuchElementException:
                                course_dict["instructor"] = "Staff"
                                break
                            except selenium.common.exceptions.StaleElementReferenceException:
                                continue    
                        
                        # print(course_dict)
                        sub_sects.append(dict(course_dict))
                        # print(*sub_sects, sep='\n')
                        # print(sub_sects)
                    except NoSuchElementException as nsee:
                        break            
                # print("Session\tSection\tClass#\tSeats\tStatus\tComp\tLoc\tDays\tTime\t\t   Faculty")
                
                # print(section_title)

                

                driver.find_element("id", "SOC_DETAIL1$" + str(a)).click()
                time.sleep(3)
            except NoSuchElementException as nsee:  # if no more classes for a subject
                # print(nsee.__str__().split('\n')[0])
                # print(sub_sects)
                continue

                

        json.dump(sub_sects, open(f"./results_web/{class_codes[arrow]}_schedule.json", "w"), indent=4)
        driver.quit()
        """
        sub_dict = {}
        _url = f"https://api.metalab.csun.edu/curriculum/api/2.0/terms/Fall-2023/classes/{class_codes[arrow]}"
        while True:
            try:
                data = json.loads(urllib3.PoolManager().request("GET", _url).data)
                for course in data["classes"]:
                    if len(course["meetings"]) > 0:    
                        try:
                            if len(course["instructors"]) > 0:
                                sub_dict[f"{class_codes[arrow].upper()} {course['catalog_number']}"].append({
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
                            else:
                                sub_dict[f"{class_codes[arrow].upper()} {course['catalog_number']}"].append({
                                    "class_number": course["class_number"],
                                    "enrollment_cap": course["enrollment_cap"],
                                    "enrollment_count": course["enrollment_count"],
                                    "waitlist_cap": course["waitlist_cap"],
                                    "waitlist_count": course["waitlist_count"],
                                    "instructor": "Staff",
                                    "days": course["meetings"][0]["days"],
                                    "location": course["meetings"][0]["location"],
                                    "start_time": course["meetings"][0]["start_time"],
                                    "end_time": course["meetings"][0]["end_time"],
                                })
                            # this means that the instructor is staff, then store it

                        except KeyError:
                            if len(course["instructors"]) > 0:
                                sub_dict[f"{class_codes[arrow].upper()} {course['catalog_number']}"] = [{
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
                            else:
                                sub_dict[f"{class_codes[arrow].upper()} {course['catalog_number']}"] = [{
                                    "class_number": course["class_number"],
                                    "enrollment_cap": course["enrollment_cap"],
                                    "enrollment_count": course["enrollment_count"],
                                    "waitlist_cap": course["waitlist_cap"],
                                    "waitlist_count": course["waitlist_count"],
                                    "instructor": "Staff",
                                    "days": course["meetings"][0]["days"],
                                    "location": course["meetings"][0]["location"],
                                    "start_time": course["meetings"][0]["start_time"],
                                    "end_time": course["meetings"][0]["end_time"],
                                }]
                print(class_codes[arrow]) 
                break
            except json.decoder.JSONDecodeError:
                print(f"{class_codes[arrow]} caused decode error")
        # pp(sub_dict)
        sub_dict_section = {}
        for k in sub_dict.keys():
            sec_list = sub_dict[k].copy()
            sub_dict_section[k] = {}
            for sl in sec_list:
                sub_dict_section[k][sl["class_number"]] = sl
        """   
        json.dump(sub_dict_section, open(f"./results_api/{class_codes[arrow]}_schedule.json", "w"), indent=4)
        



import threading
import multiprocessing


if __name__ == "__main__":  
    
    t = []
    class_codes = ['AE']
    for code in class_codes:
        t.append(threading.Thread(target=gather, args=(class_codes.index(code),)))
        t[len(t)-1].start()

    
    for a in t:    
        a.join()
            
    cta = []
    pta = []
    tta = []

    for code in class_codes:
        with open(f"./results_web/{code}_schedule.json") as sub:
            sub = json.load(sub)
            for course in sub:  
                try:
                    rootCursor.execute(f"select title from csun.{code}_view where catalog_number = '{course['catalog_number']}'")
                except mariadb.ProgrammingError:
                    tta.append(f"csun.{code}_view")
                except TypeError:
                    print(course)
                    
                    
                    
                    
                try:
                    course["title"] = rootCursor.fetchall()[0][0]
                except (IndexError, mariadb.ProgrammingError):
                    cta.append(f"{course['subject']} {course['catalog_number']}")
                    cta = sorted(list(set(cta)))




                # rootCursor.execute(f"select email from professor")
                # possible_emails = []
                # if course["instructor"] != "Staff":
                #     try:
                #         for r in rootCursor.fetchall():
                #             if r[0].split("@")[0].__contains__(f".{course['instructor'].split(',')[0].lower()}") or r[0].split("@")[0].__contains__(course["instructor"].split(",")[1].lower()):
                #                 possible_emails.append(r)
                #     except IndexError:
                #         continue
                #     if possible_emails == []:
                #         pta.append(course["instructor"])
                #         pta = list(set(pta))
                #     course["possible_emails"] = [x[0] for x in list(set(possible_emails))]
                # else:
                #     course["possible_emails"] = []
                # if len(course["possible_emails"]) == 1:
                #     course["instructor"] = course["possible_emails"][0]
                
                
                
            json.dump(sub, open(f"./results_web/{code}_schedule.json", "w"), indent=4)
    json.dump({"courses_to_add": sorted(list(set(cta))), "professors_to_add": sorted(list(set(pta))),
              "tables_that_dont_exist": sorted(list(set(tta)))}, open("Missing_Items_2.json", "w"), indent=4)
 

    for code in class_codes:
        classes = []
        try:
            with open(f"./results_web/{code}_schedule.json") as schedule_file:
                all_classes = {}
                sf = json.load(schedule_file)
                # pprint.pprint(sf)
                for course in sf:
                    try:
                        all_classes[f"{code.upper()} {course['catalog_number']}"].append({
                            "class_number": course["class_number"],
                            "enrollment_cap": course["enrollment_cap"],
                            "enrollment_count": course["enrollment_count"],
                            "instructor": course["instructor"],
                            "days": course["days"],
                            "location": course["location"],
                            "start_time": course["start_time"],
                            "end_time": course["end_time"]
                            # "possible_emails": course["possible_emails"]
                        })
                    except KeyError:
                        all_classes[f"{code.upper()} {course['catalog_number']}"] = [{
                            "class_number": course["class_number"],
                            "enrollment_cap": course["enrollment_cap"],
                            "enrollment_count": course["enrollment_count"],
                            "instructor": course["instructor"],
                            "days": course["days"],
                            "location": course["location"],
                            "start_time": course["start_time"],
                            "end_time": course["end_time"]
                            # "possible_emails": course["possible_emails"]
                        }]
                    tup = (course["class_number"],
                           course["enrollment_cap"],
                           course["enrollment_count"],
                           course["instructor"],
                           course["days"],
                           course["location"],
                           course["start_time"],
                           course["end_time"],
                           "fall",
                           2023)
                    try:
                        rootCursor.execute("insert into section(class_number,enrollment_cap,enrollment_count,instructor,days,location,start_time,end_time,semester, year) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%d)", tup)
                    except mariadb.IntegrityError:
                        continue
                sub_dict_section = {}
                for k in all_classes.keys():
                    sec_list = all_classes[k].copy()
                    sub_dict_section[k] = {}
                    for sl in sec_list:
                        sub_dict_section[k][sl["class_number"]] = sl
                json.dump(sub_dict_section, open(f"./results_web/{code}_schedule.json", "w"), indent=4)
                #print(*all_classes, sep="\n")
        except FileNotFoundError:
            continue


    for code in class_codes:
        with open(f"./results_web/{code}_schedule.json") as s:
            s = json.load(s)
            try:
                for c in s.keys():
                    for course in s[c].keys():
                            rootCursor.execute(f"""update section set enrollment_cap = '{s[c][course]['enrollment_cap']}', 
                                           instructor = %s, 
                                           days = '{s[c][course]['days']}', 
                                           start_time = '{s[c][course]['start_time']}', 
                                           end_time = '{s[c][course]['end_time']}',
                                           location =  '{s[c][course]['location']}',
                                           where class_number = '{s[c][course]['class_number']}'""", (s[c][course]['instructor'], ))      
            except AttributeError:
                continue
   
#     for code in class_codes:
#         with open(f"./results_api/{code}_schedule.json") as s:
#             s = json.load(s)
#             try:
#                 for c in s.keys():
#                     for course in s[c].keys():
#                         rootCursor.execute(f"""update section set 
#                                                enrollment_cap = '{s[c][course]['enrollment_cap']}', 
#                                                enrollment_count = '{s[c][course]['enrollment_count']}', 
#                                                instructor = %s, 
#                                                waitlist_cap = '{s[c][course]['waitlist_cap']}', 
#                                                waitlist_count = '{s[c][course]['waitlist_count']}',
#                                                where class_number = '{s[c][course]['class_number']}'""", (s[c][course]['instructor'], ))         
#             except AttributeError:
#                 continue
#             
#     
#     for code in class_codes:
#         with open(f"./results_web/{code}_schedule.json") as web_ss:
#             web_ss = json.load(web_ss)
#             for web_cc in web_ss.keys():
#                 for cc in web_ss[web_cc].keys():
#                     with open(f"./results_api/{code}_schedule.json") as api_ss:
#                         api_ss = json.load(api_ss)
#                         try: 
#                             web_ss[web_cc][cc] = api_ss[web_cc][cc]
#                         except KeyError:
#                             continue
#             json.dump(web_ss, open(f"./results/{code}_schedule.json", "w"), indent=4)                  
      
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()