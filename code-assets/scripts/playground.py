import json


class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","EOH","EPC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUST","SWRK","TH","UNIV","URBS"]


def one():
    for code in class_codes:
        print(f"Settings prereqs and coreqs for {code}")
        with open(f"../../code-assets/backend/json_catalog/{code}_catalog.json") as catalog_file:
            try:
                classes = json.load(catalog_file)
                for _class in classes:
                    #print(f"Settings prereqs and coreqs for {_class['subject']} {_class['catalog_number']}")
                    if _class["description"] is not None:
                        if _class["description"].__contains__("Prerequisite") or _class["description"].__contains__("Prerequisites"):
                            prereq_substr = _class["description"][_class["description"].index("Prerequisite"):]
                            try:
                                _class["prerequisites"] = prereq_substr[prereq_substr.index(':')+2:prereq_substr.index('.')]
                            except ValueError:
                                _class["prerequisites"] = prereq_substr[prereq_substr.index("Prerequisite")+len("Prerequisite")+1:prereq_substr.index('.')]
                        else: 
                            _class["prerequisites"] = "None"

                        if _class["description"].__contains__("Corequisite") or _class["description"].__contains__("Corequisites"):
                            coreq_substr = _class["description"][_class["description"].index("Corequisite"):]
                            try:
                                _class["corequisites"] = coreq_substr[coreq_substr.index(':')+2:coreq_substr.index('.')]
                            except ValueError:
                                try:
                                    _class["corequisites"] = coreq_substr[coreq_substr.index("Corequisite")+len("Corequisite")+1:coreq_substr.index('.')]
                                except ValueError:
                                    _class["corequisites"] = "ERROR"
                        else:
                            _class["corequisites"] = "None"
                        try:
                            if _class["corequisites"] == f"{_class['subject']} {_class['catalog_number']}":
                                _class["corequisites"] = _class["corequisites"].replace("L", "")
                        except KeyError:
                            continue
                    else:
                        print(f"{_class['subject']} {_class['catalog_number']} removed")
                        classes.remove(_class)
                catalog_file = open(f"../backend/json_catalog/{code}_catalog.json", "w")
                json.dump(classes, catalog_file, indent=4)
            except json.JSONDecodeError as jce:
                with open('ERROR_LOG.txt', 'a') as f:
                    f.write(str(jce))
                    f.write("\n")

def two():
    for code in class_codes:
        with open(f"../../code-assets/backend/json_catalog/{code}_catalog.json") as catalog_file:
            try:
                classes = json.load(catalog_file)
                for _class in classes:
                    if (_class['prerequisites'] != "None" and  
                        _class['corequisites'] != "None" and 
                        not _class['prerequisites'].__contains__("passing score") and
                        not _class['prerequisites'].__contains__("Instructor consent") and
                        not _class['prerequisites'].__contains__("Admission") and
                        not _class['prerequisites'].__contains__("Acceptance") and
                        not _class['prerequisites'].__contains__("standing") and
                        not _class['prerequisites'].__contains__("Admitted") and
                        not _class['prerequisites'].__contains__("admitted") and
                        not _class['prerequisites'].__contains__("courses") and
                        not _class['prerequisites'].__contains__("skills") and
                        not _class['prerequisites'].__contains__("Successful")):
                        
                        print(f"{_class['subject']} {_class['catalog_number']} - Prereqs: {_class['prerequisites']}, Coreqs: {_class['corequisites']}")   
            except json.JSONDecodeError as jce:
                with open('ERROR_LOG.txt', 'a') as f:
                    f.write(str(jce))
                    f.write("\n")    
                    

def three():
    for code in class_codes:
        with open(f"../../code-assets/backend/json_catalog/{code}_catalog.json") as catalog_file:
            classes = json.load(catalog_file)
            for _class in classes:
                try:
                    _class["prerequisites"] = _class["prerequisites"]
                except KeyError:
                    print(_class["subject"] + " " + _class["catalog_number"] + " Prereqs missing")
                try:
                    _class["corequisites"] = _class["corequisites"]
                except KeyError:
                    print(_class["subject"] + " " + _class["catalog_number"] + " Coreqs missing")
                    

def four():
    from selenium.common.exceptions import NoSuchElementException
    from selenium import webdriver
    from selenium.webdriver.common.keys import Keys
    from selenium import webdriver
    from selenium.webdriver.chrome.service import Service
    from selenium.webdriver.common.keys import Keys
    from webdriver_manager.chrome import ChromeDriverManager
    from selenium.webdriver.common.by import By

    s = Service(ChromeDriverManager().install())
    op = webdriver.ChromeOptions()
    op.add_argument('headless')
    op.add_experimental_option('excludeSwitches', ['enable-logging'])
    driver = webdriver.Chrome(service=s, options=op)


    for code in class_codes:
        with open(f"../../code-assets/backend/json_catalog/{code}_catalog.json") as curr_sub:
            try:
                classes = json.load(curr_sub)
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
            except json.JSONDecodeError as jce:
                with open('ERROR_LOG.txt', 'a') as f:
                    f.write(str(jce))
                    f.write("\n")



if __name__ == "__main__":
    three()
    
        