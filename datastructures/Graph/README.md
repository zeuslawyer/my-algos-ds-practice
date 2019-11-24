## Traversing

- BFS (uses a queue)
- DFS - recursive or iterative. iterative uses a stack.

### for all traversal

1) create a results array and a visited {}
2) mark the entry point (the functions argument) as visited and add to results
3) general process is mark everything as visited and add to results first  THEN visit its neighbours
4) when visiting neighbours, proceed to visit them and mark them as visited only IF they're not already marked as visited