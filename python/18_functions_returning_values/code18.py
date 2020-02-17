# example (functions return none):

def add(x, y):
    print(x + y)

add(5, 8) #13
result = add(5, 8) #13
print(result) #none


# example 2 (functions return none; nothing gets printed for below...
# because although we have returned something, we haven't printed anything):

def add(x, y):
   return x + y

add(5, 8)
# result = add(5, 8)
# print(result)


# example 3 (How to return 13...):

def add(x, y):
   return x + y

add(5, 8)
result = add(5, 8)
print(result) # 13

# example 4 (Below is wrong!!!):

def add(x, y):
   print(x + y)

print(add(5, 8))

#13
#none

# example 5 (Below is correct):

def add(x, y):
   print(x + y)
   return x + y

result = add(5, 8)
print(result)

#13
#13


#example 6:

def divide(dividend, divisor):
    if divisor != 0:
        return dividend / divisor
    else:
        return "You fool!"   

result = divide(15, 3)
print(result)

#example 7(this will print "You fool!"....5 times):

def divide(dividend, divisor):
    if divisor != 0:
        return dividend / divisor
    else:
        return "You fool!"   

result = divide(15, 0)*5
print(result)