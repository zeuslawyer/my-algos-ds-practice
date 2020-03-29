const uGraphCycle = [[1], [0, 2, 3], [1, 4, 5], [1], [2, 5], [2, 4]];

const uGraphNoCycle = [[1], [0, 2, 3], [1, 4, 5], [1], [2], [2]];

/**
 * BFS
 * trick - every node has one of three states - and if its "IN Q" then cycle exists
 * then it is a cycle UNLESS V is the parent of U
 * @param {Array} - where index represents node, and its elements denote the adjacency list
 */
function BFSdetectCycleUndirectedGraph(graph) {
  let status = {};
  const VISITED = 1;
  const ENQUED = 2;

  const cycle = true;
  let Q = [0];
  status[0] = ENQUED;

  while (Q.length > 0) {
    let current = Q.pop();
    status[current] = VISITED;
    const neighbours = graph[current];
    neighbours.forEach(n => {
      if (status[n] === ENQUED) return cycle;

      Q.unshift(n);
      status[n] = ENQUED;
    });
  }

  return !cycle;
}

let a = BFSdetectCycleUndirectedGraph(uGraphCycle);
let b = BFSdetectCycleUndirectedGraph(uGraphNoCycle);
console.log('Answer for DFS with cyclical graph :', a);
console.log('Answer for DFS with NO cyclical graph :', b);
