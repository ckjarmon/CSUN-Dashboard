from selenium.common.exceptions import NoSuchElementException
import selenium.common.exceptions
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
import time
import json
import mariadb
import urllib3
import schedule



class_codes = ["AE", 
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
"FCBE", 
"FCCA", 
"FCHC", 
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
"INDS", 
"IS", 
"ITAL", 
"JS", 
"JAPN", 
"JOUR", 
"KIN", 
"KNFC", 
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
results = {} 

try:
    rootConnection = mariadb.connect(
        user="py_serv",
        password="q1w2e3r4!@#$",
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
    day_map = {
        "Mo": "M",
        "Tu": "T",
        "We": "W",
        "Th": "R",
        "Fr": "F",
        "Sa": "S"
    }

    for day in day_map:
        days_str = days_str.replace(day, day_map[day])

    return days_str





def gather(arrow):
    results[class_codes[arrow]] = {} 
    for sem_key in ["2233", "2237"]:
        s = Service()
        op = webdriver.ChromeOptions()
        op.add_argument('--headless')
        op.add_experimental_option('excludeSwitches', ['enable-logging'])
        driver = webdriver.Chrome(service=s, options=op)
        driver.get(catalog_link)
        time.sleep(4)

        # Semester
        driver.find_element('id', 'NR_SSS_SOC_NWRK_STRM').click()
        time.sleep(1)
        driver.find_element('id', 'NR_SSS_SOC_NWRK_STRM').send_keys(sem_key, Keys.ENTER)
        time.sleep(1)
        
        
        
        while True:
            try:
                driver.find_element('id', 'EXPANDCNT').click()
                time.sleep(1)
                break
            except (selenium.common.exceptions.StaleElementReferenceException, selenium.common.exceptions.ElementClickInterceptedException):
                continue
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
                for _ in range(600):
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

                        driver.find_element("id", "CLASS_DETAILS$IMG$0").click()
                        time.sleep(2)

                        results[class_codes[arrow]][course_dict["catalog_number"]] = driver.find_element("id", "NR_SSS_SOC_NWRK_DESCRLONG_NOTES").text
                        
                        driver.find_element("id", "NR_SSS_SOC_NWRK_RETURN_PB$110$").click()
                        time.sleep(2)
                        break
                        
                        # print(course_dict)
                        # sub_sects.append(dict(course_dict))
                        # print(*sub_sects, sep='\n')
                        # print(sub_sects)
                    except NoSuchElementException:
                        break            
                # print("Session\tSection\tClass#\tSeats\tStatus\tComp\tLoc\tDays\tTime\t\t   Faculty")
                
                # print(section_title)

                

                while True:
                    try:
                        driver.find_element("id", "SOC_DETAIL1$" + str(a)).click()
                        time.sleep(3)
                        break
                    except (selenium.common.exceptions.StaleElementReferenceException, selenium.common.exceptions.ElementClickInterceptedException):
                        continue
            except NoSuchElementException:  # if no more classes for a subject
                continue

                

        # json.dump(sub_sects, open(f"./results/{class_codes[arrow]}_schedule.json", "w"), indent=4)

        driver.quit()
        



import threading



 
def da_job():
    semaphore = threading.BoundedSemaphore(5) # allow up to 5 threads to run at once
    
    def gather_wrapper(code_index):
        with semaphore:
            gather(code_index)
    
    t = []

    # for code in class_codes:
    t.append(threading.Thread(target=gather_wrapper, args=(class_codes.index("COMP"),)))
    t[-1].start()

    
    for a in t:    
        a.join()

    from pprint import pprint
    pprint(results)
    json.dump(results, open(f"./web_desc_regis_portal.json", "w"), indent=4)


    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
    
    
if __name__ == "__main__":
    da_job()
