import threading
import urllib3
import json
import time
from datetime import datetime
import pytz
from random import randint

class_codes = ["AE", "AM", "AAS", "ACCT", "AFRS", "AIS", "ANTH", "ARAB", "ARMN", "ART", "ASTR", "ATHL", "BANA", "BIOL", "BLAW", "BUS", "CE", "CADV", "CAS", "CCE", "CD", "CECS", "CHS", "CHEM", "CHIN", "CIT", "CJS", "CLAS", "CM", "COMP", "COMS", "CTVA", "DEAF", "EED", "ECE", "ECON", "EDUC", "ELPS", "ENGL", "EOH", "EPC", "FCS", "FIN", "FLIT", "FREN", "GBUS",
               "GEOG", "GEOL", "GWS", "HEBR", "HIST", "HSCI", "HUM", "INDS", "IS", "ITAL", "JS", "JAPN", "JOUR", "KIN", "KOR", "LING", "LRS", "ME", "MATH", "MCOM", "MGT", "MKT", "MSE", "MUS", "NURS", "PERS", "PHIL", "PHSC", "PHYS", "POLS", "PSY", "PT", "QS", "RS", "RE", "RTM", "RUSS", "SED", "SCI", "SCM", "SOC", "SOM", "SPAN", "SPED", "SUST", "SWRK", "TH", "UNIV", "URBS"]

endpoints = ['classes', 'catalog', 'professors', 'schedule']


def req(metadata):
    start = time.time()
    endpoint = f"127.0.0.1:5000/{class_codes[randint(0, len(class_codes)-1)]}/{endpoints[randint(0, 3)]}"
    s = urllib3.PoolManager().request("GET", endpoint)
    end = time.time()
    if s.status == 200:
        metadata["Successful"] += 1  
    else:
        metadata["Failed"] += 1
    metadata["reqs"].append({"runtime": float('%.3f' % (end - start)), "status_code": s.status, "endpoint": endpoint})


def test_run(amt):

    # start_time = f"Test Start Time: {datetime.now(pytz.utc)}"
    t = []
    metadata = {
        "reqs": [],
        "Requests Amount": amt,
        "Successful": 0,
        "Failed": 0,
        "Average Time": 0.0,
        "Best Time": 0.0,
        "Worst Time": 0.0
    }
    
    for _ in range(amt):
        t.append(threading.Thread(target=req, args=(metadata, )))

    for a in t:
        a.start()

    for a in t:
        a.join()

    
    # print(f"\n------\nTest: {amt} Requests\nStart Time: {start_time}")
    print(f"Successful Requests {metadata['Successful']}")
    # print(f"Processes finished {metadata['Successful']}")
    print(f"Average Time: {sum([x['runtime'] for x in metadata['reqs']])/len(metadata['reqs'])} secs")
    print(f"Best: {min(x['runtime'] for x in metadata['reqs'])} secs")
    print(f"Worst: {max(x['runtime'] for x in metadata['reqs'])} secs\n------")


if __name__ == "__main__":
    test_run(10)
    test_run(50)
    test_run(100)
    test_run(500)
    test_run(1000)
    # test_run(5000)
