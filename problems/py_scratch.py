def arrProd(arr):
    if len(arr) <= 1:
        return []

    res = [0 for x in range(len(arr))]

    left = [0 for x in range(len(arr))]
    right = [0 for x in range(len(arr))]

    for i in range(len(arr)):
        if i == 0:
            left[i] = 1
        else:
            left[i] = (arr[i-1]*left[i-1])

    for i in range(len(arr)-1, -1, -1):
        if i == len(arr)-1:
            right[i] = 1
        else:
            right[i] = arr[i+1]*right[i+1]

    for i in range(len(arr)):
        res[i] = left[i] * right[i]

    return res


# ans = arrProd([8, 10, 2])
ans = arrProd([5, 4, 3])

print(ans)


def array_of_array_products(arr):
    size = len(arr)
    res = [0 for x in range(size)]
    if size <= 1:
        return []

    left = [0 for x in range(size)]
    right = [0 for x in range(size)]

    # left table
    for i in range(size):
        if i == 0:
            left[i] = 1
        else:
            left[i] = arr[i-1]*left[i-1]

    # right table
    for i in range(size-1, -1, -1):
        if i == size-1:
            right[i] = 1
        else:
            right[i] = arr[i+1]*right[i+1]

    for i in range(size):
        print(i, size, left, right)
        res[i] = left[i] * right[i]

    return res


ans = array_of_array_products([1])
print("answer", ans)
