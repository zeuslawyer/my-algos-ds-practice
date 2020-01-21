

def generate(N):
    matrix = [[None]*N for num in range(N)]
    count = 1

    rowStart = 0
    rowEnd = N-1
    colStart = 0
    colEnd = N-1

    while(rowStart <= rowEnd and colStart <= colEnd):
        #     fill in top row:
        for col in range(colStart, colEnd+1):
            matrix[rowStart][col] = count
            count += 1
        rowStart += 1

        #  fill in right col
        for row in range(rowStart, rowEnd+1):
            matrix[row][colEnd] = count
            count += 1
        colEnd -= 1

        #  fill in the bottom row
        for col in range(colEnd, colStart-1, -1):
            matrix[rowEnd][col] = count
            count += 1
        rowEnd -= 1

        #  fill in the LHS col
        for row in range(rowEnd, rowStart-1, -1):
            matrix[row][colStart] = count
            count += 1
        colStart += 1

    print(matrix)


generate(4)
