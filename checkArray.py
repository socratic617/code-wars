#Question:
'''
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
'''
#Solution: 
""" 
Goal: Check array "x" 
 Use two conditionals 
 if x has more then 1 or just 2 good idea return "Publish"
 else if x has more then 2 good idea return "I smell a series!"
 else return "Fail!"
"""

def well(x):
    # Count the number of 'good' ideas in the array
    good_count = x.count('good')
    
    # Determine the appropriate response based on the count of 'good' ideas
    if good_count == 1 or good_count == 2:
        return 'Publish!'
    elif good_count > 2:
        return 'I smell a series!'
    else:
        return 'Fail!'