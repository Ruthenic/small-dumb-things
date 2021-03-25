import random
num = random.randint(10,99)
print(num)
word = input("Word(s) to encode: ")
newword = str(num)[0]
for i in word:
    newword+=chr(ord(i) + num)
newword+=str(num)[1]
print(newword)
