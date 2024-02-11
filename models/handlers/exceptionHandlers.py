import sys
sys.path.append('.')

from fastapi.exceptions import RequestValidationError
from starlette.requests import Request
from starlette.responses import JSONResponse
from starlette import status
from models.responses.apiResponse import ApiResponse


def handleValidationError(request: Request, exception: RequestValidationError):
    """ Handle RequestValidationError from pydantic """
    response = ApiResponse.createErrorResponse(exception)
    return JSONResponse(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, content=response.model_dump())