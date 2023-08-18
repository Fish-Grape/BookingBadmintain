from Model.Enum import IndexType
from Service.QueryService.BaseService import BaseService
import requests
from Resource.URLClass import URLClass
import json
from Utility.CacheClass import CacheClass

class LoginService(BaseService):
    cacheClass = CacheClass()
    mobile = '18672905502'
    pwd = 'OR123456'
    validate = None

    def doQuery(self):
        CacheClass.cache = self.cacheClass.readCache()
        if CacheClass.cache['validate'] is None:
            print('No validate cache!')
            return None

        duration = CacheClass.cache['duration']
        if duration is None:
            duration = self.requestHelper.getDurationTime()
        loginWithMobile = {
            'mobile':self.mobile,
            'pwd': self.pwd,
            'validate': CacheClass.cache['validate'],
        }
        paramResult = self.paramHelper.getLoginSingature(loginWithMobile, duration)
        paramSignature = paramResult[0]
        header = self.paramHelper.getHeaders(paramSignature["signature"], paramSignature["_time"], paramSignature["nonce"])
        header['Content-Type'] = 'application/json'
        paramBody = {
            'loginType':0,
            'loginWithMobile': paramResult[1]
        }
        json_data = json.dumps(paramBody)
        print(duration)
        print(header)
        print(URLClass.loginByAfs)
        response = requests.post(URLClass.loginByAfs, headers=header, data=json_data)
        print(response.text)


