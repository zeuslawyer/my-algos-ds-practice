// https://leetcode.com/discuss/interview-question/357310


// SHORT VERSION
function minCost(n, edges, edgesToRepair){
  // general formula to calculate max # of edges can be removed from a graph to make it a Spanning Tree (not MST)
  // relies on tree having N-1 Edges. this formula can also be derived as follows:
  // Tree will have N-1 Edges.
  // Tree and Graph will both have N nodes
  // let max be the max number of edges to remove to make it a ST
  // E (total Edges in Graph) - max = N-1 (i.e. edges in the ST)
  // therefore max = E - N + 1 is max number of edges that  can be removed...
  // therefore...
  // to find the cheapest edges to retain, we need to get rid of the max number of edges that are the most expensive ones

  const maxRemovable = edges.length + 1 - n

  const sorted = edgesToRepair.sort((a,b)=>a[2]-b[2]) // sort ascending

  // loop over this sorted list and remove max permitted number of expensive edges 
  for(i =0; i< maxRemovable; i++){
    sorted.pop() // pop the most expensive on each iteration
  }
  
  // what remains gives us the cost
  let cost= 0
  for(i=0; i<sorted.length;i++){
    cost+= sorted[i][2]
  }
  return cost
}

const edges = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]
const edgesToRepair = [[1, 2, 12], [3, 4, 30], [1, 5, 8]]
const n = 5

minCost(n, edges, edgesToRepair)


console.log(minCost(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], [[1, 2, 12], [3, 4, 30], [1, 5, 8]]));
console.log(minCost(6, [[1, 2], [2, 3], [4, 5], [3, 5], [1, 6], [2, 4]], [[1, 6, 410], [2, 4, 800]]));
console.log(minCost(6, [[1, 2], [2, 3], [4, 5], [5, 6], [1, 5], [2, 4], [3, 4]], [[1, 5, 110], [2, 4, 84], [3, 4, 79]]));