import requests
import subprocess
import re
import time

def get_params():
    result = subprocess.check_output(['node', 'app.js'])
    string = result.decode()
    nonce = re.search(r'nonce=(\w+)', string).group(1)
    timestamp = re.search(r'timestamp=(\d+)', string).group(1)
    signature = re.search(r'signature=(\w+)', string).group(1)
    param = {
        "nonce":nonce,
        "_time":timestamp,
        "signature":signature
    }
    print(param)
    return param

def get_headers(signature,timestamp,nonce):
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


# param_result =get_params();

# _timestamp =str(int(time.time() * 1000))

# header = get_headers(param_result["signature"], param_result["_time"], param_result["nonce"]);
# response = requests.get('https://lhqkl.ydmap.cn/v2/querySrvInfo.do?_time=' + str(param_result["_time"]), headers=header)

# print(response.text)



result = subprocess.check_output(['node', 'app.js'])
string = result.decode()