from Model.Enum import IndexType
from Service.QueryService.BaseService import BaseService
import requests
from Resource.URLClass import URLClass
import json
from Utility.CacheClass import CacheClass

class QueryValidateCode(BaseService):
    configObj_D = None
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

    def sendCheck(self,response_ref):
        header = self.paramHelper.getBaseHeaders();
        data = response_ref['data']
        param = self.paramHelper.getValidateParam_check(data)
        urlFormat = URLClass.validateCheck + param
        response = requests.get(urlFormat, headers=header)
        self.addCBIndex()
        responseDic = self.getResponse(response.text)
        return responseDic

    def addCBIndex(self):
        index=CacheClass.cache['index']
        index +=1
        CacheClass.cache['index'] = index
        self.cacheClass.updateCache(CacheClass.cache)

    def sendGetRef(self):
        header = self.paramHelper.getBaseHeaders();
        param = self.paramHelper.getValidateParam_ref(self.configObj_D)
        urlFormat = URLClass.validateRefer + param
        response = requests.get(urlFormat, headers=header)
        responseDic = self.getResponse(response.text)
        self.addCBIndex()
        return responseDic

    def sendB(self,response_d):
        self.configObj_D['WM_TID'] = response_d[2]
        self.configObj_D['WM_DID'] = response_d[3]
        self.configObj_D['WM_NI'] = response_d[5]
        param_b = self.paramHelper.getValidateParam_b(self.configObj_D)
        header = self.paramHelper.getBaseHeaders();
        # print('param_b:' + str(param_b))
        response = requests.post(URLClass.validateB, headers=header, data=param_b)
        responseDic = self.getResponse(response.text, IndexType.NormalBrackets)
        arr = json.loads(responseDic.replace('(', '').replace(')', ''))
        return arr

    def sendD(self):
        if(CacheClass.cache['response_d'] != None):
            self.configObj_D = CacheClass.cache['configObj_D']
            return CacheClass.cache['response_d']
        header = self.paramHelper.getBaseHeaders();
        configResponse = self.getConfig()
        pnResponse = self.getPn(configResponse['data']['ac']['pn'])
        self.configObj_D = self.convetToConfigObj(configResponse, pnResponse)
        param_d = self.paramHelper.getValidateParam_d(self.configObj_D)
        print('param_d:' + str(param_d))
        response = requests.post(URLClass.validateD, headers=header,data = param_d)
        responseDic = self.getResponse(response.text, IndexType.NormalBrackets)
        arr = json.loads(responseDic.replace('(', '').replace(')', ''))

        CacheClass.cache['response_d'] = arr
        CacheClass.cache['configObj_D'] = self.configObj_D
        self.cacheClass.updateCache(CacheClass.cache)
        return arr

    # // WM_NIKE = getconf_response.data.ac.token
    # // bid = getconf_response.data.ac.bid
    # // pn = getconf_response.data.ac.pn
    # // WM_DIV = pn_response.result.luv + __1690004273686__1689932273686
    # // WM_TID = d_response[2]
    # // WM_DID = d_response[3]  + __1690004272469__1689932272469
    # // WM_NI =  d_response[5]
    def convetToConfigObj(self,config,pn):
        obj = {
            'bid':config['data']['ac']['bid'],
            'pn':config['data']['ac']['pn'],
            'WM_DID':'',
            'WM_TID':'',
            'v':pn['result']['v'],
            'luv': pn['result']['luv'],
            'WM_NI':''
        }
        return  obj

    def getConfig(self):
        header = self.paramHelper.getBaseHeaders();
        runEnv = 10
        loadVersion = '2.2.7'
        callback = self.paramHelper.getParam_callBack()
        urlFormat = str.format(URLClass.validateConfig, URLClass.referer_login, URLClass.param_id, runEnv, loadVersion, callback)
        response = requests.get(urlFormat, headers=header)
        responseDic = self.getResponse(response.text)
        return responseDic

    def getPn(self,pn):
        if (CacheClass.cache['response_pn'] != None):
            return CacheClass.cache['response_pn']
        header = self.paramHelper.getBaseHeaders()
        cb = self.paramHelper.getValidate_cb()
        t = self.paramHelper.getTimeSpan()
        urlFormat = str.format(URLClass.validatePn, pn, cb, t)
        response = requests.get(urlFormat, headers=header)
        responseDic = self.getResponse(response.text)
        CacheClass.cache['response_pn'] = responseDic
        self.cacheClass.updateCache(CacheClass.cache)
        return responseDic

    def getResponse(self,json_str,index = IndexType.CurlyBrackets):
        idxStart = '{'
        idxEnd = '}'
        if(index == IndexType.NormalBrackets):
            idxStart = '('
            idxEnd = ')'
        start = json_str.index(idxStart)
        end = json_str.rindex(idxEnd) + 1
        result = json_str[start:end]
        print(result)
        if(index == IndexType.CurlyBrackets):
            result = json.loads(result)
        return result
