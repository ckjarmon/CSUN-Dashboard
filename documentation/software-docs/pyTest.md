# How to start pyTest: #
Check documentation online: [pyTest website](https://docs.pytest.org/en/7.2.x/ "pyTest")
1. Install pyTest ```pip install -U pytest```
Check to see if you have correctly installed pyTest by running ```pytest --version```

2. Navigate terminal to the testing folder located here:
`'test/'`

3. Run the command
```
pytest
```
You may run the variation that provides stdout by running
```
pytest -rP
```

You should see some output in the terminal regarding the results of the tets, see below <br />
![pyTest](https://raw.githubusercontent.com/kyeou/CSUN-Dashboard/main/documentation/images/test-result.png "")

Run the coverage reports <br />
```pytest --cov --cov-report=html:backend/pytest_reports/ --cov-report=xml:backend/pytest_reports/coverage.xml```

View the coverage reports (run the file on "Live Server")
Located in: `'test/backend/pytest_reports/index.html'`

## How to run mutation testing ##
Navigate terminal to the testing folder located here:
`'test/'`
<br />

Run this command
<br />
``` pytest --mutate```

## Additional Installs Needed ##
For additional mock test features for pyTest &emsp;&emsp;```pip install pytest-mock```

## Optional Installs that may be Needed ##
Depending on the version of pyTest you have, you may also need this additional install <br />

For viewing code coverage when using pyTest &emsp;&emsp;```pip install pytest-cov```

For testing post results with pyTest and Flask &emsp;&emsp;```pip install pytest-flask```

For running mutation testing with pyTest &emsp;&emsp;```pip install pytest-mutagen```
