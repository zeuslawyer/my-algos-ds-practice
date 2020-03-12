// # given a DAG, return all possible paths from vertex 0 to vertex N-1.
//The graph  is represented as an adjacency list
// #  answer is 5:
// # [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

// https://leetcode.com/problems/all-paths-from-source-to-target/discuss/380900/JavaScript-DFS-Solution

const input = [[4, 3, 1], [3, 2, 4], [3], [4], []];

function getPaths(graph) {
  let startNodeIdx = 0;
  let allPaths = [];
  let path = [startNodeIdx]; // all paths will start here

  dfs(startNodeIdx, graph, path, allPaths);

  return allPaths;
}

function dfs(nodeIdx, graph, path, allPaths) {
  let endNode = graph.length - 1;

  if (nodeIdx === endNode) {
    // base case. found the target.
    let finalPath = [...path]; // make a copy of the path so far as path itself may get added to in iterations.
    allPaths.push(finalPath);
    return;
  }

  // else, get neighbours and recurse on them
  let neighbours = graph[nodeIdx];
  neighbours.forEach(n => {
    // add it to the current path
    path.push(n);
    dfs(n, graph, path, allPaths); // recurse
    path.pop(); // weird : but after all the recursion, pop off the last added n (!?)
  });
}

let ans = getPaths(input);
console.log(ans);
