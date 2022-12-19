from hypothesis import given, strategies as st
import pytest_mutagen as mg

@given(st.integers(), st.integers())
def test_ints_are_commutative(x, y):
    assert x + y == y + x


def name_normalize(str):
    return f"{str[0:1].upper()}{str[1:].lower()}"

@mg.mutant_of("name_normalize", "name_normalize_OBO", description="Increment is off by one.")
def  inc_mut(str="bob"):
 	return f"{str[0:1].upper()}{str[1:].lower()} + b"