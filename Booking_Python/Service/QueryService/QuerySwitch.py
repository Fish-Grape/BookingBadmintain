from Model.Enum import QueryType
from Service.QueryService.Context import Context
from Service.QueryService.LoginService import LoginService
from Service.QueryService.QueryMyInfo import QueryMyInfo
from Service.QueryService.QuerySalesItemList import QuerySalesItemList
from Service.QueryService.QueryValidateCode import QueryValidateCode


class QuerySwitch:
    def getContext(self,argument):
        switcher = {
            QueryType.MyInfo: Context(QueryMyInfo()),
            QueryType.SalesItemList: Context(QuerySalesItemList()),
            QueryType.ValidateCode: Context(QueryValidateCode()),
            QueryType.Login: Context(LoginService()),
        }
        context = switcher.get(argument, Context(QueryMyInfo()))
        return context

    def sendQuery(self,QueryType):
        context = self.getContext(QueryType)
        queryResult = context.executeDoQuery()
        return  queryResult