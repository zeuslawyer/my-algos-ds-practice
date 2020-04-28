// Input: n = 5, edges = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], edgesToRepair = [[1, 2, 12], [3, 4, 30], [1, 5, 8]]
// Output: 20

const _ = require('underscore');

const n = 5;
const edges = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 5],
];
const edgesToRepair = [
  [1, 2, 12],
  [3, 4, 30],
  [1, 5, 8],
];

function minCost(N, edges, edgesToRepair) {
  const mst = [];
  edges = edges.map((edge) => {
    const withCost = edgesToRepair.find(
      (e) => e[0] === edge[0] && e[1] === edge[1]
    );
    if (withCost) {
      edge.push(withCost[2]);
    } else {
      edge.push(0);
    }
    return edge;
  });

  // make PQ by simulating a min heap
  edges.sort((a, b) => b[2] - a[2]);

  let disjointSet = [];
  for (let i = 1; i <= N; i++) {
    disjointSet.push([i]);
  }
  while (disjointSet.length > 1) {
    let edge = edges.pop();

    // find
    let setU = disjointSet.find((set) => set.includes(edge[0]));
    let setV = disjointSet.find((set) => set.includes(edge[1]));

    // union, ONLY if the sets subsets are not the same.
    // that edge becomes part of the MST. if subset is the same, then we have visited this pair of nodes before and there is a cycle
    if (setU != setV) {
      let union = _.union(setU, setV);
      disjointSet.push(union);
      disjointSet = _.without(disjointSet, setU, setV);
      mst.push(edge);
    }
  }

  let total = 0;
  console.log(disjointSet);
  console.log(mst);

  // mst.forEach((e) => {
  //   total += e[2];
  // });
  // return total;
  return mst.reduce((sum, edge) => {
    return (sum += edge[2]);
  }, total);
}

let a = minCost(n, edges, edgesToRepair);
console.log(a);
