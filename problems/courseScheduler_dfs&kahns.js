function courseTakerKahns(numCourses, prereqs) {
  let graph = {};
  let inDegrees = {};
  let ordered = [];
  let Q = []; // unshift, pop

  for (let [course, dep] of prereqs) {
    // construct graph
    if (!graph[dep]) graph[dep] = [];
    if (!graph[course]) graph[course] = [];
    graph[dep].push(course);

    // construct inDegrees
    if (!inDegrees[course]) inDegrees[course] = 0;
    if (!inDegrees[dep]) inDegrees[dep] = 0;
    inDegrees[course]++;
  }

  // assemble Q, find a node with 0 inDegrees
  for (let node in inDegrees) {
    if (inDegrees[node] === 0) Q.unshift(node);
  }

  while (Q.length > 0) {
    // start visiting
    let current = Q.pop();
    ordered.push(current);

    let neighbours = graph[current];
    neighbours.forEach(n => {
      inDegrees[n]--;
      if (inDegrees[n] === 0) Q.unshift(n);
    });
  }

  // check if cyclical

  if (ordered.length === numCourses) return ordered;
  return 'cyclical graph';
}

let OK = courseTakerKahns(5, [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4]
]);

let notOK = courseTakerKahns(2, [
  [0, 1],
  [1, 0]
]);

// console.log('Kahns',OK);'
console.log('Kahns', notOK);

function courseTakerDFS(numCourses, prereqs) {
  let graph = {};
  let visited = {};
  let ordered = [];
  let stack = []; // pop, push

  for (let [course, dep] of prereqs) {
    // construct graph
    if (!graph[dep]) graph[dep] = [];
    if (!graph[course]) graph[course] = [];
    graph[dep].push(course);
  }

  for (let node in graph) {
    if (!visited[node]) visit(node);
  }

  // helper function - DFS
  function visit(node) {
    visited[node] = true;
    let neighbours = graph[node];

    neighbours.forEach(n => {
      if (!visited[n]) visit[n];
    });

    // after visiting, add it from call stack to sorted
    stack.push(node);
  }

  while (stack.length > 0) {
    let current = stack.pop();
    ordered.push(current);
  }

  if (stack.length === numCourses) return ordered;
  return 'cyclical';
}

let withStack = courseTakerDFS(5, [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4]
]);

let withStackCyc = courseTakerDFS(2, [
  [0, 1],
  [1, 0]
]);

console.log('DFS', withStackCyc);
