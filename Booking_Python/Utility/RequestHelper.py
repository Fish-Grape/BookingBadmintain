import requests
from Resource.URLClass import URLClass
import json
from Utility.ParamHelper import ParamHelper

class RequestHelper:
    paramHelper = ParamHelper()

    def getServerTime(self):
        paramResult = self.paramHelper.getSingature();
        header = self.paramHelper.getHeaders(paramResult["signature"], paramResult["_time"], paramResult["nonce"]);
        response = requests.get(URLClass.querySrvInfo + str(paramResult["_time"]), headers=header)
        print(response.text)
        ResponseDic = json.loads(response.text)
        if (ResponseDic['code'] == 200):
            print("QuerySrvInfo successs")
            serverTime = ResponseDic['data']['serverTime']
            print('After QuerySrvInfo serverTime:' + str(serverTime))
            return serverTime
        else:
            print(str.format("QuerySrvInfo fail! msg:{0}", ResponseDic['msg']))
        return ResponseDic


    def getSingatureWithArg(self,url):
        now = self.paramHelper.getTimeSpan()
        serverTime = self.getServerTime()
        duration = now - serverTime
        print('Duration:' + str(duration))
        paramResult = self.paramHelper.getSingatureWithArg(url, duration)
        return paramResult