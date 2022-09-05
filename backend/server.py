from flask import Flask, request, jsonify
import json


app = Flask(__name__)

@app.route('/<string:subject>/<string:data>')
def get(**kwargs):
    return json.load(open('./json_' + kwargs["data"] +  '/' + kwargs["subject"].upper() + '_' + kwargs["data"] + '.json'))

@app.route('/<string:subject>/rating', methods=['POST'])
def new_rating(**kwargs):
    json_object = json.load(open('./json_' + 'rating' +  '/' + kwargs["subject"].upper() + '_' + 'rating' + '.json'))
    file1 = open('./json_' + 'rating' +  '/' + kwargs["subject"].upper() + '_' + 'rating' + '.json', "w")
    input_json = request.get_json(force=True) 
    print ('data from client:', input_json)
    json_object[input_json["professor_first_name"] + " " + input_json["professor_last_name"]] = input_json
    json.dump(json_object, file1, indent=4)
    return input_json

app.run(port=8000)