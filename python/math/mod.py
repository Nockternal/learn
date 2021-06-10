def modular(x,y):
    return x % y
def multiplicativeInverse(x,y):
    z = modular(x,y)
    a = z**(y-2)
    return modular(a,y)


#straight forward modular 
#print(modular(42,12))

# plus
#print(modular((28+14),12))

# minus
#print(modular((28-14),12))

# multiplt
#print(modular((11*28),12))
# this above is equal to below
#print(modular(11,12)*modular(28,12))
#print(modular(44,12))

#division
# 6 / 2 mod 7
#print(modular(6*(2^-1),7))

# multiplicative inverse of 
# 38^-1 mod 7
#print(multiplicativeInverse(38,7))

#####################################
#print(modular((7+36),36))
#print(modular((-26),8))
print("---------------")
print(multiplicativeInverse(38,7))
print(multiplicativeInverse(2,4))
print(modular((38*5),7))
print(modular((3*5),7))
