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

def cancelladb():
    collection.delete_many({})

def insertPost(post):
    collection.insert_one(post)
 
@app.route('/index',methods = ['GET'])
def index():
  return getData()

@app.route('/add',methods = ['POST'])
def add_post():
  
  data = request.get_json()
  #record = getData()
  #cancelladb()
  try:
    post = {
      "autore": data["autore"],
      "descrizione": data["descrizione"],
      "miPiace": data['miPiace'],
      "commenti": data['commenti'],
      'immagine' : data['immagine']
    }
    insertPost(post)
    '''for x in record :
      print(x)
      insertPost(x)'''
    return '{"info": "Post aggiunto"}'
    
  except Exception as e:
    print(e)
    return '{"info": "Post non aggiunto"}'



cancelladb()
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
ip = s.getsockname()[0]
s.close()
app.run(host=ip, port=8080)
