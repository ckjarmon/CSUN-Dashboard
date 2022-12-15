from unittest import TestCase
import sys
import path
import pytest
import warnings

# this file needs to be recopied from test_server
# as the directory problem needs to be chaned here


# determines os and finds files to test
################################################################
currFile = path.Path(__file__).abspath()
currDirectory = currFile.parent.parent.parent
# determines host os and uses correct dir pattern
if sys.platform.startswith("win32"):
     currDirectory += r"\code-assets"
else:
     currDirectory += r"/code-assets"
sys.path.append(currDirectory)
# currDirectory should return root\code-assets to be in correct dir
print("Printing the folder parent here: %s" %currDirectory)

################################################################

# search for correct dir and file and import the methods to be tested
from backend.csundash import catalog, name_normalize, prof_name

# ################################################################
# # test the name_normalization function
# def test_name_normalize_common_returns_regular():
#      string_to_pass = "bOb"
#      assert name_normalize(string_to_pass) == "Bob"
#      string_to_pass = "bob"
#      assert name_normalize(string_to_pass) == "Bob"

# # name_normalize behavior should throw a type error to be correct
# def test_name_normalize_int_returns_error():
#      int_to_pass = 123
#      with pytest.raises(TypeError):
#           name_normalize(int_to_pass)

# ################################################################
# # test prof_name function
# def test_prof_name_returns_correct_name():
#      example_prof = "John Noga"
#      assert prof_name(subject="comp", prof_email="john.noga@csun.edu") == example_prof

# # @pytest.mark.problem_def
# # # proves that def prof_name(**kwargs) needs to handle invalid input
# # # when supplied invalid information, the function returns an index error
# # def test_prof_name_incorrect_returns_error():
# #      with pytest.raises(IndexError):
# #           warnings.warn(UserWarning("prof_name located in code-assets/backend/server.py \n"
# #           "Throws an IndexError exception if passed invalid subject/prof_email"))
# #           assert prof_name(subject="null", prof_email="unknown@csun.edu")

# ################################################################