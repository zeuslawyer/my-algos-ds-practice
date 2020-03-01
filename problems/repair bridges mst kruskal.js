

// PREREQS:  
// 1) https://www.techiedelight.com/disjoint-set-data-structure-union-find-algorithm/
// 2) https://www.techiedelight.com/union-find-algorithm-cycle-detection-graph/
// 3) https://www.techiedelight.com/kruskals-algorithm-for-finding-minimum-spanning-tree/


function $$$$$$$$minCost(N, edges, edgesToRepair) {
  let n = N;

  const parents = [];
  for (let i = 0; i < N; i++) parents.push(i);

  function find(u) {
    console.log("before",u, parents)
    if (u !== parents[u]) parents[u] = find(parents[u]); // path compression
    console.log("after ", u,parents)

    return parents[u];
  }

  function union(u, v) {
    const p1 = find(u);
    const p2 = find(v);
    console.log("p1 and p2", p1, p2)

    if (p1 !== p2) {
      parents[p1] = p2; // or parents[p2] = p1 which does not matter
      n--;
    }
  }

  for (let [u, v] of edges) {
    if (!isInEdgesToRepair([u, v])) {
      union(u, v);
    }
  }
  edgesToRepair.sort((a, b) => (a[2] - b[2]));

  let res = 0;
  for (const [u, v, cost] of edgesToRepair) {
    if (find(u) !== find(v)) {
      union(u, v);
      res += cost;
    }
  }


  function isSameEdge(edge1, edge2) {
    const [u1, v1] = edge1;
    const [u2, v2] = edge2;
    return u1 === u2 && v1 === v2;
  }

  function isInEdgesToRepair(edge) {
    for (let e of edgesToRepair) {
      if (isSameEdge(edge, e)) return true;
    }
    return false;
  }
  // return n === 1 ? res : -1;
}


console.log(minCost(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], [[1, 2, 12], [3, 4, 30], [1, 5, 8]]));
// console.log(minCost(6, [[1, 2], [2, 3], [4, 5], [3, 5], [1, 6], [2, 4]], [[1, 6, 410], [2, 4, 800]]));
// console.log(minCost(6, [[1, 2], [2, 3], [4, 5], [5, 6], [1, 5], [2, 4], [3, 4]], [[1, 5, 110], [2, 4, 84], [3, 4, 79]]));


function minCost(N, edges, repairCosts){
  edges = edges.map(edge =>{
    const [u,v] = edge
    let e = repairCosts.find((edge)=>{
      const[$u,$v, costs] = edge
      return u===$u && v===$v
    })

    if(e) return [u,v,e[2]]
    // else
    return [u,v,0]
  })

  console.log(edges)
}