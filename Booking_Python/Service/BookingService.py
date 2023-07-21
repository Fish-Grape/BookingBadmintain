from Model.Enum import QueryType
from Service.QueryService.QuerySwitch import QuerySwitch

class BookingService:

    def Main(self):
        switch = QuerySwitch()
        queryResult = switch.sendQuery(QueryType.ValidateCode)
        return  queryResult

