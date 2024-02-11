from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError
from common.config import Config
from fastapi.middleware.cors import CORSMiddleware
from routes.offersRoute import router
from models.handlers.exceptionHandlers import handleValidationError
import uvicorn

#create app 
app = FastAPI()

#configure CORS
config = Config()

app.add_middleware(
    CORSMiddleware,
    allow_origins=config.ALLOWED_HOSTS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"]
)

#add exepcetion handling
app.add_exception_handler(RequestValidationError, handleValidationError)

#add routes
app.include_router(router, prefix="/api/v1")

#configure uvicorn 
if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)