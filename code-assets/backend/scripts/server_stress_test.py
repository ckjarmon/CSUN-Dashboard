import threading
import urllib3
import json
import time
from datetime import datetime
import pytz


def req(stats):
    start = time.time()
    s = urllib3.PoolManager().request("GET", u"127.0.0.1:5000/comp/classes").data
    end = time.time()
    # print(f"Time finished: {'%.3f'%(end - start)} secs")
    stats["times"].append(float('%.3f' % (end - start)))


def test_run(amt):

    start_time = f"Test Start Time: {datetime.now(pytz.utc)}"
    t = []
    stats = {"fins": 0, "times": [1]}
    for i in range(amt):
        t.append(threading.Thread(target=req, args=(stats, )))

    for a in t:
        a.start()

    for a in t:
        a.join()
        stats["fins"] += 1

    print(f"\n------\nTest: {amt} Requests\nStart Time: {start_time}")
    print(f"Processes finished {stats['fins']}")
    print(f"Average Time: {sum(stats['times'])/len(stats['times'])} secs")
    print(f"Best: {min(stats['times'])} secs")
    print(f"Worst: {max(stats['times'])} secs\n------")


if __name__ == "__main__":
    test_run(10)
    test_run(50)
    test_run(100)
    test_run(500)
    test_run(1000)
    test_run(5000)
