from cachetools import TTLCache

class CacheClass:
    cache = {
        'response_d': None,
        'response_config': None,
        'response_pn': None,
        "index": 0
    }
    def __int__(self):
        cache = TTLCache(maxsize=1000, ttl=600)

    def clearCache(self):
        cache = {
            'response_d': None,
            'response_config': None,
            'response_pn': None,
            "index": 0
        }
