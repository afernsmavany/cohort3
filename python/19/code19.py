add = lambda x, y: x + y
print (add(5, 7))

# if unnamed, lambda function should be called in the same line:
print((lambda x, y: x + y)(5, 7))

# example 1:

def double(x):
    return x * 2

sequence = [1, 3, 5, 9]
# using list comprehension:
doubled = [double(x) for x in sequence]    

#alternative to above, using map:
doubled = map(double, sequence)

# example 2 (using lambda functions):

sequence = [1, 3, 5, 9]
doubled = [(lambda x: x * 2)(x) for x in sequence]    

#alternative using map:
doubled = list(map(lambda x: x * 2, sequence))