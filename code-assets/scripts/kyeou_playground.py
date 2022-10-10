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

from collections import OrderedDict
def seven():
    for name in major_names:
        print(name)
        with open(f"../../code-assets/backend/json_majors/{name}.json") as major_file:
                major = json.load(major_file)
                #major["course-sets"] = major["prog-reqq-blob"]
                major["course-sets"] = {}
                major["course-sets"]["required"] = major["prog-reqq-blob"]
                major = OrderedDict(sorted(major.items()))
                json.dump(major, open(f"../../code-assets/backend/json_majors/{name}.json", "w"), indent=4) 

import re
def eight():
    for name in major_names:
        print(f"\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ => {name}")
        with open(f"../../code-assets/backend/json_majors/{name}.json") as major_file:
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
                                                        
                json.dump(major_file, open(f"../../code-assets/backend/json_majors/{name}.json", "w"), indent=4)
                
randomarray = [
                "CADV 327 Infancy and Early Childhood (3)",
                "PSY 327 Infancy and Early Childhood (3)",
                "CADV 335 Middle Childhood (3)"
            ]
def nine():
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


major_names = [
   "B.A., Africana Studies; African and African-American Humanities and Cultural Studies",
 "B.A., Africana Studies; African and African-American Social Sciences",
 "B.A., Africana Studies; African-American Urban Education",
 "B.A., Anthropology",
 "B.A., Art",
 "B.A., Asian American Studies; Double Major",
 "B.A., Asian American Studies; Standard Major",
 "B.A., Biology",
 "B.A., Central American Studies; Double Major",
 "B.A., Central American Studies; Standard Major",
"B.A., Chemistry",
"B.A., Chicano and Chicana Studies; Chicana---o Studies Social Science Subject Matter Waiver Program",
"B.A., Chicano and Chicana Studies; Double Major",
"B.A., Chicano and Chicana Studies; Single Major",
"B.A., Child and Adolescent Development; Applied Developmental Science",
"B.A., Child and Adolescent Development; Early Childhood Development",
"B.A., Cinema and Television Arts; Emerging Media Production",
"B.A., Cinema and Television Arts; Entertainment Media Management",
"B.A., Cinema and Television Arts; Film Production",
"B.A., Cinema and Television Arts; Media Theory and Criticism",
"B.A., Cinema and Television Arts; Screenwriting",
"B.A., Cinema and Television Arts; Television Production",
"B.A., Communication Studies",
"B.A., Communicative Disorders",
"B.A., Criminology and Justice Studies",
"B.A., Deaf Studies",
"B.A., Economics",
"B.A., English; Creative Writing",
"B.A., English; Four-Year Integrated (FYI) English Subject Matter Program for the Single Subject Credential",
"B.A., English; Honors",
"B.A., English; Junior-Year Integrated (JYI) English Subject Matter Program for the Single Subject Credential",
"B.A., English; Literature",
"B.A., English; Subject Matter Program for the Single Subject Credential",
"B.A., Environmental Science",
"B.A., Gender and Women’s Studies",
"B.A., Gender and Women’s Studies; Double Major",
"B.A., History",
"B.A., History; Four-Year Integrated (FYI) History Subject Matter Program for the Single Subject Credential",
"B.A., History; Junior-Year Integrated (JYI) History Subject Matter Program for the Single Subject Credential",
"B.A., Interdisciplinary Studies",
"B.A., Jewish Studies",
"B.A., Journalism",
"B.A., Journalism; Broadcast",
"B.A., Journalism; Public Relations",
"B.A., Languages and Cultures; Armenian",
"B.A., Languages and Cultures; French",
"B.A., Languages and Cultures; Italian",
"B.A., Languages and Cultures; Japanese",
"B.A., Liberal Studies; Integrated Teacher Education Program (ITEP) Freshman",
"B.A., Liberal Studies; Integrated Teacher Education Program (ITEP) Junior",
"B.A., Liberal Studies; Pre-Credential Program",
"B.A., Linguistics",
"B.A., Mathematics; Four-Year Integrated (FYI) Mathematics Subject Matter Program for the Single Subject Credential",
"B.A., Mathematics; General",
"B.A., Mathematics; Junior-Year Integrated (JYI) Mathematics Subject Matter Program for the Single Subject Credential",
"B.A., Mathematics; Secondary Teaching",
"B.A., Music; Breadth Studies Option",
"B.A., Music; Music Education Option",
"B.A., Music; Music Industry Studies Option",
"B.A., Music; Music Therapy Option",
"B.A., Philosophy",
"B.A., Philosophy; Double Major",
"B.A., Physics",
"B.A., Political Science; Law and Society",
"B.A., Political Science; Politics and Government",
"B.A., Political Science; Public Policy and Management",
"B.A., Psychology",
"B.A., Psychology; Honors",
"B.A., Public Sector Management",
"B.A., Religious Studies",
"B.A., Religious Studies; Double Major",
"B.A., Sociology",
"B.A., Spanish; Hispanic Linguistics",
"B.A., Spanish; Language and Culture",
"B.A., Spanish; Literature",
"B.A., Spanish; Translation and Interpretation",
"B.A., Theatre",
"B.A., Urban Studies and Planning",
"B.M., Music; Composition---Commercial and Media Writing Option",
"B.M., Music; Jazz Studies Option",
"B.M., Music; Keyboard Option",
"B.M., Music; Percussion Option",
"B.M., Music; Strings Option",
"B.M., Music; Vocal Arts Option",
"B.M., Music; Winds Option",
"B.S., Accountancy; Information Systems",
"B.S., Accountancy; Professional Accountancy",
"B.S., Athletic Training",
"B.S., Biochemistry",
"B.S., Biology; Biotechnology---Medical Technology",
"B.S., Biology; Cell and Molecular Biology",
"B.S., Biology; Ecology and Evolutionary Biology",
"B.S., Biology; Marine Biology",
"B.S., Biology; Microbiology",
"B.S., Business Administration; Business Analytics",
"B.S., Business Administration; Business Law",
"B.S., Business Administration; Financial Analysis",
"B.S., Business Administration; Financial Planning",
"B.S., Business Administration; Global Supply Chain Management",
"B.S., Business Administration; Management",
"B.S., Business Administration; Marketing",
"B.S., Business Administration; Real Estate",
"B.S., Business Administration; Risk Management and Insurance",
"B.S., Business Administration; Systems and Operations Management",
"B.S., Chemistry",
"B.S., Civil Engineering",
"B.S., Computer Engineering",
"B.S., Computer Information Technology",
"B.S., Computer Science",
"B.S., Construction Management",
"B.S., Electrical Engineering",
"B.S., Engineering Management Technology",
"B.S., Environmental and Occupational Health",
"B.S., Environmental and Occupational Health; Industrial Hygiene",
"B.S., Family and Consumer Sciences; Apparel Design and Merchandising",
"B.S., Family and Consumer Sciences; Consumer Affairs",
"B.S., Family and Consumer Sciences; Family Studies",
"B.S., Family and Consumer Sciences; Family and Consumer Sciences Education",
"B.S., Geographic Information Science",
"B.S., Geography and Environmental Studies",
"B.S., Geology; Geology",
"B.S., Geology; Geophysics",
"B.S., Health Administration",
"B.S., Information Systems; Business Systems",
"B.S., Information Systems; Computer Information Technology",
"B.S., Information Systems; Health Systems",
"B.S., Information Systems; Software Technology",
"B.S., Interior Design",
"B.S., Kinesiology; Applied Fitness and Active Lifestyle Development",
"B.S., Kinesiology; Dance",
"B.S., Kinesiology; Exercise Science",
"B.S., Kinesiology; Physical Education",
"B.S., Kinesiology; Sport Studies",
"B.S., Manufacturing Systems Engineering",
"B.S., Mathematics; Applied Mathematical Sciences",
"B.S., Mathematics; Mathematics",
"B.S., Mathematics; Statistics",
"B.S., Mechanical Engineering",
"B.S., Nursing; Accelerated",
"B.S., Nursing; RN to BSN",
"B.S., Nutrition, Dietetics and Food Science; Food Science",
"B.S., Nutrition, Dietetics and Food Science; Nutrition and Dietetics",
"B.S., Physics; Astrophysics",
"B.S., Physics; Physics",
"B.S., Public Health",
"B.S., Radiologic Sciences",
"B.S., Tourism, Hospitality, and Recreation Management",
]

#major_names = ["B.S., Computer Science", "B.S., Chemistry"]
def ten():
    opers = []
    for name in major_names:
        #print(f"\n-_-_=> {name}")
        with open(f"../../code-assets/backend/json_majors/{name}.json") as major_file:
            major_course_set = json.load(major_file)["course-sets"]["required"]
            for item in major_course_set:
                if type(item) == list:
                    if item[0] not in [x[0] for x in opers]:
                        opers.append((item[0], name))
    print(*opers, sep='\n')
    

def mark_core_count(item):
    final_dict = {}
    """if type(item) == str:
        p = item.split("/")
        #print(p)
        print(p[0])
        for c in p[1:]:
            print(f"{p[0]}{c}")
    elif type(item) == list:
        for i in item[1:]:
            mark_core_count(i)
    """
    import pprint
    for item in item:
        if type(item) == dict:
            pprint.pprint(item)
    
        


if __name__ == "__main__":
    #ten()
    for name in major_names:
        mark_core_count(json.load(open(f"../../code-assets/backend/json_majors/{name}.json"))["course-sets"]["required"])
    
        
