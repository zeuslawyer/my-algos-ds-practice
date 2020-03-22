const uGraphCycle = [[1], [0, 2, 3], [1, 4, 5], [1], [2, 5], [2, 4]];

const uGraphNoCycle = [[1], [0, 2, 3], [1, 4, 5], [1], [2], [2]];

/**
 * BFS
 * trick - every node has one of three states - and if its "IN Q" then cycle exists
 * then it is a cycle UNLESS V is the parent of U
 * @param {Array} - where index represents node, and its elements denote the adjacency list
 */
function BFSdetectCycleUndirectedGraph(graph) {
  let InQ = 'In Queue';
  let VISITED = 'VISITED';
  const cycle = true;

  let status = {};
  let Q = [0];
  status[0] = InQ;

  while (Q.length > 0) {
    let node = Q.pop();
    status[node] = VISITED;
    let neighbours = graph[node];
    for (let i = 0; i < neighbours.length; i++) {
      let n = neighbours[i];
      if (status[n] === InQ) return cycle;
      if (status[n] !== VISITED) {
        Q.unshift(n);
        status[n] = InQ;
      }
    }
  }

  return !cycle;
}

let a = BFSdetectCycleUndirectedGraph(uGraphCycle);
let b = BFSdetectCycleUndirectedGraph(uGraphNoCycle);
console.log('Answer for DFS with cyclical graph :', a);
console.log('Answer for DFS with NO cyclical graph :', b);
