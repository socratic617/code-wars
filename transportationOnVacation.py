#Challenge

# After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

# You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

# Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

# Write a code that gives out the total amount for different days(d).

#Psuedo
    
    # $40 per day
    # $50 Discount if you rent the car for 7 days or more 
    # $20 Discount if you rent the car 3 days or more
    
    #Write a code that gives out the total amount for different days(d).
    
    #Return Datatype = int
    # conditional for 3 diff options

#Solution
def rental_car_cost(d):

    total = 0
    if(d < 3):
        total = d * 40
        return total
    elif(d > 6):
        total = d * 40 - 50
        return total
    elif(d >= 3 & d < 7):
        total = d * 40 - 20
        return total