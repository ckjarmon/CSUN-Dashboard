import json
import mysql
from collections import OrderedDict
import re
import pprint




class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","EOH","EPC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUST","SWRK","TH","UNIV","URBS"]


def a():
    for code in class_codes:
        print(f"Settings prereqs and coreqs for {code}")
        with open(f"../../code-assets/backend/data/json_catalog/{code}_catalog.json") as catalog_file:
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
                catalog_file = open(f"../backend/data/json_catalog/{code}_catalog.json", "w")
                json.dump(classes, catalog_file, indent=4)
            except json.JSONDecodeError as jce:
                with open('ERROR_LOG.txt', 'a') as f:
                    f.write(str(jce))
                    f.write("\n")
                    
                    

"""Testing how to rate accessibilty of a course"""
"""
- A prereq string has multiple parts
    - Subject Number Combos
    - Words like "and", "or", and ";" which also signifies "and" or a compound requirement
    - A sentence describing a requirment
        - For example: "Completion of the lower division writing requirement"
                       "Junior standing"
                       "Instructor consent"
All of these attributes carry a certain weight regarding their accessibility.         
"""

def b():
    class_codes = ["COMP"]
    for code in class_codes:
        with open(f"../../code-assets/backend/data/json_catalog/{code}_catalog.json") as catalog_file:
            try:
                classes = json.load(catalog_file)
                for _class in classes:
                    if (_class['prerequisites'] != "None"):
                        # not _class['prerequisites'].__contains__("passing score") and
                        # not _class['prerequisites'].__contains__("Instructor consent") and
                        # not _class['prerequisites'].__contains__("Admission") and
                        # not _class['prerequisites'].__contains__("Acceptance") and
                        # not _class['prerequisites'].__contains__("standing") and
                        # not _class['prerequisites'].__contains__("Admitted") and
                        # not _class['prerequisites'].__contains__("admitted") and
                        # not _class['prerequisites'].__contains__("courses") and
                        # not _class['prerequisites'].__contains__("skills") and
                        # not _class['prerequisites'].__contains__("Successful")):
                        
                        #print(f"{_class['subject']} {_class['catalog_number']} - Prereqs: {_class['prerequisites']}, Coreqs: {_class['corequisites']}")   
                        #print(f"{_class['prerequisites'].split()}")  
                        # [A-Z]+[ ][0-9]*[\/?][L?][ and]* [A-Z]+[ ][0-9]*[\/?]*[L?]*[;?]* 
                        # [A-Z]+[ ][0-9]+[\/L]?[[\/?]*[L?]*]?[A*B*C*]? Pattern for Subject Catalog_Number Combo
                        print("-------------------------------------------------------")
                        print(f"{_class['subject']} {_class['catalog_number']}")
                        print(f"Prereqs: {_class['prerequisites']}")
                        
                        subject_code_pairs = set(re.findall("[A-Z]+[ ][0-9]+[\/L]?[[\/?]*[L?]*]?[[\/?]*[P?]*]?[A*B*C*]?[[\/?]*[L?]*]?[[A-Z]*]?", _class['prerequisites']))
                        sentence_prereqs = [(x.lstrip(), set(re.findall("[A-Z]+[ ][0-9]+[\/L]?[[\/?]*[L?]*]?[[\/?]*[P?]*]?[A*B*C*]?[[\/?]*[L?]*]?[[A-Z]*]?", x))) for x in re.findall("[a-zA-Z0-9_\-\’\/\(\)\“\”\, ]*", _class['prerequisites']) if x != '']

                        # print("----Before Removal----")
                        # print(subject_code_pairs)
                        # print(*sentence_prereqs, sep="\n") 
                        # print()       
                        
                        

                        for tup in sentence_prereqs:
                            if re.match(re.compile(r"[A-Z]+[ ][0-9]+[\/L]?[[\/?]*[L?]*]?[[\/?]*[P?]*]?[A*B*C*]?[[\/?]*[L?]*]?[[A-Z]*]?"), tup[0]) is None:
                                subject_code_pairs = subject_code_pairs.difference(set(tup[1]))

                        sentence_prereqs = [x for x in sentence_prereqs if re.match(r"[A-Z]+[ ][0-9]+[\/L]?[[\/?]*[L?]*]?[[\/?]*[P?]*]?[A*B*C*]?[[\/?]*[L?]*]?[[A-Z]*]?", x[0]) is None] 
                        # print("----After Removal----")
                        # print(f"Class set: {subject_code_pairs} \nSentence set: \n", end="")
                        # print(*sentence_prereqs, sep="\n")     
                        # print()   
 
         
                        
                        # print(f"WPE 30% - DEC - Class Prereq count - {len(subject_code_pairs)} \n\t{subject_code_pairs}")
                        # print(f"WPE 25% - DEC - Sentence Prereq count - {len(sentence_prereqs)} \n\t[{sentence_prereqs}]")
                        # print(f"WPE 15% - INC - 'or' count - {sum([x[0].count(' or ') for x in sentence_prereqs])}")
                        # print(f"WPE 15% - DEC - 'and' count - {sum([x[0].count(' and ') for x in sentence_prereqs])}")
                        # print(f"WPE 15% - INC - Equivalent of any prereq allowed? => {_class['prerequisites'].count('equivalent') > 0}")
                        Accessibility_Rating = 100
                        
                        
                        prereq_weight =  ((len(subject_code_pairs)) * .3)
                        sentence_prereq_weight = (len(sentence_prereqs) * .25)
                        if (sum([x[0].count(' or ') for x in sentence_prereqs]) - sum([x[0].count(' or better') for x in sentence_prereqs])) > 0:
                            or_weight = ((sum([x[0].count(' or ') for x in sentence_prereqs]) - sum([x[0].count(' or better') for x in sentence_prereqs]))  * (.15/(len(sentence_prereqs) /(sum([x[0].count(' or ') for x in sentence_prereqs]) - sum([x[0].count(' or better') for x in sentence_prereqs]))**-1)))
                        elif len(sentence_prereqs) > 0:
                            or_weight = ((sum([x[0].count(' or ') for x in sentence_prereqs]) - sum([x[0].count(' or better') for x in sentence_prereqs]))  * (.15/(len(sentence_prereqs))))
                        else:
                            or_weight = ((sum([x[0].count(' or ') for x in sentence_prereqs]) - sum([x[0].count(' or better') for x in sentence_prereqs]))  * (.15))
                        

                        and_weight = (sum([x[0].count(' and ') for x in sentence_prereqs]) * .15) 
                        equiv_weight = (_class['prerequisites'].count('equivalent')* .15) 
                        
                        print(f"All the counts  {len(subject_code_pairs)} {len(sentence_prereqs)} {sum([x[0].count(' or ') for x in sentence_prereqs]) - sum([x[0].count(' or better') for x in sentence_prereqs])} {sum([x[0].count(' and ') for x in sentence_prereqs])} {_class['prerequisites'].count('equivalent') > 0}")
                        print(f"All the weights {prereq_weight} {sentence_prereq_weight} {or_weight} {and_weight} {equiv_weight}")
                        Accessibility_Rating -= Accessibility_Rating * prereq_weight 
                        Accessibility_Rating -= Accessibility_Rating * sentence_prereq_weight
                        Accessibility_Rating += Accessibility_Rating * or_weight
                        Accessibility_Rating -= Accessibility_Rating * and_weight
                        Accessibility_Rating += Accessibility_Rating * equiv_weight
                        print(f"Accessibility Rating - {str(Accessibility_Rating)[:str(Accessibility_Rating).find('.')+2]}%")
                        #print(f"comma count - {_class['prerequisites'].count(',')}")
                        print("-------------------------------------------------------")
                        print() 
            except json.JSONDecodeError as jce:
                with open('ERROR_LOG.txt', 'a') as f:
                    f.write(str(jce))
                    f.write("\n")    
                    

def c():
    for code in class_codes:
        with open(f"../../code-assets/backend/data/json_catalog/{code}_catalog.json") as catalog_file:
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
                    

def d():
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
        with open(f"../../code-assets/backend/data/json_catalog/{code}_catalog.json") as curr_sub:
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
                new_desc_file = open(f"../../code-assets/backend/data/json_catalog/{code}_catalog.json", "w")
                json.dump(classes, new_desc_file, indent=4)
                new_desc_file.close() 
            except json.JSONDecodeError as jce:
                with open('ERROR_LOG.txt', 'a') as f:
                    f.write(str(jce))
                    f.write("\n")







def e():
    class_codes = ["COMP"]
    for code in class_codes:
        with open(f"../../code-assets/backend/data/json_catalog/{code}_catalog.json") as catalog_file:
            classes = json.load(catalog_file)
            for _class in classes:
                if (_class['prerequisites'] != "{None}"):
                    print(f"--------------\n{_class['prerequisites']}")  
                    print(parse(_class['prerequisites']).lstrip())
                    print("\n--------------")
       
def f():
    import os
    print(os.getcwd())
    with open(f"{os.getcwd()}/../statistical-data/time_stats.json") as time_json:
        time_dict = json.load(time_json)
        for code in class_codes:    
            time_dict[code] = {key: val for key, val in sorted(time_dict[code].items(), key = lambda ele: ele[0])}
        json.dump(time_dict, open(f"{os.getcwd()}/../statistical-data/time_stats.json", "w"), indent=4)




def g():
    for name in major_names:
        print(name)
        with open(f"../../code-assets/backend/data/json_majors/{name}.json") as major_file:
                major = json.load(major_file)
                #major["course-sets"] = major["prog-reqq-blob"]
                major["course-sets"] = {}
                major["course-sets"]["required"] = major["prog-reqq-blob"]
                major = OrderedDict(sorted(major.items()))
                json.dump(major, open(f"../../code-assets/backend/data/json_majors/{name}.json", "w"), indent=4) 


def h():
    for name in major_names:
        print(f"\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ => {name}")
        with open(f"../../code-assets/backend/data/json_majors/{name}.json") as major_file:
                major_file = json.load(major_file)
                #major["course-sets"] = major["prog-reqq-blob"]
                #major["course-sets"] = {}
                #major["course-sets"]["required"] = major["prog-reqq-blob"]
                
                for i in range(len(major_file['course-sets']['required'])):    
                    if type(major_file['course-sets']['required'][i]) == str:
                        try:
                            print(str(re.match("[A-Z]{2,4} [0-9A-Z\/\-]{1,}", major_file['course-sets']['required'][i]).group()) + " ==> From: " + major_file['course-sets']['required'][i])
                            if major_file['course-sets']['required'][i].__contains__(str(re.match("[A-Z]{2,4} [0-9A-Z\/\-]{1,}", major_file['course-sets']['required'][i]).group()) + "L"):
                                major_file['course-sets']['required'][i] = str(re.match("[A-Z]{2,4} [0-9A-Z\/\-]{1,} ", major_file['course-sets']['required'][i]).group()) + "/L"
                            else:
                                major_file['course-sets']['required'][i] = str(re.match("[A-Z]{2,4} [0-9A-Z\/\-]{1,} ", major_file['course-sets']['required'][i]).group()) 
                          
                        except AttributeError:
                            #print("|||___________||| => string")
                            continue
                            
                    elif type(major_file['course-sets']['required'][i]) == list:
                        #print(f"||||||: Not string => {type(major_file['course-sets']['required'][i])}")
                        for j in range(len(major_file['course-sets']['required'][i][1:])):
                            try:
                                print(str(re.match("[A-Z]{2,4} [0-9A-Z\/\-]{1,}", major_file['course-sets']['required'][i][1:][j]).group()) + " ==> From: " + major_file['course-sets']['required'][i][1:][j])
                                if major_file['course-sets']['required'][i][1:][j].__contains__(str(re.match("[A-Z]{2,4} [0-9A-Z\/\-]{1,}", major_file['course-sets']['required'][i][1:][j]).group()) + "L"):
                                    major_file['course-sets']['required'][i][1:][j] = str(re.match("[A-Z]{2,4} [0-9A-Z\/\-]{1,} ", major_file['course-sets']['required'][i][1:][j]).group()) + "/L"
                                else:
                                    major_file['course-sets']['required'][i][1:][j] = str(re.match("[A-Z]{2,4} [0-9A-Z\/\-]{1,} ", major_file['course-sets']['required'][i][1:][j]).group()) 
                              
                            except AttributeError:
                                #print("|||___________||| => string")
                                continue
                                                        
                json.dump(major_file, open(f"../../code-assets/backend/data/json_majors/{name}.json", "w"), indent=4)
                
randomarray = [
                "CADV 327 Infancy and Early Childhood (3)",
                "PSY 327 Infancy and Early Childhood (3)",
                "CADV 335 Middle Childhood (3)"
            ]
def i():
    for j in range(len(randomarray)):
        try:
            #print(str(re.match("[A-Z]{2,4} [0-9A-Z\/\-]{1,}", randomarray[j]).group()) + " ==> From: " + randomarray[j])
            if randomarray[j].__contains__(str(re.match("[A-Z]{2,4} [0-9A-Z\/\-]{1,}", randomarray[j]).group()) + "L"):
                randomarray[j] = str(re.match("[A-Z]{2,4} [0-9A-Z\/\-]{1,} ", randomarray[j]).group()) + "/L"
            else:
                randomarray[j] = str(re.match("[A-Z]{2,4} [0-9A-Z\/\-]{1,} ", randomarray[j]).group()) 
          
        except AttributeError:
            #print("|||___________||| => string")
            continue
    print(*[f"\"{x.rstrip(' ')}\"," for x in randomarray], sep="\n")                                      


final_dict = {}
def mark_core_count(item, weight):
    if type(item) == str:
        p = item.split("/")

        try:
            final_dict[p[0].rstrip(" ").lstrip(" ")] += weight
        except KeyError:
            final_dict[p[0].rstrip(" ").lstrip(" ")] = weight
            
        for c in p[1:]:
            #print(f"{p[0]}{c}")
            try:
                final_dict[f"{p[0].rstrip(' ').lstrip(' ')}{c}"] += weight
            except KeyError:
                final_dict[f"{p[0].rstrip(' ').lstrip(' ')}{c}"] = weight
    elif type(item) == list:
        if item[0][0] == "|":
            for i in item[1:]:
                mark_core_count(i, weight/(len(item)-1))
        else:
            for i in item[1:]:
                mark_core_count(i, weight)
    elif type(item) == dict:
        pprint.pprint(item)
        
        
        
#major_names = ["B.S., Computer Science", "B.S., Chemistry"]


def j():
    opers = []
    for name in major_names:
        #print(f"\n-_-_=> {name}")
        with open(f"../../code-assets/backend/data/json_majors/{name}.json") as major_file:
            major_course_set = json.load(major_file)["course-sets"]["required"]
            mark_core_count(major_course_set, 1)
    final_dict = dict(sorted(final_dict.items(), key= lambda x:x[1], reverse=True))
    json.dump(final_dict, open("core_counts.json", "w"), indent=4)        





    
class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","AT","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","ENT","EOH","EPC","FCFC","FCHC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HHD","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LIB","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUS","SUST","SWRK","TH","UNIV","URBS"]

def k():
    for code in class_codes:
        course_links = []
        with open(f"../../code-assets/backend/data/json_catalog/{code}_catalog.json") as catalog_file:
            for course in json.load(catalog_file):
                course_links.append(f"https://catalog.csun.edu/academics/{code.lower()}/courses/{code.lower()}-{course['catalog_number']}/")
    print(*course_links, sep='\n')


def l():
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

    broken = []
    titles = {}
    for code in class_codes:
        print(code.upper())
        titles[code.upper()] = {}
        try:    
            with open(f"../../code-assets/backend/data/json_catalog/{code}_catalog.json") as catalog_file:
                for course in json.load(catalog_file):
                    try:
                        #print("------------------------------------------")
                        #print(f"https://catalog.csun.edu/academics/{code.lower()}/courses/{code.lower()}-{course['catalog_number']}/")
                        driver.get(f"https://catalog.csun.edu/academics/{code.lower()}/courses/{code.lower()}-{course['catalog_number']}/")
                        #print(driver.find_element("id", "inset-content").text)
                        title = driver.find_element(By.CLASS_NAME, "main").find_element(By.CLASS_NAME, "container").find_element(By.CLASS_NAME, "row").find_element(By.CLASS_NAME, "row").text
                        title = " ".join(title.split(" ")[0:len(title.split())-1])
                        if course['catalog_number'][len(course['catalog_number'])-1] != 'L':
                            title = title.replace(" and Lab", "")
                        else:
                            if title.__contains__(" and Lab"):
                                title = title.replace(" and Lab", ' Lab')
                            else:
                                title += " Lab" 
                        titles[code.upper()][   f"{code.upper()} {course['catalog_number']}"] = ' '.join(title.split()[3:len(title.split())])     
                        #print(driver.find_element("id", "wrap").find_element(By.CLASS_NAME, "row").text)
                        #course["description"] = driver.find_element("id", "inset-content").find_element(By.CLASS_NAME, "section-content").text
                    except NoSuchElementException:
                        broken.append(f"https://catalog.csun.edu/academics/{code.lower()}/courses/{code.lower()}-{course['catalog_number']}/")
        except FileNotFoundError:
            continue
    #print()
    #print(*[f"{x[0]} {' '.join(x[1].split()[3:len(x[1].split())-1])}" for x in titles], sep='\n')
    pprint.pprint(titles)
    print()
    print(*broken, sep='\n')
    json.dump(titles, open("actual_titles.json", "w"), indent=4)  




def m():
    for code in class_codes:
        classes = []
        try:
            with open(f"../../code-assets/backend/data/json_schedule_dead/{code}_schedule.json") as schedule_file:
                all_classes = {}
                for course in json.load(schedule_file)["classes"]:
                    try:
                        all_classes[f"{code.upper()} {course['catalog_number']}"].append({
                            "class_number": course["class_number"],
                            "enrollment_cap": course["enrollment_cap"],
                            "enrollment_count": course["enrollment_count"],
                            "instructor": course["instructors"][0]["instructor"],
                        } | course["meetings"][0])
                    except KeyError:
                        all_classes[f"{code.upper()} {course['catalog_number']}"] = [{
                            "class_number": course["class_number"],
                            "enrollment_cap": course["enrollment_cap"],
                            "enrollment_count": course["enrollment_count"],
                            "instructor": course["instructors"][0]["instructor"],
                        } | course["meetings"][0]]

                json.dump(all_classes, open(f"../../code-assets/backend/data/json_schedule/{code}_schedule.json", "w"), indent=4)
                #print(*all_classes, sep="\n")
        except FileNotFoundError:
            continue


def n():
    with open("../scratch-data/actual_titles.json") as titles:
        titles = json.load(titles)
        for key in titles.keys():
            try:    
                with open(f"../../code-assets/backend/data/json_catalog/{key}_catalog.json") as curr_catalog:
                    curr_catalog = json.load(curr_catalog)
                    for course in titles[key].keys():
                        for cinc in curr_catalog:
                            if cinc["catalog_number"] == course.split()[1]:
                                cinc["title"] = titles[key][course]
                    json.dump(curr_catalog, open(f"../../code-assets/backend/data/json_catalog/{key}_catalog.json", "w"), indent=4)
            except FileNotFoundError:
                continue                

def o():
    max = 0
    for code in class_codes:
        try:
            with open(f"../../code-assets/backend/data/json_catalog/{code}_catalog.json") as catalog_file:
                for course in json.load(catalog_file):
                    try:
                        if len(course["title"]) > max:
                            max = len(course["title"])
                    except KeyError:
                        print(course)
                        
        except FileNotFoundError:
            continue
    print(max)
             



def p():
    for code in class_codes:
        try:    
            with open(f"../../code-assets/backend/data/json_schedule/{code}_schedule.json") as catalog_file:
                catalog_file = json.load(catalog_file)

                for key in catalog_file.keys():
                    curr_key = []
                    for course in catalog_file[key]:
                        curr_key.append(course | {"subject": key.split(" ")[0]})
                    catalog_file[key] = curr_key

                json.dump(catalog_file,open(f"../../code-assets/backend/data/json_schedule/{code}_schedule.json", "w"), indent=4)
        except FileNotFoundError:
            continue
        

import mysql.connector
from mysql.connector import errorcode
def q():
    try:
        rootConnection = mysql.connector.connect(
            user="py_serv",
            password=json.load(open("secret.json", "r"))["db_pass"],
            host='127.0.0.1',
            database='csun')
        rootCursor = rootConnection.cursor()
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print('Invalid credentials')
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print('Database not found')
        else:
            print('Cannot connect to database:', err)
    else:    
        for code in class_codes:
            print(code)
            try:
                with open(f"../data/json_schedule/{code}_schedule.json") as schedule_file:
                    schedule = json.load(schedule_file)
                    for key in schedule.keys():
                        for c in schedule[key]:
                            tup = (c["class_number"],
                                   c["enrollment_cap"],
                                   c["enrollment_count"],
                                   c["instructor"],
                                   c["days"],
                                   c["location"],
                                   c["start_time"],
                                   c["end_time"],
                                   c["catalog_number"],
                                   c["subject"])
                            print(tup.__str__())
                            rootCursor.execute('insert into section values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)', tup)
            except FileNotFoundError as f:
                print(f)
                continue
                
    rootConnection.commit()
    rootCursor.close()
    rootConnection.close()
           
def r():
    for code in class_codes:
        try:    
            with open(f"../data/json_historical_profs/{code}_history.json") as catalog_file:
                json.dump(OrderedDict(sorted(json.load(catalog_file).items())), open(f"../data/json_historical_profs/{code}_history.json", "w"), indent=4)

                
        except FileNotFoundError:
            print("sdfg")



                    
"""
To get operator stack for current hierarchy
    print symbol stack
    if || or && operator and stack length is 1

"""
def parse_dead(prereq):
    prereq = prereq.replace(' && ', '&').replace(' || ', '|')
    parse_stack = []
    parsed_prereq = ""
    if not prereq.__contains__('|') and not prereq.__contains__('&') and prereq != "{}" and prereq != "":
        parsed_prereq += " " + prereq.lstrip('{').rstrip('}')
    else:
        for char in prereq:
            
            parse_stack.append(char)
            
            if parse_stack.count('{') - 1 == parse_stack.count('}'):
                print(f"New parse stack call {''.join(parse_stack[1:])}")
                parsed_prereq += str(parse(''.join(parse_stack[1:])))
                parse_stack = ['{']
            
    return parsed_prereq
           
    
# do not call initial parse call with empty string
# all initial calls should start with _res = "Take "
def parse(_sp, _res):
    sp = _sp[1:-1]
    print(sp)
    p_stack = []
    c = 0
    res = _res
    
    
    while c < len(sp):
        match sp[c]:
            case '{':
                if sp[c+1] == '{':
                    bb = sp[c:].index('}}')
                    res += parse(sp[c:][0:bb+3], "")
                    c += bb + 1
                else:
                    p_stack.append(sp[c])
            case '}':
                try:
                    p_stack.pop()
                except IndexError:
                    pass
            case '&':
                if _res == "":
                    res += "AND Take "
                else:
                    res += "\nAND\nTake "
                c += 1
            case '|':
                if _res == "":
                    res += "OR Take"
                else:     
                    res += "\nor\nTake"
                c += 1               
            case _:
                res += sp[c]
        c += 1
    # cba programming the logic to avoid these from happening so just do replace calls lol
    res = res.replace('Take Obtain', 'Obtain')
    res = res.replace('Take Earn', 'Earn')
    res = res.replace('Take Permission', 'Permission')
    res = res.replace('Take None', 'None')
    res = res.replace('Take Be', 'Be')
    res = res.replace('\n ', '\n').replace('  ', ' ')
    return repr(res) # .replace('or a passing score', 'or Earn a passing score')
    
import mariadb
if __name__ == "__main__":
    try:
        rootConnection = mariadb.connect(
            user="py_serv",
            password=json.load(open("./secret.json", "r"))["db_pass"],
            host='127.0.0.1',
            port=3306,
            database='csun')
        rootCursor = rootConnection.cursor()
    except mariadb.Error as err:
        print(f"Error connecting to MariaDB Platform: {err}")
        
    
    rootCursor.execute("select catalog_number,prerequisites from catalog where subject = 'COMP'")
    ccs = rootCursor.fetchall()
    for r in ccs:
        print("\n--------------")
        print(r[0])
        rootCursor.execute(f"""update catalog set parsed_prereq = %s
                           where subject = 'COMP' and catalog_number = '{r[0]}'""", (parse(r[1], "Take "),))
        print(parse(r[1], "Take "))
    
    rootConnection.commit()
    
        
