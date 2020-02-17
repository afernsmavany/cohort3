# example 1:
x, y = 5, 11

print(x, y)

# example 2:

t = 5, 11
x, y = t

print(x, y)

# example 2:
student_attendance = {"Rolf": 96, "Bob": 80, "Anne": 100}

print(list(student_attendance.items()))

# for student, attendance in student_attendance.items():
#     print(f"{student}: {attendance}") 

# example 3:
student_attendance = {"Rolf": 96, "Bob": 80, "Anne": 100}

print(list(student_attendance.items()))

for t in student_attendance.items():
    print(t)
    # print(f"{student}: {attendance}") 

# example 4:
student_attendance = {"Rolf": 96, "Bob": 80, "Anne": 100}

print(list(student_attendance.items()))

for student, attendance in student_attendance.items():
    print(t)
    # print(f"{student}: {attendance}") 

#example 5:
people = [("Bob", 42, "Mechanic"), ("James", 24, "Artist"), ("Harry", 32, "Lecturer")]    

for name, age, profession in people:
    print(f"Name: {name}, Age: {age}, Profession: {profession}")
   
#example 6:
people = [("Bob", 42, "Mechanic"), ("James", 24, "Artist"), ("Harry", 32, "Lecturer")]    

for person in people:
    print(f"Name: {person[0]}, Age: {person[1]}, Profession: {person[1]}")
   
 #example 7 (extract some variables from a single tuple...):  

person = ("Bob", 42, "Mechanic")
name, _, profession = person

print(person) 
# prints ('Bob', 42, 'Mechanic')
# underscore used only if a variable is to be ignored

head, *tail = [1, 2, 3, 4, 5]
print(head)
print(tail)

# prints:
# 1
# [2, 3, 4, 5]

*head, tail = [1, 2, 3, 4, 5]
print(head)
print(tail)

# prints:
# [1, 2, 3, 4]
# 5