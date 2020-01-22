# f string 1:

name = "Bob"
greeting = f"Hello, Bob"

print(greeting)

# 2:

name = "Bob"
greeting = f"Hello, {name}"

print(greeting)

name = "Rolf"

print(greeting)

# 3:

name = "Bob"

print(f"Hello, {name}")

name = "Rolf"

print(f"Hello, {name}")

# template string 1:

name = "Bob"
greeting = "Hello, {}"
with_name = greeting.format(name)

print(with_name)

# 2:

name = "Bob"
greeting = "Hello, {}"
with_name = greeting.format(name)
with_name_two = greeting.format("Rolf")

print(with_name)
print(with_name_two)

# 3:

longer_phrase = "Hello, {}. Today is {}."

formatted = longer_phrase.format("Rolf", "Monday")
print(formatted)





