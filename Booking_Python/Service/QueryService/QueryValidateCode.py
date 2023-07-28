from Model.Enum import IndexType
from Service.QueryService.BaseService import BaseService
import requests
from Resource.URLClass import URLClass
import json

class QueryValidateCode(BaseService):
    configObj_D = None

    def doQuery(self):
        # response_d = self.sendD()
        # if(response_d[0] == 200):
        #     print('Send d success!')
        #     response_b = self.sendB(response_d)
        #     if(response_b[0] == 200):
        #         print('Send b success!')
        self.sendGetRef()


    def sendGetRef(self):
        data = {
            'referer': 'https://lhqkl.ydmap.cn/user/login',
            'zoneId': 'CN31',
            'acToken': '9ca17ae2e6ffcda170e2e6eeb0b35f85a68caef45bf7a88fa7c85e829e9b86d874fbbaaeb4b640b4ba8399f42af0feaec3b92aa1aaa0afdb42a98e9b9bf64a978a9bb7d54aa39f0094e16f9b9d9bd0e150f8e7eecda180e2e6ee91d669ad8f89b4b873b6879694ae4bf7a78b82f83483e3f3c300',
            'id': '0908c3b5498d40ed8e17328b88a7d6a9',
            'fp': '8ERJdGwR/Iv1/u6e2Z11mNYHuvf/2Bzl3vJ5IQm+GPqV1lv+ZEXl5q4y5tHiIPt4RMwzpdJfIUxJwjnhqLG/w8TYdCiAjTYMW5ox3gmU9v7mtw6UzZnNbzOPTpicRQ+ceNeus/R1Ioj+g6tyc7iiOg3AuCHSETok/oOpesCJMhbEZL1A:1690527369844',
            'https': 'true',
            'type': 'undefined',
            'version': '2.21.5',
            'dpr': '1',
            'dev': '1',
            'cb': 'YeJ5RMuytQ+CBcgsAL9uqeoZ/IqSiEyk+OnZpNSBAAxriYKqpNHxsuTGDHbDb8Zs',
            'ipv6': 'false',
            'runEnv': '10',
            'group': '',
            'scene': '',
            'lang': 'zh-CN',
            'sdkVersion': 'undefined',
            'width': '0',
            'audio': 'false',
            'sizeType': '10',
            'smsVersion': 'v3',
            'token': '',
            'callback': '__JSONP_gxfllly_0'
        }

        result = '&'.join([f'{key}={value}' for key, value in data.items()])
        print(result)

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

    def getConfig(self):
        header = self.paramHelper.getBaseHeaders();
        referer = 'https://lhqkl.ydmap.cn/user/login'
        id = '0908c3b5498d40ed8e17328b88a7d6a9'
        runEnv = 10
        loadVersion = '2.2.7'
        callback = '__JSONP_nddsqc9_0'
        urlFormat = str.format(URLClass.validateConfig, referer, id, runEnv, loadVersion, callback)
        response = requests.get(urlFormat, headers=header)
        responseDic = self.getResponse(response.text)
        return responseDic

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
