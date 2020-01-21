
# https://leetcode.com/problems/unique-paths/

def uniquePaths(m, n):
  # grid = [ [0]*n for num in range(m) ]
  grid = [[0 for num in range(n)] for num in range(m)]


  for row in range(m):
    for col in range(n):
      if row==0 or col==0:
        grid[row][col] = 1
      else:
        grid[row][col] = grid[row-1][col] + grid[row][col-1]
  
  print(grid)

  return grid[m-1][n-1]


ans = uniquePaths(3,5)
print("biggers space", ans)


def uniquePathsLessSpace(m,n):
  # memo = [0 for num in range(n)]
  memo = [None] * 5

  for row in range(m):
    for col in range(n):
      if row==0 or col==0:
        memo[col] = 1
      else:
        memo[col] = memo[col-1] + memo[col]
  

  return memo[n-1]


lessMemo = uniquePathsLessSpace(3,5)
print("less space", lessMemo)