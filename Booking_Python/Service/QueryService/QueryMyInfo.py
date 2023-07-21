from Service.QueryService.BaseService import BaseService
import requests
from Resource.URLClass import URLClass
import json

class QueryMyInfo(BaseService):
    def doQuery(self):
        now = self.paramHelper.getTimeSpan()
        paramResult = self.requestHelper.getSingatureWithArg()
        header = self.paramHelper.getHeaders(paramResult["signature"], str(paramResult["_time"]), paramResult["nonce"]);
        response = requests.get(URLClass.myInfo + str(now), headers=header)
        print(response.text)
        ResponseDic = json.loads(response.text)
        if (ResponseDic['code'] == 0):
            print("QueryMyInfo successs")
        else:
            print(str.format("QueryMyInfo fail! msg:{0}", ResponseDic['msg']))
        return ResponseDic