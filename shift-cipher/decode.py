word = input("Word(s) to decode: ")
#word = '4\n Pu Pw¢P£Pu ^8'
#word = '0B1'
word, num = word[:-1], int(word[0].replace('\n', '') + word[-1].replace('\n', ''))
word = word[1:]
print(word)
print(num)
newword = ''
for i in word:
    newword+=chr(ord(i) - num)
print(newword)
