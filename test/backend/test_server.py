from unittest import TestCase
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
from csundash import home, name_normalize, get, professors, catalog, new_rating, get_ratings, prof_name, schedule
from csundash import establish_conn, historical_profs

################################################################
# test establishing connection to database
# correctly marks that invalid login info will throw an
# exception error and not continue with database operations
def test_connection_invalid_db_return_error(mocker):
     with pytest.raises(mariadb.OperationalError):
          mocker.patch('csundash.rootConnection', rootConnection = mariadb.connect(
          user="py_serv",
          password="invalid_password",
          host='127.0.0.1',
          port=3306,
          database='csun'))

################################################################
# test the name_normalization function
def test_name_normalize_common_returns_regular():
     string_to_pass = "bOb"
     assert name_normalize(string_to_pass) == "Bob"
     string_to_pass = "bob"
     assert name_normalize(string_to_pass) == "Bob"

# name_normalize behavior should throw a type error to be correct
def test_name_normalize_int_returns_error():
     int_to_pass = 123
     with pytest.raises(TypeError):
          name_normalize(int_to_pass)

################################################################
# test prof_name function
def test_prof_name_returns_correct_name():
     example_prof = "John Noga"
     assert prof_name(subject="comp", prof_email="john.noga@csun.edu") == example_prof

@pytest.mark.xfail(raises=IndexError)
# proves that def prof_name(**kwargs) needs to handle invalid input
# when supplied invalid information, the function returns an index error
def test_prof_name_incorrect_returns_error():
     warnings.warn(UserWarning("prof_name located in code-assets/backend/server.py \n"
     "Throws an IndexError exception if passed invalid subject/prof_email"))
     assert prof_name(subject="null", prof_email="unknown@csun.edu")

################################################################
# test catalog function
def test_catalog_returns_correct_class_string():
     example_subject = "AAS"
     first_course = "100 - Introduction to Asian American Studies"
     assert catalog(subject=example_subject)[0] == first_course

@pytest.mark.xfail(raises=IndexError)
# proves that def catalog(**kwargs) doesn't have access to valid data
# FROM csun.{kwargs['subject'].upper()}_view""") returns null
# meaning the code-assets\backend\scripts\sql_server_setup\sql_server_mariasb_setup.py file
# was unable to create the correct table, csun.COMP_view has no data in it
def test_catalog_comp_contains_no_data_returns_empty_array():
     example_subject = "COMP"
     first_course = "100 - Computers: Their Impact And Use"
     assert catalog(subject=example_subject)[0] == first_course

@pytest.mark.xfail(raises=mariadb.ProgrammingError)
# proves that def catalog(**kwargs) can attempt to access invalid data
# this invalid data will throw an exception and cause a halt
def test_catalog_invalid_returns_null():
     example_subject = "SOFTWARE"
     empty_array = []
     assert catalog(subject=example_subject) == empty_array

################################################################
# test base home route
# test to see if home page request status is correct
def test_home_route_returns_correct_home_page():
     response = requests.get('http://csundash.kyeou.xyz/')
     assert response.status_code == 200

# test to see if home page returns correct html code
def test_home_page_return_correct_html():
     html_code = "<h1 style='color:blue'>Hello There!</h1>"
     assert home() == html_code

################################################################
# test get route
# tests to see if the get function retrieves a valid JSON file
def test_get_route_returns_correct_json():
     subject_kwarg = "COMP"
     data_kwarg = "rating"
     assert isinstance(get(subject=subject_kwarg, data=data_kwarg), dict) == True

################################################################
# test professors
# # 'mocker' fixture provided by pytest-mock
# def test_get_operating_system(mocker):  
#     # Mock the slow function and return True always
#     mocker.patch('application.is_windows', return_value=True) 
#     assert get_operating_system() == 'Windows'

# mock test on providing incorrect database credentials
# def test_professors_returns_all_professors_in_subject(mocker):
#      mocker.patch('csundash.rootCursor', return_value=[])
#      subject_kwarg = "comp"
#      # print(professors(subject=subject_kwarg))
#      assert professors(subject=subject_kwarg) == []

################################################################
# test new rating
# def test_new_rating_post_result(client):
#      subject_kwarg = "ae"
#      assert new_rating(subject=subject_kwarg) == []

     # data = {
     # 'Data': [20.0, 30.0, 401.0, 50.0],
     # 'Date': ['2017-08-11', '2017-08-12', '2017-08-13', '2017-08-14'],
     # 'Day': 4
     # }
     # url = '/upload/'

     # response = client.post(url, json=data)

     # assert response.content_type == 'application/json'
     # assert response.json['Result'] == 39

################################################################
# test get ratings
@pytest.mark.xfail(raises=mariadb.ProgrammingError)
# proves that the current mariadb sql setup script
# does not allow developers to run this function
def test_get_ratings_return_prof_ratings():
     professor_email = "edmund.dantes@csun.edu"
     #print("What is the type? %s" %type(get_ratings(email=professor_email)))
     assert get_ratings(email=professor_email)

#def test_get_ratings_invalid_connection():

################################################################
# test schedule

@pytest.mark.xfail(raises=mariadb.ProgrammingError)
# proves that the current mariadb sql setup script
# does not allow developers to run this function
def test_schedule_return_sched():
     subject_kwarg = "COMP"
     catalog_number_kwarg = 1
     assert schedule(subject=subject_kwarg, catalog_number=catalog_number_kwarg)

################################################################
# test historical profs

# historical profs are returned
def test_historical_profs_returns_dict():
     subject_kwarg = "COMP"
     catalog_number_kwarg = "110"
     amount_kwarg = 1
     assert historical_profs(subject=subject_kwarg,catalog_number=catalog_number_kwarg,amount=amount_kwarg)
