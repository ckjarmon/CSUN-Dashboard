import json


class_codes = ["AE","AM","AAS","ACCT","AFRS","AIS","ANTH","ARAB","ARMN","ART","ASTR","ATHL","BANA","BIOL","BLAW","BUS","CE","CADV","CAS","CCE","CD","CECS","CHS","CHEM","CHIN","CIT","CJS","CLAS","CM","COMP","COMS","CTVA","DEAF","EED","ECE","ECON","EDUC","ELPS","ENGL","EOH","EPC","FCS","FIN","FLIT","FREN","GBUS","GEOG","GEOL","GWS","HEBR","HIST","HSCI","HUM","INDS","IS","ITAL","JS","JAPN","JOUR","KIN","KNFC","KOR","LING","LRS","ME","MATH","MCOM","MGT","MKT","MSE","MUS","NURS","PERS","PHIL","PHSC","PHYS","POLS","PSY","PT","QS","RS","RE","RTM","RUSS","SED","SCI","SCM","SOC","SOM","SPAN","SPED","SUST","SWRK","TH","UNIV","URBS"]

for code in class_codes:
    with open(f"../../code-assets/backend/json_catalog/{code}_catalog.json") as catalog_file:
        try:
            classes = json.load(catalog_file)
            for _class in classes:
                print(f"Settings prereqs and coreqs for {_class['subject']} {_class['catalog_number']}")
                if _class["description"] is None:
                    classes.remove(_class)
                elif _class["description"].__contains__("Prerequisite") or _class["description"].__contains__("Prerequisites"):
                    try:
                        _class["prerequisites"] = _class["description"][_class["description"].index(':')+2:_class["description"].index('.')]
                    except ValueError:
                        _class["prerequisites"] = _class["description"][_class["description"].index("Prerequisite")+len("Prerequisite")+1:_class["description"].index('.')]
                    coreq_substr = _class["description"][_class["description"].index('.')+2:]
                    if coreq_substr.__contains__("Corequisite") or coreq_substr.__contains__("Corequisites"):
                        coreq_substr = coreq_substr[coreq_substr.index("Corequisite"):]
                        try:
                            _class["corequisites"] = coreq_substr[coreq_substr.index(':')+2:coreq_substr.index('.')]
                        except ValueError:
                            _class["corequisites"] = coreq_substr[coreq_substr.index("Corequisite")+len("Corequisite")+1:coreq_substr.index('.')]
                    else:
                        _class["corequisites"] = "None"
                else: 
                    _class["prerequisites"] = "None"
                try:
                    if _class["corequisites"] == f"{_class['subject']} {_class['catalog_number']}":
                        _class["corequisites"] = _class["corequisites"].replace("L", "")
                except KeyError:
                    continue
            catalog_file = open(f"../backend/json_catalog/{code}_catalog.json", "w")
            json.dump(classes, catalog_file, indent=4)
        except json.JSONDecodeError as jce:
            with open('ERROR_LOG.txt', 'a') as f:
                f.write(str(jce))
                f.write("\n")