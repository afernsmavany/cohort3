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


   