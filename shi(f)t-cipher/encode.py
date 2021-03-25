word = input("Word(s) to encode: ")
newword = ''
for i in word:
    newword+=(chr(ord(i) + 1))
print(newword)
