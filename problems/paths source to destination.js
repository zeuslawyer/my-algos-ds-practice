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
    console.log('just pushed final path', finalPath);
    return;
  }

  // else, get neighbours and recurse on them
  let neighbours = graph[nodeIdx];
  neighbours.forEach(n => {
    // add it to the current path
    path.push(n);
    console.log('just pushed', n, 'to', path);
    dfs(n, graph, path, allPaths); // recurse
    var p = path.pop(); // weird:  every time we push final path and return we want to backtrack and pop off nodes so we start path again at 0
    console.log('just popped', p);
  });
}

let ans = getPaths(input);
console.log(ans);
