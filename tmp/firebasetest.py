API_KEY = "AIzaSyC28aERQpfcKcdJ5DUXTVxUbpVQLh-Mtl8"

url = f"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={API_KEY}"

headers = {
    "Content-Type": "application/json; charset=UTF-8",
}

data = {
    "email": "mieszko@gmail.com",
    "password": "password",
    "returnSecureToken": True,
}

import requests

res = requests.post(url, headers=headers, json=data)

print(res.json())
