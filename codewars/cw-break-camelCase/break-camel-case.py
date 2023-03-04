def breakCamelCase(s):
    return "".join([" " + char if char.isupper() else char for char in s])
