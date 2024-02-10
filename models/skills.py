import sys
sys.path.append('.')

from pydantic import BaseModel, validator

class Skills(BaseModel):
    """ Required skills model """
    name: str
    level: int
    importance: str

    @validator("level")
    def validateLevel(cls, value):
        """ Validate skill level """
        levelrange = range(1,5)
        if value not in levelrange:
            raise ValueError(f"Invalid level. Should be in {levelrange}")
        return value
