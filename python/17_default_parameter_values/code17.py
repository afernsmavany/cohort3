def add(x, y=8):
    print(x + y)

add(5)
# this also works => add(x=5)    

# example 2:
default_y = 3

def add(x, y=default_y):
    sum = x + y
    print(sum)

add(2)

default_y = 4
add(2)