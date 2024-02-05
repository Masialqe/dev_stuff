from pydantic import BaseModel, validator
from typing import Optional
from models.company import Company
from enums.experienceLevel import ExperienceLevel
from enums.operatingMode import OperatingMode
from enums.contractType import ContractType

class JobOffer(BaseModel):
    """ JobOffer model """
    offerPosition: str
    offerExperienceLevel: str
    offerDescription: str
    offerContractType: str
    offerContract: str
    offerOperatingMode: str
    offerSalaryRange: str
    offerCompany: Company
    offerApplications: Optional[list] = []

    @validator("offerExperienceLevel")
    def validateExperienceLevel(cls, value):
        """ Validate experience level with enum """
        return cls._validateValue(value, ExperienceLevel)
    
    @validator("offerOperatingMode")
    def validateOperatingMode(cls, value):
        """ Validate operating mode with enum"""
        return cls._validateValue(value, OperatingMode)
    
    @validator("offerContractType")
    def validateContractType(cls, value):
        """ Validate contract type """
        return cls._validateValue(value, ContractType)
    
    @classmethod
    def _validateValue(cls, value, enumType):
        validValues = [member.value for member in enumType]
        if value not in validValues:
            raise ValueError(f"Invalid value, should be one of: {validValues}")
        return value


class JobOfferResponse(JobOffer):
    """ JobOffer response model """
    id: str
    
