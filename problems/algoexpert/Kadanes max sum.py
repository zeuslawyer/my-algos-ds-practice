inp1 = [3, 1, -1, 4]  # ans is 7


def kadanes(arr):
    if len(arr) <= 1:
        return arr
    maxSumInArrSoFar = arr[0]
    maxSum = arr[0]

    for i in range(1, len(arr)):  # start at 1
        curr = arr[i]

        maxSumInArrSoFar = max(curr, curr+maxSumInArrSoFar)
        maxSum = max(maxSumInArrSoFar, maxSum)

    return maxSum


# ans = kadanes([-99, 5])
ans = kadanes(inp1)
print(ans)
