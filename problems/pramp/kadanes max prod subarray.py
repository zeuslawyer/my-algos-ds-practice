inp1 = [2, 3, -2, 4]  # ans 6

# great explanation:  https://leetcode.com/problems/maximum-product-subarray/discuss/416395/JavaScript-Solution-w-Explanation

# The tricky part of this problem is that negative numbers exist in the input array. This causes situations where the smallest 
# previous product (a negative number) can become the largest product if the next number in line is also a negative number.

def kadanesMaxProd(arr):
    maxSoFar = arr[0]
    minSoFar = arr[0]
    maxProd = arr[0]

    for i in range(1, len(arr)):
        current = arr[i]
        currentMax = maxSoFar
        currentMin = minSoFar

        minSoFar = min(current, current * currentMin, current * currentMax)
        maxSoFar = max(current, current * currentMin, current * currentMax)

        maxProd = max(maxProd, maxSoFar)

    return maxProd


ans = kadanesMaxProd(inp1)
print(ans)
