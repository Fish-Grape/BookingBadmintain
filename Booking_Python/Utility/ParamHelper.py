import subprocess
import re
import time
from Model.Enum import QueryType
import execjs

class ParamHelper:
    def __init__(self):
        pass

    def getJsFileName(self,argument):
        switcher = {
            QueryType.SrvInfo: "srvInfo.js",
            QueryType.SalesItemList: "QuerySalesItem.js",
            QueryType.ValidateCode: "Validate.js",
        }
        filePath = 'JS/' + switcher.get(argument, "srvInfo.js")
        return filePath

    def handleParam(self,string):
        nonce = re.search(r'nonce=(\w+)', string).group(1)
        timestamp = re.search(r'timestamp=(\d+)', string).group(1)
        signature = re.search(r'signature=(\w+)', string).group(1)
        param = {
            "nonce": nonce,
            "_time": timestamp,
            "signature": signature
        }
        print(param)
        return param

    def getSingature(self):
        jsFile = self.getJsFileName(QueryType.SrvInfo)
        result = subprocess.check_output(['node', jsFile])
        string = result.decode()
        return self.handleParam(string)

    def getSingatureWithArg(self,now,duration):
        ctx = self.getJSctx(QueryType.SalesItemList)
        result = ctx.call("Start", now, duration)
        return self.handleParam(result)


    def getHeaders(self,signature,timestamp,nonce):
        headers = {
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9",
            "access-token": "",
            "cache-control": "no-cache",
            "entry-tag": "",
            "nonce": nonce,
            "openid-token": "",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "signature": signature,
            "timestamp": timestamp,
            "x-requested-with": "XMLHttpRequest"
        }
        return headers;

    def getBaseHeaders(self):
        headers = {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "script",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "cross-site"
        }
        return headers;

    def getTimeSpan(self):
        _timestamp = int(time.time() * 1000)
        return  _timestamp;

    def getJSctx(self,type):
        jsFile = self.getJsFileName(type)
        with open(jsFile, "r") as f:
            js_code = f.read()
        ctx = execjs.compile(js_code)
        return ctx

    def getValidateParam_d(self,configObj):
        ctx = self.getJSctx(QueryType.ValidateCode)
        result = ctx.call("StartD", configObj)
        return result

    def getValidateParam_b(self,configObj):
        ctx = self.getJSctx(QueryType.ValidateCode)
        result = ctx.call("StartB", configObj)
        return result

    def getValidate_cb(self):
        ctx = self.getJSctx(QueryType.ValidateCode)
        result = ctx.call("Get_cb")
        return result

    def getValidateParam_ref(self,configObj):
        data = {
            'referer': 'https://lhqkl.ydmap.cn/user/login',
            'zoneId': 'CN31',
            'acToken': '',
            'id': '0908c3b5498d40ed8e17328b88a7d6a9',
            'fp': '',
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
        ctx = self.getJSctx(QueryType.ValidateCode)
        result = ctx.call("StartB", configObj)
        return result