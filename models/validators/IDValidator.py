from bson import ObjectId
from fastapi import HTTPException, Depends
from models.responses.apiResponse import ApiResponse
from repositories.offerRepository import OfferRepository
from functools import wraps



def validateID(func):
    """ Validate object ID """
    @wraps(func)
    async def wrapper(offerID: str = Depends(),
                repository: OfferRepository = Depends(),
                 *args, 
                 **kwargs):
        
        if not isValidObjectID(offerID):
            return ApiResponse.createErrorResponse(HTTPException(status_code=400, detail="ID should be valid ObjectID."))
        
        return await func(offerID, repository=repository, *args, **kwargs)
    
    return wrapper
        

def isValidObjectID(value):
    """ Validate if given values matches ObjectID """
    try:
        ObjectId(value)
        return True
    except Exception:
        return False