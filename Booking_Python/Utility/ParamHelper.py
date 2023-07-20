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

    def getSrvInfoParams(self,type):
        jsFile = self.getJsFileName(type)
        result = subprocess.check_output(['node', jsFile])
        string = result.decode()
        return self.handleParam(string)

    def getSalesItemParams(self,type,now,duration):
        jsFile = self.getJsFileName(type)
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

    def getTimeSpan(self):
        _timestamp = int(time.time() * 1000)
        return  _timestamp;