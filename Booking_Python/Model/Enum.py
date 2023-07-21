from enum import Enum

# 创建枚举类型
class QueryType(Enum):
    SrvInfo = 1
    SalesItemList = 2
    MyInfo = 3
    ValidateGetConf = 4
    ValidatePn = 5
    ValidateD = 6
    ValidateB = 7
    ValidateReferer = 8
    ValidateCode = 9