def sum_cubes(n):
    if n == 1:
        return 1

    return (n*n*n) + sum_cubes(n-1)
