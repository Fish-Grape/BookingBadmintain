from Model.Enum import IndexType
from Service.QueryService.BaseService import BaseService
import requests
from Resource.URLClass import URLClass
import json
from Utility.CacheClass import CacheClass

class LoginService(BaseService):
    cacheClass = CacheClass()

    def doQuery(self):
        CacheClass.cache = self.cacheClass.readCache()
        response_d = self.sendD()
        if(response_d[0] == 200):
            print('Send d success!')
            response_b = self.sendB(response_d)
            if(response_b[0] == 200):
                print('Send b success!')
                response_ref = self.sendGetRef()
                if(response_ref['msg'] =='ok'):
                    print('Send refer success!')
                    response_check = self.sendCheck(response_ref)
                    if response_check['data']['result'] == True:
                        print('Send check success!')
                        CacheClass.cache['response_check'] = response_check
                        self.cacheClass.updateCache(CacheClass.cache)
                        return response_check


