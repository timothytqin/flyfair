import os
import pymongo
import json
import random
# import psycopg2
import hashlib
import time
from bson.json_util import loads, dumps


from hashlib import sha256


def hashthis(st):


    hash_object = hashlib.md5(st.encode())
    h = str(hash_object.hexdigest())
    return h



def dummy(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # Set CORS headers for main requests
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }

    request_json = request.get_json()

    
    mongostr = os.environ.get('MONGOSTR')
    client = pymongo.MongoClient(mongostr)
    db = client["flyfair"]


    retjson = {}

    action = request_json['action']


    if action == "getflights":
        payload = []

        col = db.flights

        for x in col.find():
            dat = dumps(x)
            payload.append(dat)
        
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully retrieved"
        retjson['data'] = payload

        return json.dumps(retjson)


    if action == "getbids":
        payload = []

        col = db.bids

        for x in col.find():
            dat = dumps(x)
            payload.append(dat)

        
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully retrieved"
        retjson['data'] = payload

        return json.dumps(retjson)


    if action == "gettips":
        payload = []

        col = db.tips

        for x in col.find():
            dat = dumps(x)
            payload.append(dat)

        
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully retrieved"
        retjson['data'] = payload

        return json.dumps(retjson)



    if action == "getpremium":
        payload = {}

        col = db.flights

        for x in col.find():
            if x['id'] != request_json['flightid']:
                continue
            payload['premium'] = x['premium']
            
        
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully retrieved"
        retjson['data'] = payload

        return json.dumps(retjson)



    if action == "setpremium":
        payload = {}

        col = db.flights

        for x in col.find():
            if x['id'] != request_json['flightid']:
                continue
            payload['premium'] = x['premium']
            col.update_one({"id": x['id']}, {"$set":{"premium":request_json['premium']}})

            
        
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully updated"
        retjson['oldpremium'] = payload

        return json.dumps(retjson)




    if action == "getwallet":
        payload = []

        col = db.wallets

        for x in col.find():
            if x['userid'] != request_json['userid']:
                continue
            dat = dumps(x)
            payload.append(dat)

        
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully retrieved"
        retjson['data'] = payload

        return json.dumps(retjson)


    if action == "addwallet" :
        maxid = 1
        col = db.wallets
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["userid"] = request_json['userid']
        payload["currency"] = request_json['currency']
        payload["balance"] = 0.0
        
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['id'] = id

        return json.dumps(retjson)






    if action == "addflight" :
        maxid = 1
        col = db.flights
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["equipment"] = request_json['equipment']
        payload["capacityeco"] = request_json['capacityeco']
        payload["capacityfirst"] = request_json['capacityfirst']
        payload["origin"] = request_json['origin']
        payload["destination"] = request_json['destination']
        payload["date"] = request_json['date']
        payload["departure"] = request_json['departure']
        payload["arrival"] = request_json['arrival']
        payload["duration"] = request_json['duration']
        payload["pilotsneeded"] = request_json['pilotsneeded']
        payload["crewneeded"] = request_json['crewneeded']
        payload["pilots"] = []
        payload["crew"] = []
        payload["revenuw"] = request_json['revenue']
        payload["maxpilotover"] = request_json['maxpilotover']
        payload["maxcrewover"] = request_json['maxcrewover']
        payload["premium"] = request_json['premium']
        
        
      
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['id'] = id

        return json.dumps(retjson)



    if action == "placebid" :
        maxid = 1
        col = db.bids
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        col2 = db.flights

        orig = "YYY"
        dest = "ZZZ"
        duration = "145"
        plane = "Boeing 737"
        depart = "1620"



        for x in col2.find():
            if x['id'] == request_json['flightid']:
                orig = x['origin']
                dest = x['destination']
                duration = x['duration']
                plane = x['equipment']
                depart = x['departure']



        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["flightid"] = request_json['flightid']
        payload["userid"] = request_json['userid']
        payload["usertype"] = request_json['usertype']
        payload["amount"] = request_json['amount']
        payload["origin"] = orig
        payload["destination"] = dest
        payload["duration"] = duration
        payload["aircraft"] = plane
        payload["departure"] = depart
        
        payload["status"] = "active"

        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['id'] = id

        return json.dumps(retjson)



    if action == "getrawdata": 
        payload = []
        col = db.rawparkdata

        for x in col.find():
            dat =  dumps(x)
            payload.append(dat)
        
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully retrieved"
        retjson['data'] = payload

        return json.dumps(retjson)
        

    if action == "getchain":
        blockchain = loadchain(db, blockchain, request_json['eid'])
        chain_data = []
        for block in blockchain.chain:
            chain_data.append(block.__dict__)
        return json.dumps({"length": len(chain_data),
                        "chain": chain_data})



    if action == "addtip" :
        maxid = 1
        col = db.tips
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["userid"] = request_json['paxid']
        payload["amount"] = request_json['amount']
        payload["flightid"] = request_json['flightid']
        payload["currency"] = request_json['currency']
        
        
        result=col.insert_one(payload)

        col = db.tipjars

        flag = 0

        maxid = 1
        for x in col.find():
            if request_json['flightid'] == x['id']:
                flag = 1
                oldval = double(x['amount'])
                nv = double(request_json['amount']) + oldval
                newval = str(nv)
                col.update_one({"id": x['id']}, {"$set":{"amount":newval}})

            maxid +=1
        

        if flag ==0:
                    id = str(maxid+1)

                    payload = {}

                    uid = id 
                    payload["id"] = id
                    # payload["uid"] = request_json['uid']
                    # payload["name"] = request_json['name']
                    payload["userid"] = request_json['paxid']
                    payload["amount"] = request_json['amount']
                    payload["flightid"] = request_json['flightid']
                    payload["currency"] = request_json['currency']
                    
                    
                    result=col.insert_one(payload)



        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added/updated"
        retjson['id'] = id

        return json.dumps(retjson)




    if action == "adduser" :
        maxid = 1
        col = db.users
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["email"] = request_json['email']
        payload["password"] = request_json['password']
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['id'] = id

        return json.dumps(retjson)


    if action == "login":
        col = db.users
        for x in col.find():
            if x['email'] == request_json['email'] and x['password'] == request_json['password']:
                uid = x['id']
                retjson = {}

                # retjson['dish'] = userid
                retjson['status'] = "success"
                retjson['id'] = uid

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['id'] = "-1"

        return json.dumps(retjson)



    if action == 'getuserface':
        uid = request_json['userid']
        res = getuserface(conn, uid)

        # res = login(conn, uemail, pw)

        retjson['status'] = str(res[0])
        retjson['userface1'] = str(res[2])
        retjson['userface2'] = str(res[3])
        

        return json.dumps(retjson)

    if action == 'setuserface':
        uid = request_json['userid']
        userface = request_json['userface']

        res = updateface(conn, uid, userface)


        # res = login(conn, uemail, pw)

        retjson['status'] = "completed"
        

        return json.dumps(retjson)


    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
