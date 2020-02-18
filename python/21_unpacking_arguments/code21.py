# Example 1:

def multiply(*args):
    print(args)
    total = 1
    for arg in args:
        total = total * arg

    return total

print((multiply)(1, 3, 5))  

# Example 2 (can call the function with 1 argument):

def multiply(*args):
    print(args)
    total = 1
    for arg in args:
        total = total * arg

    return total

print((multiply)(-1))  

# Example 3 (destructuring - passes one value for each parameter):

def add(x, y):
    return x + y

nums = [3, 5]
print(add(*nums))    

# Example 4:
def add(x, y):
    return x + y

nums = {"x": 15, "y": 25}
print(add(nums["x"], nums["y"])) 

# this does the same thing:
print(add(x=nums["x"], y=nums["y"])) 

# this too, does the same thing:
print(add(**nums)) 

# Example 5:

def multiply(*args):
    print(args)
    total = 1
    for arg in args:
        total = total * arg

    return total

def apply(*args, operator):
    if operator == "*":
        return multiply(*args)
    elif operator == "+":
        return sum(args)
    else:
        return "No valid operator provided to apply()"

print(apply(1, 3, 6, 7, operator="*"))  



