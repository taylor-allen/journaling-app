from flask import Flask, jsonify
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

MONGO_URI = os.environ.get("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["MindFrame-Journal"]

@app.route("/")
def index():
    return jsonify(message="Welcome to the MindFrame Journal API!")
@app.route("/api/hello")
def hello():
    return "Hello from Flask!"

@app.route("/api/test-mongo")
def test_mongo():
    try:
        collections = db.list_collection_names()
        return jsonify(status="success", collections=collections), 200
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500

if __name__ == "__main__":
    app.run(debug=True)