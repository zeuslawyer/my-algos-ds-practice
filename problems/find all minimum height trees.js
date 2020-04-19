// https://leetcode.com/problems/minimum-height-trees/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (!edges || n === 1) return [0];

  let graph = [];
  // parse edges
  for (let [x, y] of edges) {
    graph[x] = graph[x] || [];
    graph[y] = graph[y] || [];
    graph[x].push(y);
    graph[y].push(x);
  }
  let leaves = [];
  // get the leaf nodes
  graph.forEach(
    (neighbours, node) => neighbours.length === 1 && leaves.push(node)
  );

  while (n > 2) {
    // reduce n by the number of leaves being processed
    n = n - leaves.length;
    let nxt_leaves = [];

    for (let leaf of leaves) {
      // find the leaf's neighbour
      const leafNeighbour = graph[leaf].pop();
      // remove leaf from neighbour's adjacency list
      graph[leafNeighbour].splice(graph[leafNeighbour].indexOf(leaf), 1);

      // save new leaf node
      graph[leafNeighbour].length === 1 && nxt_leaves.push(leafNeighbour);
    }
    leaves = nxt_leaves;
  }
  return leaves;
};

const N = 4;
const edges = [
  [1, 0],
  [1, 2],
  [1, 3],
];

let a = findMinHeightTrees(N, edges); // [1]
console.log(a);
