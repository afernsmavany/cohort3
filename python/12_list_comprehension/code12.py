#creating a new list of values (doubled):

numbers = [1, 3, 5]
doubled = []

for num in numbers:
    doubled.append(num * 2)

#doing the same with list comprehension:

numbers = [1, 3, 5]
doubled = [num *2 for num in numbers]

# or alternately: 
numbers = [1, 3, 5]
doubled = [x *2 for x in numbers]

#example 2:

friends = ["Rolf", "Sam", "Samantha", "Saurabh", "Jen"]
starts_s = []

for friend in friends:
    if friend.startswith("S"):
        starts_s.append(friend)

print(starts_s)        

#example 2 with list comprehensions:

friends = ["Rolf", "Sam", "Samantha", "Saurabh", "Jen"]
starts_s = [friend for friend in friends if friend.startswith("S")]

print(starts_s) 

#example 3 (list comprehensions create a new list):

friends = ["Sam", "Samantha", "Saurabh"]
starts_s = [friend for friend in friends if friend.startswith("S")]

print(friends) 
print(starts_s) 

# returns false (because they are 2 different lists):
print(friends is starts_s) 

#The elements inside are the same, but the lists are not the same:
print(friends) 
print(starts_s) 
# returns true (as elements inside list are the same):
print(friends[0] is starts_s[0])

#Access ID's of the list:
print(friends) 
print(starts_s) 
#will return different ID's (i.e. different memory address):
print("friends: ", id(friends), "starts_s: ", id(starts_s))

#creating the same/ exact copy of the list:
friends = ["Sam", "Samantha", "Saurabh"]
starts_s = friends