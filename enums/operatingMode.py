from enum import Enum

class OperatingMode(Enum):
    """ Available job operating modes """
    REMOTE = "REMOTE"
    HYBRID = "HYBRID"
    ONSITE = "ON-SITE"