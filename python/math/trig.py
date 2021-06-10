import math
import numpy
from fractions import Fraction


def sin(deg):
    return round(math.sin(math.radians(deg)), 2)
def cos(deg):
    return round(math.cos(math.radians(deg)), 2)
def tan(deg):
    return round(math.tan(math.radians(deg)), 2)
# test and fix
def inverseSin(deg):
    return math.degrees(math.asin(deg))
def inverseCos(deg):
    return math.degrees(math.acos(deg))
def inverseTan(deg):
    return math.degrees(math.atan(deg))
######################

def sinright(deg = 0,opp = 0,hyp= 0):
    if hyp == 0:
        return round(opp/sin(deg), 3)
    elif opp == 0:
        return round(hyp*sin(deg), 3)
    elif deg == 0:
        return inverseSin(opp/hyp)
    
def cosright(deg = 0, add= 0,hyp= 0):
    if add == 0:
        return round(hyp*cos(deg), 3)
    elif hyp == 0:
        return round(add/cos(deg), 3)
    elif deg == 0:
        return inverseCos(add/hyp)
    
def tanright(deg = 0,opp= 0,add= 0):
    if add == 0:
        return round(opp/tan(deg), 3)
    elif opp == 0:
        return round(add*tan(deg), 3)
    elif deg == 0:
        return inverseTan(opp/add)

def pitagoras(a=0,b=0,c=0):
    if a and b > 0:
        return round(math.sqrt(a**2 + b**2), 3)
    if a and c > 0:
        return round(math.sqrt(c**2-a**2), 3)
    if b and c > 0:
        return round(math.sqrt(c**2-b**2), 3)

def findA(a,b,c):
    val = ((b**2)+(c**2)-(a**2))/(2*b*c)
    #return math.degrees(math.acos(val))
    return math.degrees(math.acos(val))
def findB(a,b,c):
    val = ((c**2)+(a**2)-(b**2))/(2*c*a)
    #return math.degrees(math.acos(val))
    return math.degrees(math.acos(val))
def findC(a,b,c):
    val = ((a**2)+(b**2)-(c**2))/(2*a*b)
    #return math.degrees(math.acos(val))
    return math.degrees(math.acos(val))

"""
print(sin(25))
print(cos(60))
print(tan(45))


a = 8
b = 6
c = 7
""""""
a = 5
b = 3
c = 4
"""
a = 7
b = 6
c = 4

print(inverseTan(c))
#angles from only having sides 
print("angle A = ",findA(a,b,c))
print("angle B = ",findB(a,b,c))
print("angle C = ",findC(a,b,c))
"""
# Pitagoras
print("Pitagoras C =",pitagoras(a,b))
print("Pitagoras C =",pitagoras(a=3,b=4))
print("Pitagoras B =",pitagoras(a=3,c=5))
print("Pitagoras A =",pitagoras(b=4,c=5))

# exampls  1 side and angle - sides a=number, b=number leave out missing

#print('sin - hyp = ',sinright(deg = 25, opp=5))
#print('sin - opp = ',sinright(deg = 25, hyp=12.083045973594572068282839266808))
print('sin - deg = ',sinright(opp = 3, hyp=5))

#print('cos - hyp = ',cosright(deg = 25, add=11))
#print('cos - add = ',cosright(deg = 25, hyp=12.083045973594572068282839266808))
print('cos - deg = ',cosright(add = 4, hyp=5))

#print('tan - add = ',tanright(deg = 25, opp=5))
#print('tan - opp = ',tanright(deg = 25, add=11))
print('tan - deg = ',tanright(opp = 3, add=5))
"""
print("Pitagoras C =",pitagoras(a=18,b=15))