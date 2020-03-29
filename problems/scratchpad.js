const _ = require('underscore');

const input = 6,
  edges = [
    [1, 2],
    [2, 3],
    [4, 5],
    [3, 5],
    [1, 6],
    [2, 4]
  ],
  edgesToRepair = [
    [1, 6, 410],
    [2, 4, 800]
  ];

function minCost(N, edges, costs) {
  let disjSet = [];
  const mst = [];
  for (let i = 1; i <= N; i++) {
    disjSet.push([i]);
  }

  edges = edges.map((e, i) => {
    let [u, v, c] = e;
    let withCost = costs.find(item => {
      return item[0] === u && item[1] === v;
    });

    if (!withCost) {
      return [u, v, 0];
    } else {
      return [u, v, withCost[2]];
    }
  });

  edges.sort((a, b) => b[2] - a[2]);

  while (disjSet.length > 1) {
    let edge = edges.pop();
    const [u, v, c] = edge;

    //find
    let setWithU = disjSet.find(set => set.includes(u));
    let setWithV = disjSet.find(set => set.includes(v));

    // union
    if (setWithU !== setWithV) {
      const unioned = _.union(setWithU, setWithV);
      disjSet.push(unioned);
      disjSet = _.without(disjSet, setWithU, setWithV);
      mst.push(edge);
    }
  }
  console.log('MST', mst);

  let cost = 0;
  mst.forEach(e => (cost += e[2]));
  return cost;
}

let a = minCost(input, edges, edgesToRepair);
console.log('cost', a);
