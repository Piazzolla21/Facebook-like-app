import json, socket
import pymongo as pym
from bson.objectid import ObjectId

from flask_cors import CORS
from flask import Flask, request
app = Flask(__name__)
cors = CORS(app)

client = pym.MongoClient("mongodb+srv://matty2107:matty2107@cluster0.nccnhbo.mongodb.net/?retryWrites=true&w=majority")
db = client['Facebock']
collection = db['Facebock']


def getData():
    lista = []
    for a in collection.find():
        id = a.pop("_id")
        lista.append(a)
        print(lista)
    return lista

def insertPost(post):
    collection.insert_one(post)
 
@app.route('/index',methods = ['GET'])
def index():
  return getData()

"""@app.route('/add_comment',methods = ['POST'])
def add_comment():
  data = request.get_json()
  try:
    post = {
      "id": data["id"],
      "comment": data["comment"]
    }
    add_comment_to_db(post)
    return '{"info": "Comment add complete"}'
  except Exception as e:
    print(e)
    return '{"Error": "Errore nell aggiunta del commento"}'"""
    
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
ip = s.getsockname()[0]
s.close()
app.run(host=ip, port=8080)
