import os

class Config():
    """ App cofnig """

    def __init__(self) -> None:
        #mongo host name 
        self.MONGO_HOST = self._getEnvironByName("MONGO_HOST", "localhost")
        self.MONGO_DATABASE = self._getEnvironByName("MONGO_DATABASE", "asap_db")
        self.ALLOWED_HOSTS = self._getEnvironByName("ALLOWED_HOSTS", "")

    def _getEnvironByName(self, envName: str, default: str) -> str:
        """ Get env by name """
        return os.environ.get(envName, default)

