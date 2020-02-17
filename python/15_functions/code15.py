# exmple 1:
def hello():
    print("Hello!")

hello() 

# example 2:

def user_age_in_seconds():
    user_age = int(input("Enter your age: "))
    age_seconds = user_age * 365 * 24 * 60 * 60
    print(f"Your age in seconds is {age_seconds}.")

print("Welcome to the age in seconds program!")
user_age_in_seconds()    

print("Goodbye!")

# example 3 (This works!):

def add_friend():
    friends.append("Rolf")

friends = []
add_friend()

print(friends) #[Rolf]