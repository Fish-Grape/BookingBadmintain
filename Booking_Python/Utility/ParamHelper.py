import re
import time
from Model.Enum import QueryType
import execjs
from Resource.URLClass import URLClass
from Utility.FileHelper import FileHelper

class ParamHelper:
    def __init__(self):
        pass

    def getJsFileName(self,argument):
        switcher = {
            QueryType.SrvInfo: "srvInfo.js",
            QueryType.SalesItemList: "QuerySalesItem.js",
            QueryType.ValidateCode: "Validate.js",
            QueryType.CoreV2: "CoreV2.js",
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
        ctx = self.getJSctx(QueryType.SrvInfo)
        result = ctx.call("Get_signature")
        return self.handleParam(result)

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
        with open(jsFile, "rb") as f:
            js_code = f.read().decode('utf-8')
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

    def getParam_callBack(self):
        ctx = self.getJSctx(QueryType.ValidateCode)
        callback = ctx.call("Get_callBack")
        return callback

    def getValidateParam_ref(self,configObj):
        data = {
            'referer': URLClass.referer_login,
            'zoneId': 'CN31',
            'acToken': '',
            'id': URLClass.param_id,
            'fp': '',
            'https': 'true',
            'type': 'undefined',
            'version': '2.21.5',
            'dpr': '1',
            'dev': '1',
            'cb': '',
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
            'callback': ''
        }
        ctx = self.getJSctx(QueryType.ValidateCode)
        data['callback'] = ctx.call("Get_ref_callBack")
        data['acToken'] = ctx.call("Get_acToken", configObj['WM_DID'])
        ctx = self.getJSctx(QueryType.CoreV2)
        data['cb'] = ctx.call("Get_cb")
        data['fp'] = ctx.call("Get_fp")
        result = '&'.join([f'{key}={value}' for key, value in data.items()])
        return result

    def getValidateParam_check(self,data):
        param = {
            'referer': URLClass.referer_login,
            'zoneId': 'CN31',
            'id': URLClass.param_id,
            'token': '',
            'acToken': 'undefined',
            'data': {"d":"","m":"","p":"OTW2AMth8pgLCw\\vqIiHTzPjz/vbmUZYha5T9p33","ext":"nSmcCSfMDZJLaTF0umBMvd4dnVlgxYK5"},
            'width': '640',
            'type': '2',
            'version': '2.21.5',
            'cb': '',
            'extraData': '',
            'bf': '0',
            'runEnv': '10',
            'sdkVersion': 'undefined',
            'callback': ''
        }
        gap_width = self.getValidate_gap(data)
        ctx = self.getJSctx(QueryType.ValidateCode)
        param['callback'] = ctx.call("Get_callBack")
        param['token'] = data['token']
        ctx = self.getJSctx(QueryType.CoreV2)
        param['cb'] = ctx.call("Get_cb")
        data_param = {
            'token':data['token'],
            'width':gap_width
        }
        param['data'] = ctx.call("Get_data",data_param)
        result = '&'.join([f'{key}={value}' for key, value in param.items()])
        print(result)
        return result

    def getValidate_gap(self,data):
        fileHelper = FileHelper()
        img_bg = fileHelper.downloadFileByURL(data['bg'][0])
        img_front = fileHelper.downloadFileByURL(data['front'][0])
        gap = fileHelper.identify_gap(img_bg,img_front,'Image/out.png')
        print('缺口距离为：' + gap)
        return gap