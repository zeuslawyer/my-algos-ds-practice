const uGraphCycle = [[1], [0, 2, 3], [1, 4, 5], [1], [2, 5], [2, 4]];

const uGraphNoCycle = [[1], [0, 2, 3], [1, 4, 5], [1], [2], [2]];

/**
 * DFS
 * trick - for every node U, if it has a niehgbour V such that V has already been visited
 * then it is a cycle UNLESS V is the parent of U
 * @param {Array} - where index represents node, and its elements denote the adjacency list
 */
function BFSdetectCycleUndirectedGraph(graph) {
  const visited = {};
  const cycle = true;

  function visit(curr, parent) {
    visited[curr] = true;

    let neighbours = graph[curr];
    for (let i = 0; i < neighbours.length; i++) {
      let n = neighbours[i];
      // check main condition
      if (visited[n] && n !== parent) {
        return cycle;
      }
      if (!visited[n]) return visit(n, curr);
    }

    // after dfs if not returned cycle
    return !cycle;
  }

  return visit(0, null);
}

let a = BFSdetectCycleUndirectedGraph(uGraphCycle);
let b = BFSdetectCycleUndirectedGraph(uGraphNoCycle);
console.log('Answer for DFS with cyclical graph :', a);
console.log('Answer for DFS with NO cyclical graph :', b);
