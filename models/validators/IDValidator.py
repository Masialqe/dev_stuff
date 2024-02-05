from bson import ObjectId
from fastapi import HTTPException
from functools import wraps



def validateID(func):
    """ Validate object ID """
    @wraps(func)
    def wrapper(offerID: str, *args, **kwargs):
        if not offerID:
            raise HTTPException(status_code=400, detail="Item ID cannot be null.")
        
        if not isValidObjectID(offerID):
            raise HTTPException(status_code=400, detail="ID should be a valid ObjectID")
        
        return func(offerID, *args, **kwargs)
    
    return wrapper
        

def isValidObjectID(value):
    try:
        ObjectId(value)
        return True
    except Exception:
        return False