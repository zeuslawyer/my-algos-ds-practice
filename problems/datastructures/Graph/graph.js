// undirected (bi directional)
class Graph {
  constructor() {
    // the graph, using the adjacency list implementation
    this.edgesMap = {};
  }

  addVertex(v) {
    // do not overwrite existing node
    if (!this.edgesMap[v]) this.edgesMap[v] = [];
    return this;
  }

  // two vertices to add the edge between
  // if its a directed graph then add edge from v1 to v2
  addEdge(v1, v2) {
    // for v1 add v2 as connection
    if (!this.edgesMap[v1]) this.addVertex(v1);
    this.edgesMap[v1].push(v2);

    // since its undirected....for v2 add v1 as connection
    if (!this.edgesMap[v2]) this.addVertex(v2);
    this.edgesMap[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (!this.edgesMap[v1] || !this.edgesMap[v2]) return false;

    // reassign the connections by filtering out the other
    this.edgesMap[v1] = this.edgesMap[v1].filter(el => el !== v2);

    // only if its undirected/bidirectional, do the reverse
    this.edgesMap[v2] = this.edgesMap[v2].filter(el => el !== v1);
    return true;
  }

  removeVertex(v) {
    if (!this.edgesMap[v]) return false;
    // find and remove all edges for V
    let edges = this.edgesMap[v];
    for (let i = 0; i < edges.length; i++) {
      // console.log('removing edges between', v, 'and', edges[i])
      this.removeEdge(v, edges[i]);
    }

    // remove the vertex from the edgesMap {or set it to null}
    delete this.edgesMap[v];
    return true;
  }

  // BFS - queue
  bfs(startingVertex) {
    let q = [startingVertex]; // unshift, pop
    let results = [];
    let visited = {};
    visited[startingVertex] = true;

    while (q.length) {
      let vertex = q.pop();
      results.push(vertex);

      // loop over its connections
      let edges = this.edgesMap[vertex];
      edges.forEach(edge => {
        if (!visited[edge]) {
          // mark as visited
          visited[edge] = true;
          // add to queue
          q.unshift(edge);
        }
      });
    }

    return results;
  }

  // recursive
  DFSRecursive(startingVertex) {
    // setup
    let results = [];
    let visited = {};
    let edgesMap = this.edgesMap; // so that inner function 'this' is not undefined

    // recursive helper function
    function visit(vertex) {
      // base case + error handling- not in graph
      if (!edgesMap[vertex]) return null;

      // mark visited
      visited[vertex] = true;
      // add to results
      results.push(vertex);

      let edges = edgesMap[vertex];
      // loop over its edges (connections)
      edges.forEach(edge => {
        if (!visited[edge]) {
          return visit(edge);
        }
      });
    }

    // recurse
    visit(startingVertex);

    return results;
  }

  // iterative with stack
  dfsStack(startingVertex) {
    if (!this.edgesMap[startingVertex]) return null;

    // setup
    let results = [];
    let visited = {};
    let stack = [startingVertex];
    // mark visited
    visited[startingVertex] = true;

    // visit each vertex
    while (stack.length) {
      let v = stack.pop();
      results.push(v);

      // loop over the edges for v
      let edges = this.edgesMap[v];
      edges.forEach(edge => {
        if (!visited[edge]) {
          // mark visited
          visited[edge] = true;
          // push on to stack
          stack.push(edge);
        }
      });
    }

    return results;
  }
}

let g = new Graph();
// g.addVertex('Zubin')
// g.addVertex('Rowena')
g.addEdge('Arnie', 'Maria');
g.addEdge('Zubin', 'Arnie');
g.addEdge('Zubin', 'Anita');
g.addEdge('Zubin', 'Maggie');
g.addEdge('Zubin', 'Mark Z');

g.removeEdge('TORNADO', 'Maria');
g.addEdge('Rowena', 'Maria');

g.removeVertex('Zubin');
g.edgesMap;

// create graph for DFS
let g2 = new Graph();
g2.addVertex('A')
  .addVertex('B')
  .addVertex('C')
  .addVertex('D')
  .addVertex('F');
g2.addEdge('A', 'B');
g2.addEdge('A', 'C');
g2.addEdge('B', 'D');
g2.addEdge('C', 'E');
g2.addEdge('D', 'E');
g2.addEdge('D', 'F');
g2.addEdge('E', 'F');
g2.DFSRecursive('Agg');
// g.DFSRecursive("Arnie")
// g

console.log(g2.dfsStack('A')); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]

// g2.DFSRecursive("A") // [ 'A', 'B', 'D', 'E', 'C', 'F' ]

// g2.bfs("A")
