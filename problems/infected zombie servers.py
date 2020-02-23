# // https://leetcode.com/discuss/interview-question/411357/
# // amazon online assessment oa2

# /**
#  * related problems:
#  * https://leetcode.com/problems/rotting-oranges/
#  * https://leetcode.com/problems/walls-and-gates/ (premium)
#  */

def minimumHours(rows, cols, grid):
  Q = []

  hours = 0
  for r in range(rows):
    for c in range(cols):
      if grid[r][c]== 1:  # add infected to Que as they trigger infections
        Q.insert(0, [r,c]) 
  

  return bfs(Q, hours, grid)


def bfs(Q, hours, grid):
  qLen = len(Q)
  totalUninfected = len(grid) * len(grid[0]) - qLen

  # process zombies by batches of zombies at each level-order
  while(len(Q) > 0 and totalUninfected > 0):
    for i in range( qLen):
      zombie = Q.pop()
      neighbours = getUninfectedNeighbours(zombie[0], zombie[1], grid)
      for n in neighbours:
        r=n[0]
        c=n[1]
        Q.insert(0,[r,c]) # add the uninfected to Q
        grid[r][c] = 1 # mark as infected
        totalUninfected -= 1 # reduce uninfected population

    # for-loop ended, immediate neighbours infected so
    hours +=1

  # while loop ended
  return hours


def getUninfectedNeighbours(row, col, grid):
  neighbours = []
  rowEnd = len(grid)
  colEnd = len(grid[0])
  rowStart = 0
  colStart = 0

  # upper, if uninfected
  if row > rowStart and grid[row-1][col]==0:
    neighbours.append([row-1,col])
  
  # lower
  if row < rowEnd-1 and grid[row+1][col]==0:
    neighbours.append([row+1,col])

  # left
  if col > colStart and grid[row][col-1]==0:
    neighbours.append([row,col-1])

  # right
  if col < colEnd-1 and grid[row][col+1]==0:
    neighbours.append([row,col+1])

  return neighbours


input = [[0, 1, 1, 0, 1], [0, 1, 0, 1, 0], [0, 0, 0, 0, 1], [0, 1, 0, 0, 0]]

ans = minimumHours(len(input), len(input[0]), input)
print(ans)