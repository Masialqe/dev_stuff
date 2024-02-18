from pydantic import BaseModel, validator

class Salary(BaseModel):
    """ Salary exceptation model """
    currency: str
    salaryFrom: float
    salaryTo: float

    @validator("salaryTo")
    def validateSalaryTo(cls, value, values):
        if 'salaryFrom' in values and value < values['salaryFrom']:
            raise ValueError('Upper limit of salary range canot be less than lower value.')
        return value

