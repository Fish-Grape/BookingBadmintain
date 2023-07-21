class Context:
    def __init__(self, BaseService):
        self._baseService = BaseService

    def executeDoQuery(self):
        return self._baseService.doQuery()