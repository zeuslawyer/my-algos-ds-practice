inp1 = [3, 1, -1, 4]  # ans is 7


def kadanes(arr):
    if len(arr) <= 1:
        return arr
    sumSoFar = arr[0]
    maxSum = arr[0]

    for i in range(1, len(arr)):  # start at 1
        curr = arr[i]

        sumSoFar = max(curr, curr+sumSoFar)
        maxSum = max(sumSoFar, maxSum)

    return maxSum


# ans = kadanes([-99, 5])
ans = kadanes(inp1)
print(ans)
