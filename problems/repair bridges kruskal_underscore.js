//  kruskal.js
// See http://en.wikipedia.org/wiki/Kruskal's_algorithm
// and http://programmingpraxis.com/2010/04/06/minimum-spanning-tree-kruskals-algorithm/

// https://www.tutorialspoint.com/Kruskal-s-algorithm-in-Javascript

// PREREQS:
// 1) https://www.techiedelight.com/disjoint-set-data-structure-union-find-algorithm/
// 2) https://www.techiedelight.com/union-find-algorithm-cycle-detection-graph/
// 3) https://www.techiedelight.com/kruskals-algorithm-for-finding-minimum-spanning-tree/

var _ = require('underscore');

// https://gist.github.com/jresendiz27/01caad02d82e9f6d93e9
var nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var edges = [
  ['A', 'B', 7],
  ['A', 'D', 5],
  ['B', 'C', 8],
  ['B', 'D', 9],
  ['B', 'E', 7],
  ['C', 'E', 5],
  ['D', 'E', 15],
  ['D', 'F', 6],
  ['E', 'F', 8],
  ['E', 'G', 9],
  ['F', 'G', 11]
];

function kruskal(nodes, edges) {
  var mst = [];
  var disjointSet = nodes.map(n => [n]);

  // desc, so you can pop from smallest to largest
  var sortedEdges = edges.sort((a, b) => b[2] - a[2]);

  while (disjointSet.length > 1) {
    var edge = sortedEdges.pop(); // smallest first
    const [u, v] = edge;

    var t1 = disjointSet.filter(tree => tree.includes(u));
    var t2 = disjointSet.filter(tree => tree.includes(v));

    if (t1 != t2) {
      disjointSet = _.without(disjointSet, t1[0], t2[0]);
      disjointSet.push(_.union(t1[0], t2[0]));
      mst.push(edge);
    }
  }
  return mst;
}

// console.log(kruskal(nodes, edges));

// https://leetcode.com/discuss/interview-question/357310
function minCost(N, edges, repairCosts) {
  const mst = [];
  let disjointSet = [];
  for (let i = 1; i <= N; i++) {
    disjointSet.push([i]);
  }

  edges = edges.map(edge => {
    const [u, v] = edge;
    let e = repairCosts.find(edge => {
      const [$u, $v, costs] = edge;
      return u === $u && v === $v;
    });

    if (e) return [u, v, e[2]];
    // else
    return [u, v, 0];
  });
  // desc, so that pop off smallest to largest
  var sortedEdges = edges.sort((a, b) => b[2] - a[2]);

  // console.log(sortedEdges)

  while (disjointSet.length !== 1) {
    var edge = sortedEdges.pop(); // smallest first
    const [u, v] = edge;

    // find operation
    var setU = disjointSet.find(s => s.includes(u));
    var setV = disjointSet.find(s => s.includes(v));

    if (setU === setV) continue; // in the same set

    // union if not already in same set
    if (setU !== setV) {
      disjointSet.push(_.union(setU, setV));
      disjointSet = _.without(disjointSet, setU, setV);
      mst.push(edge);
    }
  }
  // console.log(set) // set is completely unioned
  console.log(mst)

  return mst.reduce((prev, curr) => {
    return prev + curr[2];
  }, 0);
}

console.log(
  minCost(
    5,
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [1, 5]
    ],
    [
      [1, 2, 12],
      [3, 4, 30],
      [1, 5, 8]
    ]
  )
); // 20
console.log(
  minCost(
    6,
    [
      [1, 2],
      [2, 3],
      [4, 5],
      [3, 5],
      [1, 6],
      [2, 4]
    ],
    [
      [1, 6, 410],
      [2, 4, 800]
    ]
  )
); // 410
console.log(
  minCost(
    6,
    [
      [1, 2],
      [2, 3],
      [4, 5],
      [5, 6],
      [1, 5],
      [2, 4],
      [3, 4]
    ],
    [
      [1, 5, 110],
      [2, 4, 84],
      [3, 4, 79]
    ]
  )
); //79
