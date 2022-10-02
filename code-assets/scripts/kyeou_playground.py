import json
from textwrap import indent




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
import re
def two():
    class_codes = ["COMP"]
    for code in class_codes:
        with open(f"../../code-assets/backend/json_catalog/{code}_catalog.json") as catalog_file:
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


"""
To get operator stack for current hierarchy
    print symbol stack
    if || or && operator and stack length is 1

"""
def parse(prereq):
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
    




def five():
    class_codes = ["COMP"]
    for code in class_codes:
        with open(f"../../code-assets/backend/json_catalog/{code}_catalog.json") as catalog_file:
            classes = json.load(catalog_file)
            for _class in classes:
                if (_class['prerequisites'] != "{None}"):
                    print(f"--------------\n{_class['prerequisites']}")  
                    print(parse(_class['prerequisites']).lstrip())
                    print("\n--------------")
       
def six():
    import os
    print(os.getcwd())
    with open(f"{os.getcwd()}/../statistical-data/time_stats.json") as time_json:
        time_dict = json.load(time_json)
        for code in class_codes:    
            time_dict[code] = {key: val for key, val in sorted(time_dict[code].items(), key = lambda ele: ele[0])}
        json.dump(time_dict, open(f"{os.getcwd()}/../statistical-data/time_stats.json", "w"), indent=4)



major_links = [
"https://catalog.csun.edu/academics/acct/programs/bs-accountancy-ii/information-systems/"
,"https://catalog.csun.edu/academics/acct/programs/bs-accountancy-i/professional-accountancy/"
,"https://catalog.csun.edu/academics/afrs/programs/ba-africana-studies-i/african-and-african-american-social-sciences/"
,"https://catalog.csun.edu/academics/afrs/programs/ba-africana-studies-ii/african-and-african-american-humanities-and-cultural-studies/"
,"https://catalog.csun.edu/academics/afrs/programs/ba-africana-studies-iii/african-american-urban-education/"
,"https://catalog.csun.edu/academics/anth/programs/ba-anthropology/"
,"https://catalog.csun.edu/academics/art/programs/ba-art/"
,"https://catalog.csun.edu/academics/aas/programs/ba-asian-american-studies-i/standard-major/"
,"https://catalog.csun.edu/academics/aas/programs/ba-asian-american-studies-ii/double-major/"
,"https://catalog.csun.edu/academics/kin/programs/bs-athletic-training/"
,"https://catalog.csun.edu/academics/chem/programs/bs-biochemistry/"
,"https://catalog.csun.edu/academics/biol/programs/ba-biology/"
,"https://catalog.csun.edu/academics/biol/programs/bs-biology-i/cell-and-molecular-biology/"
,"https://catalog.csun.edu/academics/biol/programs/bs-biology-ii/ecology-and-evolutionary-biology/"
,"https://catalog.csun.edu/academics/biol/programs/bs-biology-iii/microbiology/"
,"https://catalog.csun.edu/academics/biol/programs/bs-biology-iv/biotechnology-medical-technology/"
,"https://catalog.csun.edu/academics/biol/programs/bs-biology-v/marine-biology/"
,"https://catalog.csun.edu/academics/som/programs/bs-business-administration-iii/business-analytics/"
,"https://catalog.csun.edu/academics/blaw/programs/bs-business-administration-i/business-law/"
,"https://catalog.csun.edu/academics/fin/programs/bs-business-administration-vi/financial-analysis/"
,"https://catalog.csun.edu/academics/fin/programs/bs-business-administration-vii/financial-planning/"
,"https://catalog.csun.edu/academics/som/programs/bs-business-administration-ii/global-supply-chain-management/"
,"https://catalog.csun.edu/academics/mgt/programs/bs-business-administration-ix/management/"
,"https://catalog.csun.edu/academics/mkt/programs/bs-business-administration-x/marketing/"
,"https://catalog.csun.edu/academics/blaw/programs/bs-business-administration-iv/real-estate/"
,"https://catalog.csun.edu/academics/fin/programs/bs-business-administration-viii/risk-management-and-insurance/"
,"https://catalog.csun.edu/academics/som/programs/bs-business-administration-v/systems-and-operations-management/"
,"https://catalog.csun.edu/academics/cas/programs/ba-central-american-studies-i/standard-major/"
,"https://catalog.csun.edu/academics/cas/programs/ba-central-american-studies-ii/double-major/"
,"https://catalog.csun.edu/academics/chem/programs/ba-chemistry/"
,"https://catalog.csun.edu/academics/chem/programs/bs-chemistry/"
,"https://catalog.csun.edu/academics/chs/programs/ba-chicano-and-chicana-studies-i/single-major/"
,"https://catalog.csun.edu/academics/chs/programs/ba-chicano-and-chicana-studies-ii/double-major/"
,"https://catalog.csun.edu/academics/chs/programs/ba-chicana-and-chicano-studies-iii/chicana-o-studies-social-science-subject-matter-waiver-program/"
,"https://catalog.csun.edu/academics/cadv/programs/ba-child-and-adolescent-development-i/applied-developmental-science/"
,"https://catalog.csun.edu/academics/cadv/programs/ba-child-and-adolescent-development-ii/early-childhood-development/"
,"https://catalog.csun.edu/academics/ctva/programs/ba-cinema-and-television-arts-vii/entertainment-media-management/"
,"https://catalog.csun.edu/academics/ctva/programs/ba-cinema-and-television-arts-vi/film-production/"
,"https://catalog.csun.edu/academics/ctva/programs/ba-cinema-and-television-arts-v/media-theory-and-criticism/"
,"https://catalog.csun.edu/academics/ctva/programs/ba-cinema-and-television-arts-iv/emerging-media-production/"
,"https://catalog.csun.edu/academics/ctva/programs/ba-cinema-and-television-arts-ii/screenwriting/"
,"https://catalog.csun.edu/academics/ctva/programs/ba-cinema-and-television-arts-i/television-production/"
,"https://catalog.csun.edu/academics/cecm/programs/bs-civil-engineering/"
,"https://catalog.csun.edu/academics/coms/programs/ba-communication-studies/"
,"https://catalog.csun.edu/academics/cd/programs/ba-communicative-disorders/"
,"https://catalog.csun.edu/academics/ece/programs/bs-computer-engineering/"
,"https://catalog.csun.edu/academics/comp/programs/bs-computer-information-technology/"
,"https://catalog.csun.edu/academics/comp/programs/bs-computer-science/"
,"https://catalog.csun.edu/academics/cecm/programs/bs-construction-management/"
,"https://catalog.csun.edu/academics/cjs/programs/ba-criminology-and-justice-studies/"
,"https://catalog.csun.edu/academics/deaf/programs/ba-deaf-studies/"
,"https://catalog.csun.edu/academics/econ/programs/ba-economics/"
,"https://catalog.csun.edu/academics/ece/programs/bs-electrical-engineering/"
,"https://catalog.csun.edu/academics/msem/programs/bs-engineering-management-technology/"
,"https://catalog.csun.edu/academics/engl/programs/ba-english-i/literature/"
,"https://catalog.csun.edu/academics/engl/programs/ba-english-ii/creative-writing/"
,"https://catalog.csun.edu/academics/engl/programs/ba-english-iii/subject-matter-program-for-the-single-subject-credential/"
,"https://catalog.csun.edu/academics/engl/programs/ba-english-iv/four-year-integrated-fyi-english-subject-matter-program-for-the-single-subject-credential/"
,"https://catalog.csun.edu/academics/engl/programs/ba-english-v/junior-year-integrated-jyi-english-subject-matter-program-for-the-single-subject-credential/"
,"https://catalog.csun.edu/academics/engl/programs/ba-english-vi/honors/"
,"https://catalog.csun.edu/academics/eoh/programs/bs-environmental-and-occupational-health-ii/industrial-hygiene/"
,"https://catalog.csun.edu/academics/eoh/programs/bs-environmental-and-occupational-health-i/"
,"https://catalog.csun.edu/academics/geol/programs/ba-environmental-science/"
,"https://catalog.csun.edu/academics/fcs/programs/bs-family-and-consumer-sciences-i/apparel-design-and-merchandising/"
,"https://catalog.csun.edu/academics/fcs/programs/bs-family-and-consumer-sciences-ii/consumer-affairs/"
,"https://catalog.csun.edu/academics/fcs/programs/bs-family-and-consumer-sciences-iii/family-and-consumer-sciences-education/"
,"https://catalog.csun.edu/academics/fcs/programs/bs-family-and-consumer-sciences-iv/family-studies/"
,"https://catalog.csun.edu/academics/gws/programs/ba-gender-womens-studies-ii/double-major/"
,"https://catalog.csun.edu/academics/gws/programs/ba-gender-and-womens-studies-i/"
,"https://catalog.csun.edu/academics/geog/programs/bs-geographic-information-science/"
,"https://catalog.csun.edu/academics/geog/programs/bs-geography-and-environmental-studies/"
,"https://catalog.csun.edu/academics/geol/programs/bs-geology-i/geology/"
,"https://catalog.csun.edu/academics/geol/programs/bs-geology-ii/geophysics/"
,"https://catalog.csun.edu/academics/hsci/programs/bs-health-administration/"
,"https://catalog.csun.edu/academics/hist/programs/ba-history-i/"
,"https://catalog.csun.edu/academics/hist/programs/ba-history-ii/four-year-integrated-fyi-history-subject-matter-program-for-the-single-subject-credential/"
,"https://catalog.csun.edu/academics/hist/programs/ba-history-iii/junior-year-integrated-jyi-history-subject-matter-program-for-the-single-subject-credential/"
,"https://catalog.csun.edu/academics/som/programs/bs-information-systems-i/business-systems/"
,"https://catalog.csun.edu/academics/som/programs/bs-information-systems-ii/software-technology/"
,"https://catalog.csun.edu/academics/som/programs/bs-information-systems-iii/computer-information-technology/"
,"https://catalog.csun.edu/academics/som/programs/bs-information-systems-iv/health-systems/"
,"https://catalog.csun.edu/academics/lrs/programs/ba-interdisciplinary-studies/"
,"https://catalog.csun.edu/academics/fcs/programs/bs-interior-design/"
,"https://catalog.csun.edu/academics/js/programs/ba-jewish-studies/"
,"https://catalog.csun.edu/academics/jour/programs/ba-journalism-i/"
,"https://catalog.csun.edu/academics/jour/programs/ba-journalism-ii/broadcast/"
,"https://catalog.csun.edu/academics/jour/programs/ba-journalism-iii/public-relations/"
,"https://catalog.csun.edu/academics/kin/programs/bs-kinesiology-ii/exercise-science/"
,"https://catalog.csun.edu/academics/kin/programs/bs-kinesiology-iii/dance/"
,"https://catalog.csun.edu/academics/kin/programs/bs-kinesiology-iv/sport-studies/"
,"https://catalog.csun.edu/academics/kin/programs/bs-kinesiology-v/applied-fitness-and-active-lifestyle-development/"
,"https://catalog.csun.edu/academics/kin/programs/bs-kinesiology-i/physical-education/"
,"https://catalog.csun.edu/academics/mcll/programs/ba-languages-and-cultures-i/armenian/"
,"https://catalog.csun.edu/academics/mcll/programs/ba-languages-and-cultures-ii/french/"
,"https://catalog.csun.edu/academics/mcll/programs/ba-languages-and-cultures-iii/italian/"
,"https://catalog.csun.edu/academics/mcll/programs/ba-languages-and-cultures-iv/japanese/"
,"https://catalog.csun.edu/academics/lrs/programs/ba-liberal-studies-i/pre-credential-program/"
,"https://catalog.csun.edu/academics/lrs/programs/ba-liberal-studies-ii/integrated-teacher-education-program-itep-junior/"
,"https://catalog.csun.edu/academics/lrs/programs/ba-liberal-studies-iii/integrated-teacher-education-program-itep-freshman/"
,"https://catalog.csun.edu/academics/ling/programs/ba-linguistics/"
,"https://catalog.csun.edu/academics/msem/programs/bs-manufacturing-systems-engineering/"
,"https://catalog.csun.edu/academics/math/programs/ba-mathematics-iii/four-year-integrated-fyi-mathematics-subject-matter-program-for-the-single-subject-credential/"
,"https://catalog.csun.edu/academics/math/programs/ba-mathematics-iv/junior-year-integrated-jyi-mathematics-subject-matter-program-for-the-single-subject-credential/"
,"https://catalog.csun.edu/academics/math/programs/ba-mathematics-i/general/"
,"https://catalog.csun.edu/academics/math/programs/ba-mathematics-ii/secondary-teaching/"
,"https://catalog.csun.edu/academics/math/programs/bs-mathematics-i/mathematics/"
,"https://catalog.csun.edu/academics/math/programs/bs-mathematics-ii/statistics/"
,"https://catalog.csun.edu/academics/math/programs/bs-mathematics-iii/applied-mathematical-sciences/"
,"https://catalog.csun.edu/academics/me/programs/bs-mechanical-engineering/"
,"https://catalog.csun.edu/academics/mus/programs/ba-music-i/breadth-studies/"
,"https://catalog.csun.edu/academics/mus/programs/ba-music-ii/music-industry-studies/"
,"https://catalog.csun.edu/academics/mus/programs/ba-music-iii/music-education/"
,"https://catalog.csun.edu/academics/mus/programs/ba-music-iv/music-therapy/"
,"https://catalog.csun.edu/academics/mus/programs/bm-music-i/jazz-studies/"
,"https://catalog.csun.edu/academics/mus/programs/bm-music-ii/composition-commercial-and-media-writing/"
,"https://catalog.csun.edu/academics/mus/programs/bm-music-iii/vocal-arts/"
,"https://catalog.csun.edu/academics/mus/programs/bm-music-iv/keyboard/"
,"https://catalog.csun.edu/academics/mus/programs/bm-music-v/percussion/"
,"https://catalog.csun.edu/academics/mus/programs/bm-music-vi/winds/"
,"https://catalog.csun.edu/academics/mus/programs/bm-music-vii/strings/"
,"https://catalog.csun.edu/academics/nurs/programs/bs-nursing-ii/accelerated/"
,"https://catalog.csun.edu/academics/nurs/programs/bs-nursing-i/rn-to-bsn/"
,"https://catalog.csun.edu/academics/fcs/programs/bs-nutrition-dietetics-and-food-science-i/nutrition-and-dietetics/"
,"https://catalog.csun.edu/academics/fcs/programs/bs-nutrition-dietetics-and-food-science-ii/food-science/"
,"https://catalog.csun.edu/academics/phil/programs/ba-philosophy-ii/double-major/"
,"https://catalog.csun.edu/academics/phil/programs/ba-philosophy-i/"
,"https://catalog.csun.edu/academics/phys/programs/ba-physics/"
,"https://catalog.csun.edu/academics/phys/programs/bs-physics-i/physics/"
,"https://catalog.csun.edu/academics/phys/programs/bs-physics-ii/astrophysics/"
,"https://catalog.csun.edu/academics/pols/programs/ba-political-science-i/politics-and-government/"
,"https://catalog.csun.edu/academics/pols/programs/ba-political-science-ii/public-policy-and-management/"
,"https://catalog.csun.edu/academics/pols/programs/ba-political-science-iii/law-and-society/"
,"https://catalog.csun.edu/academics/psy/programs/ba-psychology-i/"
,"https://catalog.csun.edu/academics/psy/programs/ba-psychology-ii/honors/"
,"https://catalog.csun.edu/academics/hsci/programs/bs-public-health/"
,"https://catalog.csun.edu/academics/psm/programs/ba-public-sector-management/"
,"https://catalog.csun.edu/academics/hsci/programs/bs-radiologic-sciences/"
,"https://catalog.csun.edu/academics/rs/programs/ba-religious-studies-ii/double-major/"
,"https://catalog.csun.edu/academics/rs/programs/ba-religious-studies-i/"
,"https://catalog.csun.edu/academics/soc/programs/ba-sociology/"
,"https://catalog.csun.edu/academics/mcll/programs/ba-spanish-iii/hispanic-linguistics/"
,"https://catalog.csun.edu/academics/mcll/programs/ba-spanish-iv/translation-and-interpretation/"
,"https://catalog.csun.edu/academics/mcll/programs/ba-spanish-i/literature/"
,"https://catalog.csun.edu/academics/mcll/programs/ba-spanish-ii/language-and-culture/"
,"https://catalog.csun.edu/academics/th/programs/ba-theatre/"
,"https://catalog.csun.edu/academics/rtm/programs/bs-tourism-hospitality-and-recreation-management/"
,"https://catalog.csun.edu/academics/urbs/programs/ba-urban-studies-and-planning/"
]

def seven():
    

if __name__ == "__main__":
    five()
    
        
