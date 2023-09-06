from Model.Enum import QueryType
from Service.QueryService.QuerySwitch import QuerySwitch
from Utility.CacheClass import CacheClass
from Utility.FileHelper import FileHelper
from Utility.ParamHelper import ParamHelper


class BookingService:
    switch = QuerySwitch()

    def init(self):
        cacheClass = CacheClass()
        cacheClass.initCache()
        fileHelper = FileHelper()
        fileHelper.clearImages()
        self.login()

    def login(self):
        self.switch.sendQuery(QueryType.ValidateCode)

        # myinfoResult = self.switch.sendQuery(QueryType.MyInfo)
        # if myinfoResult['code'] == 401:
        #     valiDateResult = self.switch.sendQuery(QueryType.ValidateCode)
        #     if valiDateResult:
        #         self.switch.sendQuery(QueryType.Login)

    def Main(self):
        self.init()
        flag = True
        queryResult = None
        i = 0
        while(flag):
            # valiDateResult = self.switch.sendQuery(QueryType.ValidateCode)

            i +=1
            if(i == 1):
                flag = False
        return  queryResult

