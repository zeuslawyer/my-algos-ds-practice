matrix = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
] # ans = [2, 1, 5, 2, 2]


def riverSizes(matrix):
    """
      1) create visited matrix => a copy of the matrix, with each value = False
      2) iterate over main matrix, and for each value in it, visit(r,c) it
      3) visit() does the following:
          iA) add the r,c pair into a Q (BFS), then immediate pop
          iB) initialise currentRiverSize = 0
          ii) While Q is !empty,  if the matrix at[r,c]  is unvisited:
              (iii) if it is also === 1:
                  (iv) increment the currentRiverSize by 1 
                  (v) get all its neighbours (top, bottom, left, right)
                  (vi) add neighbours to the Q
          (viii) now that Q is empty, if currentRiverSize  > 0 add it to the results list
      4) getNeighbours() does the following:
        (i) gets top and bottom neighbours - prev row and next row
        (ii) gets left and right neighbours - prev col and next col
        (iii) inserts them as pairs of points [r,c] into the returning array which gets iterated over in 3(vi)
    """

    res = []
    visited = [[False for cell in row] for row in matrix]

    # iterate over the entire matrix, and for each
    # coord/node run a BFS
    for r in range(len(matrix)):
        for c in range(len(matrix[0])):
            if not visited[r][c]:
                visit(r, c, matrix, visited, res)

    return res


def visit(row, col, matrix, visited, res):
    currentRiverLen = 0
    Q = [[row, col]]

    while len(Q) > 0:
        currentNode = Q.pop()
        r = currentNode[0]
        c = currentNode[1]

        if not visited[r][c]:
            visited[r][c] = True
            if matrix[r][c] == 1:
                currentRiverLen += 1
                neighbours = getNeighbours(r, c, matrix, visited)
                for neighbour in neighbours:
                    Q.insert(0, neighbour)

    # When Q empty
    if currentRiverLen > 0:
        res.append(currentRiverLen)


def getNeighbours(row, col, matrix, visited):
    neighbours = []
    # check prev row and next row = up and down from current point
    if row-1 >= 0:
        neighbours.append([row-1, col])
    if row + 1 < len(matrix):
        neighbours.append([row+1, col])

    # columns => left and right of the current point
    if col-1 >= 0:
        neighbours.append([row, col-1])
    if col+1 < len(matrix[0]):
        neighbours.append([row, col+1])

    return neighbours


ans = riverSizes(matrix)

print(ans)
