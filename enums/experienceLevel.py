from enum import Enum

class ExperienceLevel(Enum):
    """ Available experience levels """
    JUNIOR = "JUNIOR"
    MID = "MID"
    SENIOR = "SENIOR"

    @classmethod
    def _missing_(cls, value: object):
        value = value.lower()
        for member in cls:
            if member.value == value:
                return member
        return None