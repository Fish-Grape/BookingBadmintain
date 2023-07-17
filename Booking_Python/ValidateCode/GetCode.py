import requests
import subprocess

# url = "https://ac.dun.163.com/v3/d"

# payload ={
#     "d":"/n9VVY5m4UapVqJ64zNjUsBLKSNsUx+akTwv1rO8i9huqX1yCHUCnNZvD32FHvnm6nzkmsrLikbrNYhnzNRduBl.KHWguBHAupSnBzNiMpsGcVBzVTvVkmkNK3m15TjmUTLFQ.Tl/mlRnqisF17dv1EOLUo8WtKWVqzmw6VxqJV6yva9EZZOt/J0ZYENnpwrY.wM5ZFbY8Lt3vVh7JmmKRAe6fGj8X5Rzw1QH7AZcL3XV5irWAwBbHEkE0XDMFMX0WyxVcW2R89we3pZT.SnW0raxo9wy50q7EHYOGJqyyUGGsfsyjf+FbLFMHByYXVfz3sog7ihK2pkvf/EgepYg5uAjsx5Jx8m0d./rg5eKq/IYm.lCZXSvBjMfZ/nrHnj+yWFdOdRx13EQq1tnTCBInnNiJd27axBwe1VeZ0UXWBVYH+r.dwhRJ8EGuKmjyv5bY2fvtXe7HqA7nNb2mk07RqJx1WOyc.a9O5q/yYYe1nu4poh5nhB7G3MQvXAMOzSwuVhl8EEXJ2tdyzgjjn8Mmj7WEcRYzNUs6bMSd4UodhVHbmYmhjjNF.lV/4A6e7S5YyiidUq6XmVSisx.z4gy7cTs7/HX/HXxd5m/Qj7FacpQhr0jIettoROKbDZZz/2OJFYjuVwAOHnEawI+NkFm90GpsX0pmm+AJW6cxUpxK1xmYJyA0LEroloq6ckZtzxI/Y2JKdMIkZEU0wkmz2AJ.kypRCCxK4dYtI4kz3uFA.axjK9v+bGHcY.etstkZLyt3l1F4.tDdcmw4eRe.h/ro3wEazQ3+aMbHQDJEQpMU4F01wtckiCRWzRD2W9bB3x+s/fj9g37HnGlHC/92Lo2LBe1ikP",
#     "v":"af2952a4",
#     "cb":"__wmjsonp_b2f7d11"
# }

# headers = {
#     "accept": "*/*",
#     "accept-language": "zh-CN,zh;q=0.9",
#     "cache-control": "no-cache",
#     "content-type": "application/x-www-form-urlencoded",
#     "pragma": "no-cache",
#     "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
#     "sec-ch-ua-mobile": "?0",
#     "sec-ch-ua-platform": "\"Windows\"",
#     "sec-fetch-dest": "empty",
#     "sec-fetch-mode": "cors",
#     "sec-fetch-site": "cross-site",
#     "referrer": "https://lhqkl.ydmap.cn/",
# }
# response = requests.post(url, headers=headers, data=payload, verify=True)

# print(response.content)


result = subprocess.check_output(['node', 'Validate.js'])
print(result.decode())