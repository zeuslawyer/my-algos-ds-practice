// # given a DAG, return all possible paths from vertex 0 to vertex N-1.
//The graph  is represented as an adjacency list
// #  answer is 5:
// # [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

// https://leetcode.com/problems/all-paths-from-source-to-target/discuss/380900/JavaScript-DFS-Solution

const input = [[4, 3, 1], [3, 2, 4], [3], [4], []];

function getPaths(graph) {
  let startNode = 0;
  let allPaths = [];
  let path = [startNode]; // all paths will start here

  dfs(startNode, graph, path, allPaths);

  return allPaths;
}

function dfs(node, graph, path, allPaths) {
  let endNode = graph.length - 1;

  if (node === endNode) {
    // base case. found the target.
    let finalPath = [...path]; // make a copy of the path so far as path itself may get added to in iterations.
    allPaths.push(finalPath);
    return;
  }

  // else, get neighbours and recurse on them
  let neighbours = graph[node];
  neighbours.forEach(n => {
    // add it to the current path
    path.push(n);
    dfs(n, graph, path, allPaths); // recurse
    path.pop(); // weird : but after all the recursion, pop off the last added n (!?)
  });
}

let ans = getPaths(input);
console.log(ans);
