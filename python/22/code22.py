# Example 1(packing a dictionary into named arguments):

def named(**kwargs):
    print(kwargs)

named(name="Bob", age=25)  

# Example 2 (unpacking a dictionary into named arguments):

def named(name, age):
    print(name, age)

details = {"name": "Bob", "age": 25}

named(**details)

# Example 3:

def named(**kwargs):
    print(kwargs)

details = {"name": "Bob", "age": 25}

named(**details)

# Example 4:

def named(**kwargs):
    print(kwargs)

def print_nicely(**kwargs):
    named(**kwargs)
    for arg, value in kwargs.items():
        print(f"{arg}: {value}")

print_nicely(name="Bob", age=25)

# Example 5:
def both(*args, **kwargs):
    print(args)
    print(kwargs)

both(1, 3, 5, name="Bob", age=25)   

# Example 6:
def myfunction(**kwargs):
    print(kwargs)

myfunction(**Bob) # Error; must use map
myfunction(**None) # Error     
