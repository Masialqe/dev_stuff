import sys
sys.path.append('.')

from pydantic import BaseModel
from typing import Optional

class ApiResponse(BaseModel):
    """ Api endpoint response model """
    message: str
    status: Optional[int] = None
    content: dict = {}