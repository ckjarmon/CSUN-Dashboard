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

def try_establish_conn():
    inst = establish_conn()
    print("What is the type?: ")
    print(type(inst))

try_establish_conn()