# * You are given an array of integers. Each integer represents a jump of its
# value in the array. For instance, the integer 2 represents a jump of 2 indices
# orward in the array; the integer -3 represents a jump of 3 indices backward in
# the array. If a jump spills past the array's bounds, it wraps over to the other
# side. For instance, a jump of -1 at index 0 brings us to the last index in the
# array. Similarly, a jump of 1 at the last index in the array brings us to index 0.
# Write a function that returns a boolean representing whether the jumps in the
# array form a single cycle. A single cycle occurs if, starting at any index in
# the array and following the jumps, every element is visited exactly once before
# landing back on the starting index.


def hasSingleCycle(arr):
    startIndex = 0
    currentIndex = startIndex

    for i in range(len(arr)):
        # condition 1:  cycle must not restart during iteration over arr
        if i > startIndex and currentIndex == startIndex:
            return False

        currentIndex = getNextIndex(currentIndex, arr)
    
    #  after loop, check condition 2: we must be back at cycle start, idx 0
    return currentIndex == startIndex


def getNextIndex(idx, arr):
    jump = arr[idx]
    nextInd = (idx+jump) % len(arr)
    if nextInd < 0:
        nextInd = len(arr) + nextInd

    return nextInd


print(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -26]))

