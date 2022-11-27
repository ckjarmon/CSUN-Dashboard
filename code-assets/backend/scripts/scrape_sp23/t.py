import mariadb
import json


try:
    rootConnection = mariadb.connect(
        user="root",
        password=json.load(open("../../secret.json", "r"))["db_pass"],
        host='127.0.0.1',
        port=3306,
        database='csun')
    rootCursor =  rootConnection.cursor()
except mariadb.Error as err:
    print(f"Error connecting to MariaDB Platform: {err}")
    
    
rootCursor.execute(f"select * from csun.ae_view where catalog_number = '486B'")


print(rootCursor.fetchall())