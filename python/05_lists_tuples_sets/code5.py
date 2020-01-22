l = ["Bob", "Rolf", "Anne"]
t = ("Bob", "Rolf", "Anne")
s = {"Bob", "Rolf", "Anne"}

print(l[0])
print(t[0])

l[0] = "Smith"
print(l)

# cannot be modified:
t[0] = "Smith"
print(t)

# not allowed to modify: 
s[0] = "Smith"
print(s)

l.append("James")
print(l)

l.remove("Bob")
print(l)

s.add("Dave")
print(s)