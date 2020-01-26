// # given a DAG, return all possible paths from vertex 0 to vertex N-1.
//The graph  is represented as an adjacency list
// #  answer is 5:
// # [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

// https://leetcode.com/problems/all-paths-from-source-to-target/discuss/380900/JavaScript-DFS-Solution

const input = [[4, 3, 1], [3, 2, 4], [3], [4], []];

function numberOfPaths(graph) {
  let res = [];
  let startVertex = 0;
  let path = [startVertex];

  travel(graph, startVertex);

  function travel(graph, vertex) {
    if (vertex === graph.length - 1) {
      // base condition
      res.push(path.slice(0)); // same as pushing path, but behaviour is different!
      return;
    } else {
      let neighbours = graph[vertex];
      for (const v of neighbours) {
        path.push(v);
        travel(graph, v);
        path.pop();
      }
    }
  }

  return res;
}

console.log(numberOfPaths(input));
