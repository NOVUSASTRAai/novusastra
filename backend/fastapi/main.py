from fastapi import FastAPI
from cryptography.fernet import Fernet

app = FastAPI()
key = Fernet.generate_key()
cipher = Fernet(key)

@app.get("/encrypt/{data}")
def encrypt_data(data: str):
    encrypted_data = cipher.encrypt(data.encode())
    return {"encrypted": encrypted_data.decode()}

@app.get("/decrypt/{encrypted_data}")
def decrypt_data(encrypted_data: str):
    decrypted_data = cipher.decrypt(encrypted_data.encode())
    return {"decrypted": decrypted_data.decode()}
