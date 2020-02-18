users = [
  (0, "Bob", "password"),
  (1, "Rolf", "bob123"),
  (2, "Jose", "longp4assword"),
  (3, "username", "1234"),
]

# keys are usernames, values are the entire tuple:
username_mapping = {user[1]: user for user in users}

print(username_mapping)
# prints: {'Bob': (0, 'Bob', 'password'), 'Rolf': (1, 'Rolf', 'bob123'), 'Jose': (2, 'Jose', 'longp4assword'), 'username': (3, 'username', '1234')}

print(username_mapping["Bob"])
# prints: (0, 'Bob', 'password')

# login example using dictionary comprehension:
username_mapping = {user[1]: user for user in users}

username_input = input("Enter your username: ")
password_input = input("Enter your password: ")

_, username, password = username_mapping[username_input]

if password_input == password:
    print("Your details are correct!")
else:
    print("Your details are incorrect!")     