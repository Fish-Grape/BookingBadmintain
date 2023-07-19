import requests
from Resource.URLClass import URLClass
from Utility.ParamHelper import ParamHelper
import json
from Model.Enum import QueryType

class BookingService:
    paramHelper = ParamHelper()

    def QuerySrvInfo(self):
        paramResult = self.paramHelper.getParams(QueryType.SrvInfo);
        header = self.paramHelper.getHeaders(paramResult["signature"], paramResult["_time"], paramResult["nonce"]);
        response = requests.get(URLClass.querySrvInfo + str(paramResult["_time"]), headers=header)
        print(response.text)
        ResponseDic = json.loads(response.text)
        if(ResponseDic['code'] == 200):
            print("QuerySrvInfo successs")
            return ResponseDic['data']['serverTime']
        else:
            print(str.format("QuerySrvInfo fail! msg:{0}", ResponseDic['msg']))
        return ResponseDic

    def QuerySalesItemList(self,ServerTime):
        paramResult = self.paramHelper.getParams(QueryType.SalesItemList)
        timeSpan = self.paramHelper.getTimeSpan()
        print(timeSpan)
        header = self.paramHelper.getHeaders(paramResult["signature"], timeSpan, paramResult["nonce"]);
        response = requests.get(URLClass.getSalesItemList + str(paramResult["_time"]), headers=header)
        print(response.text)
        ResponseDic = json.loads(response.text)
        if(ResponseDic['code'] == 0):
            print("QuerySalesItemList successs")
        else:
            print(str.format("QuerySalesItemList fail! msg:{0}",ResponseDic['msg']))
        return ResponseDic