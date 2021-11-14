import requests

def getweather(cred, lat, lon):

    url = "https://api.openweathermap.org/data/2.5/onecall"

    querystring = {"lat":lat,"lon":lon,"exclude":"minutely,daily","appid":cred}

    payload = ""
    headers = {
        'cache-control': "no-cache",
        'Postman-Token': "08a4d893-a050-4858-9c5f-365cee2d67b0"
        }

    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

    print(response.text)
    return response.json()