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

from backend.server import name_normalize

# test the name_normalization function
name_normalize("bOb")