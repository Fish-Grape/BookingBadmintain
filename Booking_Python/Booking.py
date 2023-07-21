from Model.Enum import QueryType
from Service.BookingService import BookingService
import subprocess
import execjs


bookingService = BookingService();
#bookingService.QuerySrvInfo()

bookingService.Main()

