# junyi_test
Test for junyi

第一題a用python:

def reverse(s):
    return s[::-1]


第一題b用python:

def reverse5(s):
    s1 = ''
    length = len(s) - 1
    while length >= 0:
        s1 = s1 + s[length]
        length = length - 1 #還沒完成順序調整
    return s1