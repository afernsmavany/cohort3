class ClassTest:
    def instance_method(self):
        print(f"Called instance_method of {self}") 

# Instance method / creating an instance:
test = ClassTest()
test.instance_method() # Option 1 (calling the method)
ClassTest.instance_method(test) # Option 2 (calling the method)        

# Class method:
@classmethod
def class_method(cls):
    print(f"Called class_method of {cls}")  

ClassTest.class_method()        

# Static method (does not receive the class or instance):
@staticmethod
def static_method():
    print("Called static_method.")  

ClassTest.static_method()        

