from Model.Enum import QueryType
from Service.QueryService.QuerySwitch import QuerySwitch
from Utility.FileHelper import FileHelper


class BookingService:

    def Main(self):
        fileHelper = FileHelper()
        fileHelper.clearImages()
        switch = QuerySwitch()
        flag = True
        queryResult = None
        i = 0
        while(flag):
            queryResult = switch.sendQuery(QueryType.ValidateCode)
            i +=1
            if(i == 1):
                flag = False
        return  queryResult

