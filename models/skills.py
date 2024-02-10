import sys
sys.path.append('.')

from pydantic import BaseModel, validator

class Skills(BaseModel):
    """ Required skills model """
    name: str
    level: int
    importance: str 

