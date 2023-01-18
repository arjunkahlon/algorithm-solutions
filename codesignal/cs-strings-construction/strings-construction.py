def stringsConstruction(a, b):
    counter = 0
    bStrList = list(b)

    while len(bStrList) - len(a) >= 0:
        for i in a:
            if i in bStrList:
                bStrList.remove(i)
            else:
                return counter

        counter += 1

    return counter
