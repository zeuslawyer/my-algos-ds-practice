
//  kruskal.js
// See http://en.wikipedia.org/wiki/Kruskal's_algorithm
// and http://programmingpraxis.com/2010/04/06/minimum-spanning-tree-kruskals-algorithm/

// https://gist.github.com/jresendiz27/01caad02d82e9f6d93e9
// https://www.tutorialspoint.com/Kruskal-s-algorithm-in-Javascript



var _ = require('underscore');

var nodes = ["A", "B", "C", "D", "E", "F", "G"];
var edges = [
    ["A", "B", 7], ["A", "D", 5],
    ["B", "C", 8], ["B", "D", 9], ["B", "E", 7],
    ["C", "E", 5],
    ["D", "E", 15], ["D", "F", 6],
    ["E", "F", 8], ["E", "G", 9],
    ["F", "G", 11]
];


function kruskal(nodes, edges) {
    var mst = [];
    var forest = nodes.map(n=>[n])

// desc
    var sortedEdges = edges.sort((a,b)=> b[2]-a[2])

    while(forest.length > 1) {
        var edge = sortedEdges.pop();// smallest first
        const[u,v] = edge

        var t1 = forest.filter(tree=>tree.includes(u))
        var t2 = forest.filter(tree=>tree.includes(v))

        if (t1 != t2) {
            forest = _.without(forest, t1[0], t2[0]);
            forest.push(_.union(t1[0], t2[0]));
            mst.push(edge);
        }
    }
    return mst;
}

// console.log(kruskal(nodes, edges));




function minCost(N, edges, repairCosts){
  const mst = []
  let set = []
  for(let i = 1; i<= N; i++){
    set.push([i])
  }

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
  // desc
  var sortedEdges = edges.sort((a,b)=> b[2]-a[2])

  // console.log(sortedEdges)

  while(set.length > 1) {


    var edge = sortedEdges.pop();// smallest first
    const[u,v] = edge

    var t1 = set.find(s=>s.includes(u))
    var t2 = set.find(s=>s.includes(v))

    if(t1 === t2) continue // in the same set

    if (t1 !== t2) {
      set.push(_.union(t1, t2));
        set = _.without(set, t1, t2);
        mst.push(edge);
    }
}
// console.log(set) // set is completely unioned
// console.log(mst)

return mst.reduce((prev, curr)=>{
  return prev + curr[2]
}, 0)
}



 console.log(minCost(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], [[1, 2, 12], [3, 4, 30], [1, 5, 8]])); // 20
console.log(minCost(6, [[1, 2], [2, 3], [4, 5], [3, 5], [1, 6], [2, 4]], [[1, 6, 410], [2, 4, 800]])); // 410
console.log(minCost(6, [[1, 2], [2, 3], [4, 5], [5, 6], [1, 5], [2, 4], [3, 4]], [[1, 5, 110], [2, 4, 84], [3, 4, 79]])); //79