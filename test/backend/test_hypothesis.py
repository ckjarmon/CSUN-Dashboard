# mutagen and property based testing
from hypothesis import given, strategies as st
import pytest_mutagen as mg

from unittest import TestCase, mock
import sys, os, requests, json
import path, pytest, requests_mock, warnings, mariadb
from flask import Flask, request

# determines os and finds files to test
################################################################
currFile = path.Path(__file__).abspath()
currDirectory = currFile.parent.parent.parent
currDirectory += r"/code-assets/backend"
sys.path.append(currDirectory)
os.chdir(currDirectory)
# currDirectory should return root\code-assets\backend to be in correct dir

# import testing modules
from csundash import home, name_normalize, get, professors, new_rating, get_ratings, prof_name, schedule
from csundash import establish_conn, historical_profs, cost, classes

@given(st.integers(), st.integers())
def test_ints_are_commutative(x, y):
    assert x + y == y + x


def name_normalize(str):
    return f"{str[0:1].upper()}{str[1:].lower()}"

@mg.mutant_of("name_normalize", "name_normalize_OBO", description="Increment is off by one.")
def  inc_mut(str="bob"):
 	return f"{str[0:1].upper()}{str[1:].lower()} + b"

# With a list of top-level functions
mg.trivial_mutations([professors, new_rating])