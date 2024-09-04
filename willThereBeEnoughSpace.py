def enough(cap, on, wait):
    # Your code here
    '''
    @param: cap - amount of people the bus can hold excluding the driver.
    @param on - the number of people on the bus excluding the driver.
    @param wait -  the number of people waiting to get on to the bus excluding the driver.
    @return : datatype - num
    Use conditionals
        if there is enough space return 0
        if there is not enough space return "the number of passagers the driver cant take"
    ''' 
    print("this is the cap: ", cap)
    print("this is on :", on)
    print("this is the wait :", wait )
    remainder = on + wait - cap
    print("this is the remainder to get on the bus :", remainder)
    if remainder > 0:  # Not enough space, return the number of people who can't get on the bus
        return remainder
    else: # there is enough space on the bus
        return 0