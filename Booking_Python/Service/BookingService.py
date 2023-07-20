import requests
from Resource.URLClass import URLClass
from Utility.ParamHelper import ParamHelper
import json
from Model.Enum import QueryType

class BookingService:
    paramHelper = ParamHelper()

    def QuerySrvInfo(self):
        paramResult = self.paramHelper.getSrvInfoParams(QueryType.SrvInfo);
        header = self.paramHelper.getHeaders(paramResult["signature"], paramResult["_time"], paramResult["nonce"]);
        response = requests.get(URLClass.querySrvInfo + str(paramResult["_time"]), headers=header)
        print(response.text)
        ResponseDic = json.loads(response.text)
        if(ResponseDic['code'] == 200):
            print("QuerySrvInfo successs")
            serverTime = ResponseDic['data']['serverTime']
            print('After QuerySrvInfo serverTime:' + str(serverTime))
            return serverTime
        else:
            print(str.format("QuerySrvInfo fail! msg:{0}", ResponseDic['msg']))
        return ResponseDic

    def QuerySalesItemList(self):
        serverTime = self.QuerySrvInfo()
        now = self.paramHelper.getTimeSpan()
        duration = now - serverTime
        print('Duration:' + str(duration))
        paramResult = self.paramHelper.getSalesItemParams(QueryType.SalesItemList, now, duration)
        header = self.paramHelper.getHeaders(paramResult["signature"], str(paramResult["_time"]), paramResult["nonce"]);
        response = requests.get(URLClass.getSalesItemList + str(now), headers=header)
        print(response.text)
        ResponseDic = json.loads(response.text)
        if(ResponseDic['code'] == 0):
            print("QuerySalesItemList successs")
        else:
            print(str.format("QuerySalesItemList fail! msg:{0}",ResponseDic['msg']))
        return ResponseDic