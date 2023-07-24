from enum import Enum

# 创建枚举类型
class QueryType(Enum):
    SrvInfo = 1
    SalesItemList = 2
    MyInfo = 3
    ValidateCode = 4