from unittest import TestCase
import sys
import path
import pytest

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
from backend.server import name_normalize

# test the name_normalization function
def test_name_normalize_common_returns_regular():
     string_to_pass = "bOb"
     assert name_normalize(string_to_pass) == "Bob"




# def func(x):
#      return x + 1

# def test_answer():
#      assert func(3) == 5