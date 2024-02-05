import sys
sys.path.append('.')

from pydantic import BaseModel
from typing import Optional

class SearchOffer(BaseModel):
    """ Search offers by criteria """
    offerPosition: Optional[str] = None
    offerExperienceLevel: Optional[str] = None
    offerDescription: Optional[str] = None
    offerContractType: Optional[str] = None
    offerOperatingMode: Optional[str] = None
    offerSalaryRange: Optional[str] = None