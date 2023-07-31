from Model.Enum import QueryType
from Service.QueryService.QuerySwitch import QuerySwitch
from Utility.FileHelper import FileHelper


class BookingService:

    def Main(self):
        fileHelper = FileHelper()
        fileHelper.clearImages()
        switch = QuerySwitch()
        queryResult = switch.sendQuery(QueryType.ValidateCode)
        return  queryResult

