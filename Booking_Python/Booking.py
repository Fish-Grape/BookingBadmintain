import requests
import subprocess
from urllib.parse import urlparse, parse_qs

def get_url_parameter(url, param_name):
    """
    从URL中获取指定参数的值
    """
    parsed_url = urlparse(url)
    query_params = parse_qs(parsed_url.query)
    return query_params.get(param_name, [None])[0]


def get_params():
    result = subprocess.check_output(['node', 'app.js'])
    url = result.decode()
    print(url)
    nonce = get_url_parameter(url, 'nonce')
    _time = get_url_parameter(url, 'timestamp')
    signature = get_url_parameter(url, 'signature')
    param = {
        "nonce":nonce,
        "_time":_time,
        "signature":signature
    }
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
    "x-requested-with": "XMLHttpRequest",
    "cookie": "Hm_lvt_2e26229fff5c7d4d4029787caaf3d50b=1689249119,1689337380,1689380715; Hm_lpvt_2e26229fff5c7d4d4029787caaf3d50b=1689383598",
    "Referer": "https://lhqkl.ydmap.cn/booking/schedule/103909?salesItemId=102914",
    "Referrer-Policy": "strict-origin-when-cross-origin"
    }
    return headers;


param_result =get_params();
params = {
    "_time":param_result["_time"]
}

header = get_headers(param_result["signature"], param_result["_time"], param_result["nonce"]);

response = requests.get('https://lhqkl.ydmap.cn/v2/querySrvInfo.do', params=params, headers=header)

print(response.text)


