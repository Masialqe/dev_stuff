import sys
sys.path.append('.')
from pydantic import BaseModel
from typing import Optional
from fastapi import HTTPException
from pydantic import ValidationError
from common.logging import InternalLogging


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
            response.content = {"details": str(exception)}
        elif isinstance(exception, ValidationError):
            response.status = 422
            response.validation_error = {"details": str(exception.errors())}
        else:
            response.status = 500
            response.content = {"details": str(exception)}
            logger.error(f"Internal Server Error: [EX]: {exception}")

        return response
    
    @classmethod
    def createSuccessResponse(cls, statusCode: int , content: dict):
        """ Create success response """
        return cls(
            message="success",
            status=statusCode,
            content=content
        )
        
