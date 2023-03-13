from login import sum_it
from unittest import TestCase
import sys
import path

currFile = path.Path(__file__).abspath()
currDirectory = currFile.parent.parent.parent.parent

if sys.platform.startswith("win32"):
     currDirectory += "\code-assets"
else:
     currDirectory += "/code-assets"

sys.path.append(currDirectory)

print("Printing the folder parent here: %s" %currDirectory)

from backend.user_login.login import sum_it

"""
Tests functionality from login.py
"""

# def test_sum_empty() -> None:
#       sum_it(3)

def test_sum_empty() -> None:
    sum()
