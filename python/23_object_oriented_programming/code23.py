# Example 1:

student = {"name": "Rolf", "grades": (89, 90, 93, 78, 90)}

def average(sequence):
    return sum(sequence)/ len(sequence)

print(average(student["grades"]))    

# Example 2 (Class syntax in python):
class Student:
    def __init__(self):
        self.name = "Rolf"  
        self.grades = (90, 90, 93, 78, 90)

    def average_grade(self):
        return sum(self.grades) / len(self.grades)

student = Student()        
print(student.name)
# print(student.grades)
print(student.average_grade())

# Example 3 (init method can also take arguments):
class Student:
    def __init__(self, name, grades):
        self.name = name  
        self.grades = grades

    def average_grade(self):
        return sum(self.grades) / len(self.grades)

student = Student("Bob", (100, 100, 93, 78, 90))        
student2 = Student("Rolf", (90, 90, 93, 78, 90))  

print(student.name)
print(student.average_grade())
print(student2.average_grade())

