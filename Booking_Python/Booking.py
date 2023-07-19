from Service.BookingService import BookingService

bookingService = BookingService();
ServerTime=bookingService.QuerySrvInfo()

#bookingService.QuerySalesItemList(ServerTime)

# result = subprocess.check_output(['node', 'app.js'])
# string = result.decode()