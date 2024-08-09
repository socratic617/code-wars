def goals(laLiga, copaDelRey, championsLeague):
    total_goals = laLiga+copaDelRey+championsLeague
    print("This is La liga goals : ", laLiga)
    print("This is copaDelRey goals : ", copaDelRey) 
    print("This is championsLeague goals : ", championsLeague)
    print("This is the total goals : ", total_goals) 
    
    return total_goals

#Solution # 2 using args which is a tuple solution which is a concept used in oop taking all parent classes and in this case using the sum method

def goals(*args):
   return sum(args)