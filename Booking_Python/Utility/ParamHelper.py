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
        jsFile = self.getJsFileName(QueryType.SalesItemList)
        with open(jsFile, "r") as f:
            js_code = f.read()
        ctx = execjs.compile(js_code)
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

    def getValidateParam(self,configObj):
        jsFile = self.getJsFileName(QueryType.ValidateCode)
        with open(jsFile, "r") as f:
            js_code = f.read()
        ctx = execjs.compile(js_code)
        result = ctx.call("StartD", configObj)
        return result