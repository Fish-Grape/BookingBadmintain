import os
import json
from datetime import datetime, date

class CacheClass:
    cache = {
        "response_d": None,
        "configObj_D": None,
        "response_pn": None,
        "index": 0,
        "token": None,
        "validate": None,
        "duration": None,
    }
    filePath = 'Cache/CacheFile.json'

    def clearCacheBeforeToday(self):
        # 指定目录路径和删除文件的最早日期
        dir_path = 'Cache/'
        earliest_date = datetime.now().date()

        # 遍历目录中的所有文件
        for filename in os.listdir(dir_path):
            file_path = os.path.join(dir_path, filename)
            # 检查文件修改时间是否早于最早日期
            if os.path.isfile(file_path) and os.path.getmtime(file_path) < datetime.combine(earliest_date,datetime.min.time()).timestamp():
                # 删除文件
                os.remove(file_path)
                print('缓存已删除')

    def clearCache(self):
        dir_path = 'Cache/'
        # 遍历目录中的所有文件
        for filename in os.listdir(dir_path):
            file_path = os.path.join(dir_path, filename)
            # 删除文件
            os.remove(file_path)
            print('缓存已删除')

    def clearValidate(self):
        self.readCache()
        self.cache['response_d'] = None
        self.cache['configObj_D'] = None
        self.cache['response_pn'] = None
        self.cache['index'] = 0
        self.updateCache(self.cache)

    def initCache(self):
        self.clearCacheBeforeToday()
        if os.path.exists(self.filePath):
            print('缓存已存在')
        else:
            with open(self.filePath, 'w') as f:
                json.dump(self.cache, f)

    def readCache(self):
        with open(self.filePath, 'r') as f:
            self.cache = json.load(f)
        return self.cache

    def updateCache(self,cacheObj):
        with open(self.filePath, 'w') as f:
            json.dump(cacheObj, f)

    def refreshDuration(self,duration):
        self.readCache()
        self.cache['duration'] = duration
        self.updateCache(self.cache)