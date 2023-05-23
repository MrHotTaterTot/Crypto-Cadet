from firebase_admin import initialize_app, auth

MYURL = "https://cryptocadet-743de.firebaseapp.com"

cred_obj = initialize_app(
    options={"databaseURL": MYURL}, name="cryptocadet-743de"
).credential


t = cred_obj.get_credential()
print(t)
