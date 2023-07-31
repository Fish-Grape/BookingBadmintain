from Model.Enum import IndexType
from Service.QueryService.BaseService import BaseService
import requests
from Resource.URLClass import URLClass
import json
from functools import lru_cache
from Utility.FileHelper import FileHelper


class QueryValidateCode(BaseService):
    configObj_D = None

    def doQuery(self):
        # fileHelper = FileHelper()
        # fileHelper.identify_gap('Image/74053a4d879b40c487a0534b655ae2c2.jpg','Image/7af21e51acf94e779606d2f43935ff57.png','Image/out.png')
        response_d = self.sendD()
        if(response_d[0] == 200):
            print('Send d success!')
            response_b = self.sendB(response_d)
            if(response_b[0] == 200):
                print('Send b success!')
                response_ref = self.sendGetRef()
                if(response_ref['msg'] =='ok'):
                    print('Send refer success!')
                    data = response_ref['data']
                    self.paramHelper.getValidate_gap(data)
    def sendCheck(self):
        print()

    def sendGetRef(self):
        header = self.paramHelper.getBaseHeaders();
        param = self.paramHelper.getValidateParam_ref(self.configObj_D)
        urlFormat = URLClass.validateRefer + param
        print('url:'+urlFormat)
        response = requests.get(urlFormat, headers=header)
        responseDic = self.getResponse(response.text)
        return responseDic

    def sendB(self,response_d):
        self.configObj_D['WM_TID'] = response_d[2]
        self.configObj_D['WM_DID'] = response_d[3]
        self.configObj_D['WM_NI'] = response_d[5]
        param_b = self.paramHelper.getValidateParam_b(self.configObj_D)
        header = self.paramHelper.getBaseHeaders();
        print(param_b)
        response = requests.post(URLClass.validateB, headers=header, data=param_b)
        responseDic = self.getResponse(response.text, IndexType.NormalBrackets)
        arr = json.loads(responseDic.replace('(', '').replace(')', ''))
        return arr

    @lru_cache(maxsize=128)
    def sendD(self):
        header = self.paramHelper.getBaseHeaders();
        configResponse = self.getConfig()
        pnResponse = self.getPn(configResponse['data']['ac']['pn'])
        self.configObj_D = self.convetToConfigObj(configResponse, pnResponse)
        param_d = self.paramHelper.getValidateParam_d(self.configObj_D)
        print(param_d)
        response = requests.post(URLClass.validateD, headers=header,data = param_d)
        responseDic = self.getResponse(response.text, IndexType.NormalBrackets)
        arr = json.loads(responseDic.replace('(', '').replace(')', ''))
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

    @lru_cache(maxsize=128)
    def getConfig(self):
        header = self.paramHelper.getBaseHeaders();
        runEnv = 10
        loadVersion = '2.2.7'
        callback = self.paramHelper.getParam_callBack()
        urlFormat = str.format(URLClass.validateConfig, URLClass.referer_login, URLClass.param_id, runEnv, loadVersion, callback)
        response = requests.get(urlFormat, headers=header)
        responseDic = self.getResponse(response.text)
        return responseDic

    @lru_cache(maxsize=128)
    def getPn(self,pn):
        header = self.paramHelper.getBaseHeaders()
        cb = self.paramHelper.getValidate_cb()
        t = self.paramHelper.getTimeSpan()
        urlFormat = str.format(URLClass.validatePn, pn, cb, t)
        response = requests.get(urlFormat, headers=header)
        responseDic = self.getResponse(response.text)
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
