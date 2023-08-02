import os
import json

class CacheClass:
    cache = {
        "response_d": None,
        "configObj_D": None,
        "response_pn": None,
        "index": 0
    }
    filePath = 'Cache/CacheFile.json'

    def clearCache(self):
        if os.path.exists(self.filePath):
            os.remove(self.filePath)
            print('缓存已删除')

    def initCache(self):
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