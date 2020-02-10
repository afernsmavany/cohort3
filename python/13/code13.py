friend_ages ={"Rolf": 24, "Adam": 30, "Anne": 27}

# access an element's value:
print(friend_ages["Adam"])

# add & set an element's value:
friend_ages["Bob"] = 20

print(friend_ages)

# change an element's value:
friend_ages["Rolf"] = 20

print(friend_ages)

#creating a list of dictionaries:
friends = [
  {"name": "Rolf", "age": 24},
  {"name": "Adam", "age": 30},
  {"name": "Anne", "age": 27},
]

print(friends)

#access a particular index value:
print(friends[1])

#access a particular index's value only:
print(friends[1]["name"])

# iterating over keys in dictionaries:
student_attendance = {"Rolf": 96, "Bob": 80, "Anne": 100}

for student in student_attendance:
    print(student)

# iterating over keys in dictionaries; & accessing key-value pairs:
student_attendance = {"Rolf": 96, "Bob": 80, "Anne": 100}

for student in student_attendance:
     print(f"{student}: {student_attendance[student]}")

# another way to loop & display key-value pairs....
student_attendance = {"Rolf": 96, "Bob": 80, "Anne": 100}

for student, attendance in student_attendance.items():
     print(f"{student}: {attendance}")

#Checking whether a value is one of the keys. (Cannot check the value itself):
student_attendance = {"Rolf": 96, "Bob": 80, "Anne": 100}

if "Bob" in student_attendance:
     print(f"Bob: {student_attendance['Bob']}")
else:
     print("Bob is not a student in this class.")      

#Get just the values back:

student_attendance = {"Rolf": 96, "Bob": 80, "Anne": 100}

attendance_values = student_attendance.values()
     print(sum(attendance_values) / len(attendance_values))