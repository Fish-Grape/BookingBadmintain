import requests
import subprocess

params = {
    '_time': '1689213628900',
}

header = {

}

# response = requests.get('https://lhqkl.ydmap.cn/v2/querySrvInfo.do', params=params, headers=header)

# print(response.text)


result = subprocess.check_output(['node', 'app.js'])
print(result.decode())

