import math

def get_middle(s):
    length = len(s)
    if length % 2 != 0:
        return s[math.floor(length/2)]

    return s[math.floor(length/2 - 1):math.floor(length/2 + 1)]
