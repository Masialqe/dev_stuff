import sys
sys.path.append('.')

def offerSingleMapper(offer) -> dict:
    result = {"id": str(offer.pop("_id"))}  
    for key, value in offer.items():
        if key == "offerCompany":
            result[key] = offerCompanyMapper(value)
        else:
            result[key] = value
    return result


def offerSerialMapper(offers) -> list:
    """ Map list of offers to list od dicts """
    return [offerSingleMapper(offer) for offer in offers]


def offerCompanyMapper(company) -> dict:
    """ Map one company object to dict """
    return {key: value for key, value in company.items()}

