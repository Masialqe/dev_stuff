import sys
sys.path.append('.')

from pydantic import BaseModel, validator
from enums.skillImportanceType import SkillImportance

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
    
    @validator("importance")
    def validateImportance(cls, value):
        """ Validate skill importance against SkillImportance enum """
        validValues = [member.value for member in SkillImportance]
        if value.upper() not in validValues:
            raise ValueError(f"Invalid value, should be one of: {validValues}")
        return value
