// # given a DAG, find the total numbers of paths from vertex 0 to vertex N-1. The graph
// #  is represented as an adjacency list
// #  answer is 5:
// # [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

const input = [[4, 3, 1], [3, 2, 4], [3], [4], []];

function numberOfPaths(graph) {
  let count = 0;

  function countPaths(startVert, graph) {
    if (startVert === graph.length - 1) {
      count++;
      return;
    }

    // else recurse on each neighbours
    const neighbours = graph[startVert];
    neighbours.forEach((v) => {
      countPaths(v, graph);
    });
  }

  countPaths(0, graph);

  return count;
}

console.log(numberOfPaths(input));
