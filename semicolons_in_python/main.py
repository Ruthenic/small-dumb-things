import time;import subprocess;import string;import os
def execute(execstring):
    with open('epicgamer.py', 'w') as f:
        for i in execstring.split(';'):
            if i.startswith('print('):
                i = i.replace('print(', 'open("out.txt", "a").write(')
            if ';' in i:
                f.write(i)
            else:
                f.write(i + ';')
    with open('epicgamer.py') as f:
        tmp = f.read()
    with open('epicgamer.py', 'w') as f:
        f.write(tmp[:-1])
    subprocess.run('/usr/bin/python3 epicgamer.py', shell=True, capture_output=True, text=True)
    epicgamerinst = ''
    with open('out.txt') as f:
        for line in f:
                epicgamerinst+=line
    os.remove('out.txt')
    return epicgamerinst
semicolon = ''
for i in string.ascii_lowercase:
    semicolon += 'print("{}");'.format(i)
print(execute(semicolon))
print(semicolon)
