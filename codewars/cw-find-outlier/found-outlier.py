def find_outlier(integers):
  evens = []
  odds = []

  for x in range(len(integers)):
    if (integers[x] % 2 == 0):
      evens.append(integers[x])
    else:
      odds.append(integers[x])

  if (len(evens) > len(odds)):
    return odds[len(odds) - 1]
  else:
    return evens[len(evens) - 1]
