def add(x, y):
    result = x + y
    print(result)

add(5,3)    


# example 2 (this won't work...as no parameters have been defined):
# def say_hellow():
#     print("Hello!")

# say_hellow("Bob")    


# example 3 (positional arguments):
def say_hello(name, surname):
    print(f"Hello, {name} {surname}")

say_hello("Bob", "Smith")   

# example 4 (keyword or named arguments):
def say_hello(name, surname):
    print(f"Hello, {name} {surname}")

say_hello(surname="Bob", name="Smith")    
