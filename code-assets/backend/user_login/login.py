from flask import Flask, render_template, request, jsonify
import hashlib
import mariadb
import json

# render template
# return render_template("index.html")

account = Flask(__name__)


try:
    rootConnection = mariadb.connect(
        user="py_serv",
        password=json.load(open("secret.json", "r"))["db_pass"],
        host='127.0.0.1',
        port=3306,
        database='csun')
    rootCursor = rootConnection.cursor()
except mariadb.Error as err:
    print(f"Error connecting to MariaDB Platform: {err}")



"""{"username", "password", "email"}"""
@account.route('/signup')
def signup():
    signup_data = request.get_json(force=True)
    rootCursor.execute(f"insert into user (username, password, email) values (%s,%s,%s)", 
                       (signup_data['username'],signup_data['password'], signup_data['email']))
    
    return json.load(open(f"../../backend/json_users/{hashlib.sha3_256(signup_data['username'].encode()).hexdigest()}"))


"""{"username", "password"}"""
@account.route('/account')
def account():
    account_data = request.get_json(force=True)
    rootCursor.execute(f"""select password from user where 
                       username = '{account_data['username']}'""")
    hashed = rootCursor.fetchall()[0][0]
    if hashed == hashlib.sha3_256(account_data["password"].encode()).hexdigest():
        return json.load(open(f"""../../backend/json_users/
                              {hashlib.sha3_256(account_data['username'].encode()).hexdigest()}"""))
    return -1 


if __name__ == '__main__':
    account.run(host='0.0.0.0')