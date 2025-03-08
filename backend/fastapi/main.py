from fastapi import FastAPI
from fastapi.responses import JSONResponse
import base64
from cryptography.fernet import Fernet
import logging

app = FastAPI()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

key = "HW45Sfua6qhgwTT8RyKSTzkxQSnXxoP-B_q5L0IrP7k="
cipher_suite = Fernet(key.encode())

@app.get("/decrypt/{encrypted_text}")
async def decrypt(encrypted_text: str):
    try:
        logger.info(f"Attempting to decrypt: {encrypted_text}")
        encrypted_data = base64.urlsafe_b64decode(encrypted_text.encode())
        decrypted_text = cipher_suite.decrypt(encrypted_data).decode()
        logger.info("Decryption successful")
        return JSONResponse({"decrypted": decrypted_text})
    except base64.binascii.Error as e:
        logger.error(f"Base64 decoding error: {str(e)}")
        return JSONResponse({"error": f"Invalid base64 encoding: {str(e)}"}, status_code=400)
    except Fernet.InvalidToken as e:
        logger.error(f"Decryption error: {str(e)}")
        return JSONResponse({"error": f"Invalid token or key mismatch: {str(e)}"}, status_code=400)
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        return JSONResponse({"error": f"Unexpected error: {str(e)}"}, status_code=500)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
