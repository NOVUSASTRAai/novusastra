from fastapi import FastAPI
from cryptography.fernet import Fernet, InvalidToken

app = FastAPI()
key = b'aU0B-nJ4tZsCDXI27nHPTunsov9e1GPooGOEp9Oj5YY='  # Use the generated key
cipher = Fernet(key)

@app.get("/encrypt/{data}")
def encrypt_data(data: str):
    try:
        encrypted_data = cipher.encrypt(data.encode())
        return {"encrypted": encrypted_data.decode()}
    except Exception as e:
        return {"error": f"Encryption failed: {str(e)}"}

@app.get("/decrypt/{encrypted_data}")
def decrypt_data(encrypted_data: str):
    try:
        decrypted_data = cipher.decrypt(encrypted_data.encode())
        return {"decrypted": decrypted_data.decode()}
    except InvalidToken:
        return {"error": "Invalid token: Encryption key mismatch or corrupted data"}
    except Exception as e:
        return {"error": f"Decryption failed: {str(e)}"}
