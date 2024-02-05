import sys
sys.path.append('.')

from pydantic import BaseModel


class Company(BaseModel):
    """ Company model """
    companyName: str
    companyCountry: str
    companyPhoneNumber: str
    companyEmailAddress: str