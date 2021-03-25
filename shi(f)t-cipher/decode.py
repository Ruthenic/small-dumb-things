word = input("Word(s) to decode: ")
newword = ''
for i in word:
    newword+=(chr(ord(i) - 1))
print(newword)
