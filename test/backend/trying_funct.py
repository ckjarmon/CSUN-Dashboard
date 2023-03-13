from unittest import TestCase, mock
import sys, os, requests, json
import path, pytest, warnings, mariadb
from flask import Flask

# determines os and finds files to test
################################################################
currFile = path.Path(__file__).abspath()
currDirectory = currFile.parent.parent.parent
currDirectory += r"/code-assets/backend"
sys.path.append(currDirectory)
os.chdir(currDirectory)
# currDirectory should return root\code-assets\backend to be in correct dir

################################################################

# search for correct dir and file and import the methods to be tested
from csundash import home, name_normalize, get, professors, new_rating, get_ratings, prof_name, schedule
from csundash import establish_conn, historical_profs, cost


def prof_check():
     subjet_kwarg = "comp"
     ret_val = professors(subject=subjet_kwarg)
     print("What is being returned?")
     print(ret_val)
     print(type(ret_val))
    
prof_check()