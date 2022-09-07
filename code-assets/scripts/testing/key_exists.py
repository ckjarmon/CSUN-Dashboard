dict = {}

try:
    dict["testing"].append(2)
except KeyError:
    dict["testing"] = []
    dict["testing"].append(2)
    
print(dict)