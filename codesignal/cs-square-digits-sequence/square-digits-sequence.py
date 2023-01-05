def squareDigitsSequence(a0):
    arr = [a0]
    while arr[len(arr) - 1] not in arr[:-1]:
        arr.append(
            sum(int(i)**2 for i in str(arr[len(arr) - 1]))
        )
    return len(arr)
