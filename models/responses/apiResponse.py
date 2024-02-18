import sys
sys.path.append('.')
from pydantic import BaseModel
from typing import Optional
from fastapi import HTTPException
from fastapi.exceptions import RequestValidationError
from common.logging import InternalLogging
from starlette import status


class ApiResponse(BaseModel):
    """ Api endpoint response model """
    message: str
    status: Optional[int] = None
    content: dict = {}

    @classmethod
    def createErrorResponse(cls, exception: Exception):
        """ Create error response """

        response = cls(message="failed")
        logger = InternalLogging()

        if isinstance(exception, HTTPException):
            response.status = exception.status_code

        elif isinstance(exception, RequestValidationError):
            response.status = status.HTTP_422_UNPROCESSABLE_ENTITY
           
        else:
            response.status = status.HTTP_500_INTERNAL_SERVER_ERROR
            logger.error(f"Internal Server Error: [EX]: {exception}")

        response.content = {"details": str(exception)}
        return response
    
    @classmethod
    def createSuccessResponse(cls, statusCode: int , content: dict):
        """ Create success response """
        return cls(
            message="success",
            status=statusCode,
            content=content
        )
        
