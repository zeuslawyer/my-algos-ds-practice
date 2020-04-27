const input = [[4, 3, 1], [3, 2, 4], [3], [4], []]; // #  answer  [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

function getPaths(graph) {
  if (graph.length == 0) return [];
  const results = [];
  let start = 0;

  const path = [start];

  visit(start, results, path, graph);

  return results;
}

function visit(node, results, path, graph) {
  const end = graph.length - 1;

  if (node === end) {
    const __path = [...path];
    results.push(__path);
    return;
  }

  const neighbours = graph[node];
  neighbours.forEach((n) => {
    path.push(n);
    visit(n, results, path, graph);
    path.pop();
  });
}

console.log(getPaths(input));
