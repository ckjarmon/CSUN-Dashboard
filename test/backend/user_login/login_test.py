from unittest import TestCase
import sys
import importlib
sys.path.append("/../../code-assets/backend/user_login/")
#code_assets = importlib.import_module("code-assets")
#from code_assets.backend.user_login import sum_it

print(sys.path)

"""
Tests functionality from login.py
"""

def test_sum_empty() -> None:
     sum()

