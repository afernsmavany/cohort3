
#while loop:

number = 7
user_input = input("Would like to play? (Y/n) ")

while user_input != "n":
    user_number = int(input("Guess our number: "))
    if user_number == number:
        print("You guessed correctly!")
    elif abs(number - user_number)  == 1:
         print("You were off by one.") 
    else:
        print("Sorry, it's wrong!")

    user_input = input("Would like to play? (Y/n) ")


#while loop (option 2):

number = 7

while True:
    user_input = input("Would like to play? (Y/n) ")
  
    if user_input == "n":
        break

    user_number = int(input("Guess our number: "))
    if user_number == number:
        print("You guessed correctly!")
    elif abs(number - user_number)  == 1:
         print("You were off by one.") 
    else:
        print("Sorry, it's wrong!")

#for loop:

friends = ["Rolf", "Jen", "Bob", "Anne"]

for friend in friends:
    print(f"{friend} is my friend.")  

#for loop (2):

grades = [35, 67, 98, 100, 100]
total = 0
amount = len(grades)

for grade in grades:
    total += grade

print(total / amount)    

#another option (using sum function):

grades = [35, 67, 98, 100, 100]
total = sum(grades)
amount = len(grades)

print(total / amount)   

#Exercises:

# -- Part 1 --
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

evens = []
for number in numbers:
    if number % 2 == 0:
        evens.append(number)

# -- Part 2, must be completed before submitting! --
user_input = input("Enter your choice: ")
if user_input == "a":
    print("Add")
elif user_input == "q":
    print("Quit")