from pymongo import MongoClient
from bson import ObjectId
from typing import List
from common.config import Config
from models.offer import JobOffer, JobOfferResponse
from models.search import SearchOffer
from mappers.offerMapper import genericSerialMapper, genericMapper


class OfferRepository():
    """ Handle CRUD operations for Offer collection """

    def __init__(self) -> None:
        self.config = Config()
        self.mongoClient = MongoClient(self.config.MONGO_HOST, 27017)
        self.mongoDB = self.mongoClient[self.config.MONGO_DATABASE]
        self.mongoCollection = self.mongoDB.offer_collection

    def __enter__(self):
        return self

    def insert(self, newOffer: JobOffer) -> ObjectId:
        """ Insert new offer """
        result = self.mongoCollection.insert_one(genericMapper(newOffer.model_dump()))
        return result.inserted_id
        
    def getAll(self, limit: int, skip: int) -> List[JobOfferResponse]:
        """ Get all offers """
        cursor = self.mongoCollection.find().skip(skip).limit(limit)
        result = list(cursor)
        return genericSerialMapper(result) if result is not None else None

    def getByID(self, offerID:str):
        """ Get offer by ID """
        result = self.mongoCollection.find_one({"_id": ObjectId(offerID)})
        return genericMapper(result) if result else None

    def getByCriteria(self, filterObject: SearchOffer, limit: int, skip: int) -> List[JobOfferResponse]:
        """ Get offer by criteria object """
        cursor = self.mongoCollection.find(filterObject.model_dump(exclude_unset=True)).skip(skip).limit(limit)
        result = list(cursor)
        return genericSerialMapper(result) if result else None

    def updateByID(self, offerID: str, updatedOffer: JobOffer) -> bool:
        """ Update offer """
        result = self.mongoCollection.update_one({"_id": ObjectId(offerID)}, {"$set": dict(updatedOffer)})
        return result.modified_count > 0

    def deleteByID(self, offerID: str) -> bool:
        """ Delete offer """
        result = self.mongoCollection.delete_one({"_id": ObjectId(offerID)})
        return result.deleted_count == 1

    def __exit__(self, ex_type, exc_value, traceback):
        pass

