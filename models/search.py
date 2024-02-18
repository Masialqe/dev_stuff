import sys
sys.path.append('.')

from pydantic import BaseModel
from typing import Optional, List

class SearchSalary(BaseModel):
    """ Search salary by criteria """
    currency: Optional[str] = None
    salaryFrom: Optional[float] = None
    salaryTo: Optional[float] = None

class SearchSkill(BaseModel):
    """ Search skills by criteria """
    name: Optional[str] = None
    level: Optional[int] = None
    importance: Optional[str] = None

class SearchOffer(BaseModel):
    """ Search offers by criteria """
    offerPosition: Optional[str] = None
    offerExperienceLevel: Optional[str] = None
    offerDescription: Optional[str] = None
    offerContractType: Optional[str] = None
    offerPlaceOfWork: Optional[str] = None
    offerOperatingMode: Optional[str] = None
    offerSalaryRange: Optional[List[SearchSalary]] = None
    skills: Optional[SearchSkill] = None


