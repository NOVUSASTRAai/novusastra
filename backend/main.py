from fastapi import FastAPI
from cryptography.fernet import Fernet

app = FastAPI()
# Use a fixed key (generate once and reuse)
key = b'6z7y8x9w0v1u2t3s4r5q6p7o8n9m0l1k2j3i4h5g6f7e8d9c0b1a2'  # Replace with a 32-byte base64-encoded key
# To generate a key once: print(Fernet.generate_key())
# Example key (replace with your own):
# key = b'6z7y8x9w0v1u2t3s4r5q6p7o8n9m0l1k2j3i4h5g6f7e8d9c0b1a2'
cipher = Fernet(key)

@app.get("/encrypt/{data}")
def encrypt_data(data: str):
    encrypted_data = cipher.encrypt(data.encode())
    return {"encrypted": encrypted_data.decode()}

@app.get("/decrypt/{encrypted_data}")
def decrypt_data(encrypted_data: str):
    decrypted_data = cipher.decrypt(encrypted_data.encode())
    return {"decrypted": decrypted_data.decode()}
