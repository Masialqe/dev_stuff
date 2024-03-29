from fastapi import APIRouter, Depends, HTTPException, Query
from models.offer import JobOffer
from models.search import SearchOffer
from models.responses.apiResponse import ApiResponse
from models.validators.IDValidator import validateID
from common.logging import InternalLogging
from repositories.offerRepository import OfferRepository
from starlette import status

router = APIRouter()
logger = InternalLogging()


@router.post("/offers", status_code= status.HTTP_201_CREATED, response_model= ApiResponse)
async def createOffer(newOffer: JobOffer, repository: OfferRepository = Depends()):
    """ Create new offer """
    try:
        if newOffer is None or not isinstance(newOffer, JobOffer):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid input data.")
        result = repository.insert(newOffer)
        response = ApiResponse.createSuccessResponse(statusCode=status.HTTP_201_CREATED, content={"id": str(result)})
        return response
    
    except Exception as ex:
        return ApiResponse.createErrorResponse(exception=ex)
        
    
@router.get("/offers", status_code= status.HTTP_200_OK, response_model=ApiResponse)
async def getAllOffers(limit: int = Query(10, description="Numbers of offers to fetch"), 
                       skip: int = Query(0, description="Numbers of offers to skip"),
                 repository: OfferRepository = Depends()):
    """ Get list of offers """
    try:
          result = repository.getAll(limit, skip)
          if result is None or len(result) == 0:
              raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="The list is empty")
          response = ApiResponse.createSuccessResponse(statusCode=status.HTTP_200_OK, content={"result": result})
          return response
    
    except Exception as ex:
        return ApiResponse.createErrorResponse(exception=ex)
    

@router.post("/offers/search", status_code= status.HTTP_200_OK, response_model=ApiResponse)
async def getOffersByCriteria(criteria: SearchOffer, 
                        limit: int = Query(10, description="Numbers of offers to fetch"),
                        skip: int = Query(0, description="Numbers of offers to skip"),
                        repository: OfferRepository = Depends()):
    """ Get offer by criteria """
    try:
        result = repository.getByCriteria(criteria, limit, skip)
        if result is None or len(result) == 0:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Offer not found")
        response = ApiResponse.createSuccessResponse(statusCode=status.HTTP_200_OK,content={"result": result} )
        return response
    
    except Exception as ex:
        return ApiResponse.createErrorResponse(exception=ex)
    

@router.get("/offers/{offerID}", status_code= status.HTTP_200_OK, response_model= ApiResponse)
@validateID
async def getOfferByID(offerID: str, repository: OfferRepository = Depends()):
    try:
        result = repository.getByID(offerID)
        if not result:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Offer not found")
        response = ApiResponse.createSuccessResponse(statusCode=status.HTTP_200_OK, content=result)
        return response
    
    except Exception as ex:
        return ApiResponse.createErrorResponse(exception=ex)
    

@router.delete("/offers/{offerID}", status_code=status.HTTP_204_NO_CONTENT)
@validateID
async def deleteOfferByID(offerID: str, repository: OfferRepository = Depends()):
    " Delete offer by ID "
    try:
        result = repository.deleteByID(offerID)
        if not result:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Offer of given ID doesnt exists")
        
    except Exception as ex:
        return ApiResponse.createErrorResponse(exception=ex)
        

@router.put("/offers/{offerID}", status_code= status.HTTP_204_NO_CONTENT)
@validateID
async def updateOfferByID(offerID: str, updatedOffer: JobOffer, repository: OfferRepository = Depends()):
    try:
        result = repository.updateByID(offerID, updatedOffer)
        if not result:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Offer not found ")

    except Exception as ex:
        return ApiResponse.createErrorResponse(exception=ex)
        
