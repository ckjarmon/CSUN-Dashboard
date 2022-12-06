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
        case "Th":
            return "R"
        case "Mo":
            return "M"
        case "We":
            return "W"
        case "Tu":
            return "T"
        case "Fr":
            return "F"
        case "MoTuWeTh":
            return "MTWR"
        case "MoWeTh":
            return "MWR"
        case "MoTuTh":
            return "MTR"
        case "MoWeFr":
            return "MWF"
        case "MoTuWe":
            return "MTW"
        case "MoTuFr":
            return "MTF"
        case "MoThFr":
            return "MRF"




def gather(arrow):
        
        
        s = Service(ChromeDriverManager().install())
        op = webdriver.ChromeOptions()
        op.add_argument('headless')
        op.add_experimental_option('excludeSwitches', ['enable-logging'])
        driver = webdriver.Chrome(service=s, options=op)
        driver.get(catalog_link)
        time.sleep(4)

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

        for a in range(0, 100):
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
                for i in range(100):
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

                        try:

                            course_dict["instructor"] = driver.find_element("id", "FACURL$" + str(i)).text
            
                        except NoSuchElementException:
                            course_dict["instructor"] = "Staff"

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

                

        json.dump(sub_sects, open(f"{class_codes[arrow]}_schedule.json", "w"), indent=4)
        driver.quit()



import threading
import multiprocessing

if __name__ == "__main__":

    t = []
    
    for code in class_codes:
        t.append(multiprocessing.Process(target=gather, args=(class_codes.index(code),)))
        t[len(t)-1].start()
    
    
    for a in t:    
        a.join()
            
    cta = []
    pta = []
    tta = []

    for code in class_codes:
        with open(f"{code}_schedule.json") as sub:
            sub = json.load(sub)
            for course in sub:  
                try:
                    rootCursor.execute(f"select title from csun.{code}_view where catalog_number = '{course['catalog_number']}'")
                except mariadb.ProgrammingError:
                    tta.append(f"csun.{code}_view")
                except TypeError:
                    print(course['catalog_number'])
                    
                    
                    
                    
                try:
                    course["title"] = rootCursor.fetchall()[0][0]
                except (IndexError, mariadb.ProgrammingError):
                    cta.append(f"{course['subject']} {course['catalog_number']}")
                    cta = list(set(cta))




                rootCursor.execute(f"select email from professor")
                possible_emails = []
                if course["instructor"] != "Staff":
                    try:
                        for r in rootCursor.fetchall():
                            if r[0].split("@")[0].__contains__(f".{course['instructor'].split(',')[0].lower()}") or r[0].split("@")[0].__contains__(course["instructor"].split(",")[1].lower()):
                                possible_emails.append(r)
                    except IndexError:
                        continue
                    if possible_emails == []:
                        pta.append(course["instructor"])
                        pta = list(set(pta))
                    course["possible_emails"] = [x[0] for x in list(set(possible_emails))]
                else:
                    course["possible_emails"] = []
                if len(course["possible_emails"]) == 1:
                    course["instructor"] = course["possible_emails"][0]
                
                
                
            json.dump(sub, open(f"{code}_schedule.json", "w"), indent=4)
    json.dump({"courses_to_add": list(set(cta)), "professors_to_add": list(set(pta)),
              "tables_that_dont_exist": list(set(tta))}, open("shit_to_add.json", "w"), indent=4)
 

    for code in class_codes:
        classes = []
        try:
            with open(f"{code}_schedule.json") as schedule_file:
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
                            "end_time": course["end_time"],
                            "possible_emails": course["possible_emails"]
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
                            "end_time": course["end_time"],
                            "possible_emails": course["possible_emails"]
                        }]
                json.dump(all_classes, open(f"{code}_schedule.json", "w"), indent=4)
                #print(*all_classes, sep="\n")
        except FileNotFoundError:
            continue


    for code in class_codes:
        with open(f"{code}_schedule.json") as s:
            s = json.load(s)
            try:
                for c in s.keys():
                    for course in s[c]:
                            rootCursor.execute(f"""update section set enrollment_cap = '{course['enrollment_cap']}', 
                                           instructor = %s, 
                                           days = '{course['days']}', 
                                           start_time = '{course['start_time']}', 
                                           end_time = '{course['end_time']}',
                                           location =  '{course['location']}'
                                           where class_number = '{course['class_number']}'""", (course['instructor'], ))      
            except AttributeError:
                continue
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()