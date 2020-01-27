
movies_watched = {"The Matrix", "Green Book", "Her"}
user_movie = input("Enter something you've watched recently: ")

if user_movie in movies_watched: 
    print(f"I've watched {user_movie} too!")
else:
    print("I haven't watched that yet")    

#2 (Game to guess a number selected):

number = 7
user_input = input("Enter 'y' if you would like to play: ").lower()

if user_input == "y":
    user_number = int(input("Guess our number: "))
    if user_number == number:
        print("You guessed correctly!")
    else:
        print("Sorry, it's wrong!")

#3 (Game to guess a number selected; with different input options):

number = 7
user_input = input("Enter 'y' if you would like to play: ").lower()

if user_input in ("y", "Y"):
    user_number = int(input("Guess our number: "))
    if user_number == number:
        print("You guessed correctly!")
    else:
        print("Sorry, it's wrong!")

#4 (Game to guess a number selected; with hints):

number = 7
user_input = input("Enter 'y' if you would like to play: ").lower()

if user_input == "y":
    user_number = int(input("Guess our number: "))
    if user_number == number:
        print("You guessed correctly!")
    elif number - user_number in (1, -1):
         print("You were off by one.") 
    else:
        print("Sorry, it's wrong!")

#5 (Game to guess a number selected; with hints..using absolute values):

number = 7
user_input = input("Enter 'y' if you would like to play: ").lower()

if user_input == "y":
    user_number = int(input("Guess our number: "))
    if user_number == number:
        print("You guessed correctly!")
    elif abs(number - user_number)  == 1:
         print("You were off by one.") 
    else:
        print("Sorry, it's wrong!")

