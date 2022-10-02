from unicodedata import name
from selenium.common.exceptions import NoSuchElementException
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import json

s = Service(ChromeDriverManager().install())
op = webdriver.ChromeOptions()
op.add_argument('headless')
op.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Chrome(service=s, options=op)


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


names_of_programs = [
    'B.S., Accountancy, Information Systems', 
    'B.S., Accountancy, Professional Accountancy', 
    'B.A., Africana Studies, African and African-American Social Sciences', 
    'B.A., Africana Studies, African and African-American Humanities and Cultural Studies', 
    'B.A., Africana Studies, African-American Urban Education', 
    'B.A., Anthropology', 
    'B.A., Art', 
    'B.A., Asian American Studies, Standard Major', 
    'B.A., Asian American Studies, Double Major', 
    'B.S., Athletic Training', 
    'B.S., Biochemistry', 
    'B.A., Biology', 
    'B.S., Biology, Cell and Molecular Biology', 
    'B.S., Biology, Ecology and Evolutionary Biology', 
    'B.S., Biology, Microbiology', 
    'B.S., Biology, Biotechnology - Medical Technology', 
    'B.S., Biology, Marine Biology', 
    'B.S., Business Administration, Business Analytics', 
    'B.S., Business Administration, Business Law', 
    'B.S., Business Administration, Financial Analysis', 
    'B.S., Business Administration, Financial Planning', 
    'B.S., Business Administration, Global Supply Chain Management', 
    'B.S., Business Administration, Management', 
    'B.S., Business Administration, Marketing', 
    'B.S., Business Administration, Real Estate', 
    'B.S., Business Administration, Risk Management and Insurance', 
    'B.S., Business Administration, Systems and Operations Management', 
    'B.A., Central American Studies, Standard Major', 
    'B.A., Central American Studies, Double Major', 
    'B.A., Chemistry', 
    'B.S., Chemistry', 
    'B.A., Chicano and Chicana Studies, Single Major', 
    'B.A., Chicano and Chicana Studies, Double Major', 
    'B.A., Chicano and Chicana Studies, Chicana - o Studies Social Science Subject Matter Waiver Program', 
    'B.A., Child and Adolescent Development, Applied Developmental Science', 
    'B.A., Child and Adolescent Development, Early Childhood Development', 
    'B.A., Cinema and Television Arts, Entertainment Media Management', 
    'B.A., Cinema and Television Arts, Film Production', 
    'B.A., Cinema and Television Arts, Media Theory and Criticism', 
    'B.A., Cinema and Television Arts, Emerging Media Production', 
    'B.A., Cinema and Television Arts, Screenwriting', 
    'B.A., Cinema and Television Arts, Television Production', 
    'B.S., Civil Engineering', 
    'B.A., Communication Studies', 
    'B.A., Communicative Disorders', 
    'B.S., Computer Engineering', 
    'B.S., Computer Information Technology', 
    'B.S., Computer Science', 
    'B.S., Construction Management', 
    'B.A., Criminology and Justice Studies', 
    'B.A., Deaf Studies', 
    'B.A., Economics', 
    'B.S., Electrical Engineering', 
    'B.S., Engineering Management Technology', 
    'B.A., English, Literature', 
    'B.A., English, Creative Writing', 
    'B.A., English, Subject Matter Program for the Single Subject Credential', 
    'B.A., English, Four-Year Integrated (FYI) English Subject Matter Program for the Single Subject Credential', 
    'B.A., English, Junior-Year Integrated (JYI) English Subject Matter Program for the Single Subject Credential', 
    'B.A., English, Honors', 
    'B.S., Environmental and Occupational Health, Industrial Hygiene', 
    'B.S., Environmental and Occupational Health', 
    'B.A., Environmental Science', 
    'B.S., Family and Consumer Sciences, Apparel Design and Merchandising', 
    'B.S., Family and Consumer Sciences, Consumer Affairs', 
    'B.S., Family and Consumer Sciences, Family and Consumer Sciences Education', 
    'B.S., Family and Consumer Sciences, Family Studies', 
    'B.A., Gender and Women’s Studies, Double Major', 
    'B.A., Gender and Women’s Studies', 
    'B.S., Geographic Information Science', 
    'B.S., Geography and Environmental Studies', 
    'B.S., Geology, Geology', 
    'B.S., Geology, Geophysics', 
    'B.S., Health Administration', 
    'B.A., History', 
    'B.A., History, Four-Year Integrated (FYI) History Subject Matter Program for the Single Subject Credential', 
    'B.A., History, Junior-Year Integrated (JYI) History Subject Matter Program for the Single Subject Credential', 
    'B.S., Information Systems, Business Systems', 
    'B.S., Information Systems, Software Technology', 
    'B.S., Information Systems, Computer Information Technology', 
    'B.S., Information Systems, Health Systems', 
    'B.A., Interdisciplinary Studies', 
    'B.S., Interior Design', 
    'B.A., Jewish Studies', 
    'B.A., Journalism', 
    'B.A., Journalism, Broadcast', 
    'B.A., Journalism, Public Relations', 
    'B.S., Kinesiology, Exercise Science', 
    'B.S., Kinesiology, Dance', 
    'B.S., Kinesiology, Sport Studies', 
    'B.S., Kinesiology, Applied Fitness and Active Lifestyle Development', 
    'B.S., Kinesiology, Physical Education', 
    'B.A., Languages and Cultures, Armenian', 
    'B.A., Languages and Cultures, French', 
    'B.A., Languages and Cultures, Italian', 
    'B.A., Languages and Cultures, Japanese', 
    'B.A., Liberal Studies, Pre-Credential Program', 
    'B.A., Liberal Studies, Integrated Teacher Education Program (ITEP) Junior', 
    'B.A., Liberal Studies, Integrated Teacher Education Program (ITEP) Freshman', 
    'B.A., Linguistics', 
    'B.S., Manufacturing Systems Engineering', 
    'B.A., Mathematics, Four-Year Integrated (FYI) Mathematics Subject Matter Program for the Single Subject Credential', 
    'B.A., Mathematics, Junior-Year Integrated (JYI) Mathematics Subject Matter Program for the Single Subject Credential', 
    'B.A., Mathematics, General', 
    'B.A., Mathematics, Secondary Teaching', 
    'B.S., Mathematics, Mathematics', 
    'B.S., Mathematics, Statistics', 
    'B.S., Mathematics, Applied Mathematical Sciences', 
    'B.S., Mechanical Engineering', 
    'B.A., Music, Breadth Studies', 
    'B.A., Music, Music Industry Studies', 
    'B.A., Music, Music Education', 
    'B.A., Music, Music Therapy', 
    'B.M., Music, Jazz Studies', 
    'B.M., Music, Composition - Commercial and Media Writing', 
    'B.M., Music, Vocal Arts', 
    'B.M., Music, Keyboard', 
    'B.M., Music, Percussion', 
    'B.M., Music, Winds', 
    'B.M., Music, Strings', 
    'B.S., Nursing, Accelerated', 
    'B.S., Nursing, RN to BSN', 
    'B.S., Nutrition, Dietetics and Food Science, Nutrition and Dietetics', 
    'B.S., Nutrition, Dietetics and Food Science, Food Science', 
    'B.A., Philosophy, Double Major', 
    'B.A., Philosophy', 
    'B.A., Physics', 
    'B.S., Physics, Physics', 
    'B.S., Physics, Astrophysics', 
    'B.A., Political Science, Politics and Government', 
    'B.A., Political Science, Public Policy and Management', 
    'B.A., Political Science, Law and Society', 
    'B.A., Psychology', 
    'B.A., Psychology, Honors', 
    'B.S., Public Health', 
    'B.A., Public Sector Management', 
    'B.S., Radiologic Sciences', 
    'B.A., Religious Studies, Double Major', 
    'B.A., Religious Studies', 
    'B.A., Sociology', 
    'B.A., Spanish, Hispanic Linguistics', 
    'B.A., Spanish, Translation and Interpretation', 
    'B.A., Spanish, Literature', 
    'B.A., Spanish, Language and Culture', 
    'B.A., Theatre', 
    'B.S., Tourism, Hospitality, and Recreation Management', 
    'B.A., Urban Studies and Planning']


for major in major_links:
    print("------------------------------------------")
    #print(major)
    driver.get(major)
    #print(driver.find_element("id", "inset-content").text)
    #print(driver.find_element(By.CLASS_NAME, "main").find_element(By.CLASS_NAME, "container").find_element(By.CLASS_NAME, "row").find_element(By.CLASS_NAME, "row").text)
    #print(driver.find_element("id", "inset-content").find_element(By.CLASS_NAME, "section-content").text)
    # try:
        # print(driver.find_element(By.CLASS_NAME, "spacey").text)
    # except NoSuchElementException:
        # print(driver.find_element(By.CLASS_NAME, "pseudo-h4").text)
    #print(driver.find_element("xpath", "/html/body/div/div[5]/div/div/div[2]/div/div/div[1]/div[3]/span/span/h2").get_attribute("innerHTML"))
    #print(driver.find_elements(By.CLASS_NAME, "section-title"))
    name_of_program = driver.find_element(By.XPATH,"//*[text()='Program:']").find_element(By.XPATH,"..").text
    name_of_program = name_of_program[name_of_program.find(":")+2:]
    print(name_of_program)
    try:
        sub_major = driver.find_element(By.XPATH,"//*[text()='Program:']").find_element(By.XPATH,"..").find_element(By.XPATH,"..").find_element(By.TAG_NAME, "h3").text
        name_of_program = f"{name_of_program}: {sub_major}"
        print(name_of_program +  " " + major)  
    except NoSuchElementException:
        print(name_of_program +  " " + major)     
          
    major_dict = {}
    major_dict["name"] = name_of_program
    major_dict["prog-reqq-blob"] = driver.find_element(By.XPATH,"//*[text()='Program Requirements']").find_element(By.XPATH,"..").find_element(By.XPATH,"..").find_element(By.XPATH,"..").text.replace('\u201c', '').replace('\u201d', '').replace('\u2019','\'').split('\n')
    major_dict["course-sets"] = [x for x in driver.find_element(By.XPATH,"//*[text()='Program Requirements']").find_element(By.XPATH,"..").find_element(By.XPATH,"..").find_element(By.XPATH,"..").text.replace('\u201c', '').replace('\u201d', '').replace('\u2019','\'').split('\n')]
    major_dict["link-to-major"] = major
    
    major_file = open(f"../../../code-assets/backend/json_majors/{name_of_program.replace('/', '---').replace(':', ';')}.json", "w")
    #print(major_dict)

    json.dump(major_dict, major_file, indent=4)
    major_file.close()
    


