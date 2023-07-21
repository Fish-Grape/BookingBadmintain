from Utility.ParamHelper import ParamHelper
from Utility.RequestHelper import RequestHelper


class BaseService:
    paramHelper = ParamHelper()
    requestHelper = RequestHelper()

    def doQuery(self):
        pass