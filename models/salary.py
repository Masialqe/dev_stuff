from pydantic import BaseModel

class Salary(BaseModel):
    """ Salary exceptation model """
    currency: str
    salaryFrom: float
    salaryTo: float