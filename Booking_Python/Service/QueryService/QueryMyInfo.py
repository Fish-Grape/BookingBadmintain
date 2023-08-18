import random
from Service.QueryService.BaseService import BaseService
import requests
from Resource.URLClass import URLClass
import json
import time

from Utility.CacheClass import CacheClass


class QueryMyInfo(BaseService):
    def doQuery(self):
        duration = self.requestHelper.getDurationTime()
        cacheClass = CacheClass()
        cacheClass.refreshDuration(duration)
        now = self.paramHelper.getTimeSpan()
        paramResult = self.paramHelper.getSingature(now,duration)
        url = URLClass.myInfo + str(now)
        header = self.paramHelper.getHeaders(paramResult["signature"], str(now + duration), paramResult["nonce"])
        response = requests.get(url, headers=header)
        ResponseDic = json.loads(response.text)
        if (ResponseDic['code'] == 0):
            print("QueryMyInfo successs")
        else:
            print(str.format("QueryMyInfo fail! msg:{0}", ResponseDic['msg']))
        return ResponseDic