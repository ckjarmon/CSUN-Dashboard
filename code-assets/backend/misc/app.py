import os
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import JWTManager

app = Flask(__name__)

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = os.enviorn.get("JWT_SECRET")
jwt = JWTManager(app)