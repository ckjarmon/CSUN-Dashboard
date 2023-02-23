from unittest import TestCase, mock
import sys
import os
import requests
import json
import path
import pytest
import requests_mock
import warnings
import mariadb

from fastapi import FastAPI, Body
from fastapi.testclient import TestClient
from pydantic import BaseModel
import itertools
import uvicorn

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
# from csundash import home, name_normalize, get, professors, get_ratings, prof_name, schedule
# from csundash import establish_conn, historical_profs, classes
from csundash_fastapi import app, get, professors, new_rating, get_ratings, classes, schedule
client = TestClient(app)

# testing all API endpoints
################################################################
# tests '/{subject}/catalog' from get()
# def get(subject: str):
def test_Fun_get_catalog_returns_code_200():
     response = client.get("comp/catalog")
     print(f"The status code of this 'comp/catalog': {response.status_code}")
     assert response.status_code == 200

# tests '/{subject}/professors' from professors()
# def professors(subject: str):
     response = client.get("comp/professors")
     print(f"The status code of 'comp/professors': {response.status_code}")
     assert response.status_code == 200

# tests '/{subject}/ratings' from get_ratings()
# def get_ratings(email: str = Body(embed=True)):
     response = client.get("comp/ratings")
     print(f"The status code of 'comp/ratings': {response.status_code}")
     assert response.status_code == 200

# tests '/{subject}/classes' from classes()
# def classes(subject: str):
     response = client.get("comp/classes")
     print(f"The status code of 'comp/classes': {response.status_code}")
     assert response.status_code == 200

# tests '/{subject}/{catalog_number}/schedule' from schedule()
# def schedule(subject: str, catalog_number: str | None = None):
     response = client.get("comp/100/schedule")
     print(f"The status code of 'comp/100/schedule': {response.status_code}")
     assert response.status_code == 200

################################################################
