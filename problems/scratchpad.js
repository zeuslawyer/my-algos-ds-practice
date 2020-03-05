var _ = require("underscore");

function minCost(N, edges, edgesToRepair) {
  let set = [];
  const mst = [];
  let c = 1;
  while (c <= N) {
    set.push([c]);
    c++;
  }

  edges = edges.map(e => {
    const [u, v] = e;
    let withCost = edgesToRepair.find(a => {
      let [au, av, ac] = a;
      return au === u && av === v;
    });
    if (!withCost) return [u, v, 0];
    // else
    return [u, v, withCost[2]];
  });

  let sorted = edges.sort((a, b) => b[2] - a[2]); // desc

  while (set.length > 1) {
    // start with smallest
    let current = sorted.pop();
    let [u, v, c] = current;

    // find
    let subsetU = set.find(a => a.includes(u));
    let subsetV = set.find(a => a.includes(v));

    // union
    if (subsetU !== subsetV) {
      let u = _.union(subsetU, subsetV);
      set.push(u);
      set = _.without(set, subsetU, subsetV);
      mst.push(current);
    }
  }

  // console.log(set) // set is completely unioned
  // console.log(mst) // mst

  return mst.reduce((accum, curr) => {
    return accum + curr[2];
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
