# mutagen and property based testing
from hypothesis import given, strategies as st
import pytest_mutagen as mg
from unittest import TestCase, mock
import sys
import os
import path

# determines os and finds files to test
################################################################
currFile = path.Path(__file__).abspath()
currDirectory = currFile.parent.parent.parent
currDirectory += r"/code-assets/backend"
sys.path.append(currDirectory)
os.chdir(currDirectory)
################################################################

# import testing modules
from csundash_fastapi import get, professors, new_rating, get_ratings, classes, schedule

# create a list of all functions we are going to run mutation analysis on
mutation_list = [get, professors, new_rating, get_ratings, classes, schedule]

@given(st.integers(), st.integers())
def test_ints_are_commutative(x, y):
    assert x + y == y + x

# create automated mutation testing
# ensure you are in test\backend dir, and run with ```pytest --mutate```
mg.trivial_mutations(mutation_list)

"""
sample result: === 57 mut_passed, 39 mut_failed in 2.76s ===
~60% mutation squash success rate
our functions need

m       HOME_NOTHING    /!\ ALL TESTS PASSED
m       NAME_NORMALIZE_NOTHING  /!\ ALL TESTS PASSED
m       GET_NOTHING     /!\ ALL TESTS PASSED
m       PROFESSORS_NOTHING      /!\ ALL TESTS PASSED
m       NEW_RATING_NOTHING      /!\ ALL TESTS PASSED
m       GET_RATINGS_NOTHING     /!\ ALL TESTS PASSED
m       PROF_NAME_NOTHING       /!\ ALL TESTS PASSED
m       SCHEDULE_NOTHING        /!\ ALL TESTS PASSED
m       ESTABLISH_CONN_NOTHING  /!\ ALL TESTS PASSED
m       HISTORICAL_PROFS_NOTHING        /!\ ALL TESTS PASSED
m       COST_NOTHING    /!\ ALL TESTS PASSED
m       CLASSES_NOTHING /!\ ALL TESTS PASSED

M = test failed (mutation lives)
m = test success (mutation squashed)
x = test success with exception raised (code needs refactoring)
Module test_server.py:
MMMMmmxxxmxxx   HOME_NOTHING
MMMMMmxxxmxxx   NAME_NORMALIZE_NOTHING
MMMmmmxxxmxxx   GET_NOTHING
MMMFmmmxxxmxx   PROFESSORS_NOTHING
MMMxmmmxxxmxx   NEW_RATING_NOTHING
MMMFxmmmxxxmx   GET_RATINGS_NOTHING
MMMFFxxmmmxmx   PROF_NAME_NOTHING
MMMFxxxxmmmxm   SCHEDULE_NOTHING
MMMxxxxxmmmxm   ESTABLISH_CONN_NOTHING
MMMxxxxxmmmxm   HISTORICAL_PROFS_NOTHING
MMMxxxxxmmmxm   COST_NOTHING
MMMFxxxxxmmmm   CLASSES_NOTHING
"""