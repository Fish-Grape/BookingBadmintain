from Service.QueryService.BaseService import BaseService
import requests
from Resource.URLClass import URLClass
import json

class QueryValidateCode(BaseService):
    def doQuery(self):
        configResponse = self.getConfig()
        pnResponse = self.getPn(configResponse['data']['ac']['pn'])

        configObj_D = self.convetToConfigObj(configResponse,pnResponse)
        print(configObj_D)
        param_d = self.paramHelper.getValidateParam(configObj_D)
        print(param_d)

    def sendD(self):
        header = self.paramHelper.getBaseHeaders();
        referer = 'https://lhqkl.ydmap.cn/user/login'
        id = '0908c3b5498d40ed8e17328b88a7d6a9'
        runEnv = 10
        loadVersion = '2.2.7'
        callback = '__JSONP_nddsqc9_0'
        urlFormat = str.format(URLClass.validateD, referer, id, runEnv, loadVersion, callback)
        data = {

        }
        response = requests.post(urlFormat, headers=header,data = data)

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
        }
        return  obj

    def getConfig(self):
        header = self.paramHelper.getBaseHeaders();
        referer = 'https://lhqkl.ydmap.cn/user/login'
        id = '0908c3b5498d40ed8e17328b88a7d6a9'
        runEnv = 10
        loadVersion = '2.2.7'
        callback = '__JSONP_nddsqc9_0'
        urlFormat = str.format(URLClass.validateConfig, referer, id, runEnv, loadVersion, callback)
        response = requests.get(urlFormat, headers=header)
        text = self.getResponse(response.text)
        ResponseDic = json.loads(text)
        return ResponseDic

    def getPn(self,pn):
        header = self.paramHelper.getBaseHeaders();
        cb = '__wmjsonp_04b82af0'
        t = self.paramHelper.getTimeSpan()
        urlFormat = str.format(URLClass.validatePn, pn, cb, t)
        response = requests.get(urlFormat, headers=header)
        text = self.getResponse(response.text)
        ResponseDic = json.loads(text)
        return ResponseDic

    def getResponse(self,json_str):
        start = json_str.index('{')
        end = json_str.rindex('}') + 1
        result = json_str[start:end]
        print(result)
        return result
