// undirected (bi directional)
class Graph {
  constructor() {
    // the graph, using the adjacency list implementation
    this.adjList = {};
  }

  addVertex(v) {
    // check doesnt exist so no accidental over writing of node data
    if (!this.adjList[v]) this.adjList[v] = [];
    return this;
  }

  // two vertices to add the edge between
  // if its a directed graph then add edge from v1 to v2
  addEdge(v1, v2) {
    // for v1 add v2 as connection
    if (!this.adjList[v1]) this.addVertex(v1);
    this.adjList[v1].push(v2);

    // since its undirected....for v2 add v1 as connection
    if (!this.adjList[v2]) this.addVertex(v2);
    this.adjList[v2].push(v1);

    // to add weights:
  }

  removeEdge(v1, v2) {
    if (!this.adjList[v1] || !this.adjList[v2]) return false;

    // reassign the connections by filtering out the other
    this.adjList[v1] = this.adjList[v1].filter(el => el !== v2);

    // only if its undirected/bidirectional, do the reverse
    this.adjList[v2] = this.adjList[v2].filter(el => el !== v1);
    return true;
  }

  removeVertex(v) {
    if (!this.adjList[v]) return false;
    // find and remove all edges for V
    let edges = this.adjList[v];
    for (let i = 0; i < edges.length; i++) {
      // console.log('removing edges between', v, 'and', edges[i])
      this.removeEdge(v, edges[i]);
    }

    // remove the vertex from the adjList {or set it to null}
    delete this.adjList[v];
    return true;
  }

  findConnections(v) {
    return this.adjList[v];
  }

  // BFS - queue
  BFS(startingVertex) {
    let result = [];
    let visited = {};
    let q = [startingVertex]; // FIFO pop, unshift

    if (!this.adjList[startingVertex]) return result;

    while (q.length) {
      // console.log("Q:  ", q)
      let current = q.pop();

      // mark as visited as soon as popped
      visited[current] = true;
      result.push(current);

      // visit neighbours
      let neighbours = this.adjList[current];
      neighbours.forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          q.unshift(neighbour); // add unvisited neighbiours to queue
        }
      });
    }
    return result;
  }

  // recursive with a starting point
  __DFSRecursive(startingVertex) {
    let result = [];
    let visited = {};
    let adjList = this.adjList;

    if (!this.adjList[startingVertex]) return result;

    function visit(vertex) {
      console.log('visiting', vertex);
      // mark as visited
      visited[vertex] = true;
      result.push(vertex);

      // visit neighbours
      let neighbours = adjList[vertex];
      neighbours.forEach(neighbour => {
        if (!visited[neighbour]) {
          visit(neighbour);
        }
      });
    }

    visit(startingVertex);
    return result;
  }

  // recursive no starting point
  DFSRecursive() {
    let visited = {};
    let result = [];
    let adjList = this.adjList;

    for (let vert in adjList) {
      if (!visited[vert]) {
        visit(vert);
      }
    }

    function visit(v) {
      if (!visited[v]) {
        visited[v] = true;

        result.push(v);

        // visit neighbours
        let neighbours = adjList[v];
        neighbours.forEach(n => {
          visit(n);
        });
      }
    }

    return result;
  }

  // iterative with stack
  dfsStack(startingVertex) {
    let result = [];
    let visited = {};
    let stack = [startingVertex]; // LIFO push, pop

    if (!this.adjList[startingVertex]) return result;

    while (stack.length) {
      console.log(stack);
      let current = stack.pop();

      // mark as visited
      visited[current] = true;
      result.push(current);

      // visit each neighbour
      let neighbours = this.adjList[current];
      neighbours.forEach(n => {
        if (!visited[n]) {
          // mark visited
          visited[n] = true;
          // push on to stack
          stack.push(n);
        }
      });
    }

    return result;
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
g.adjList;

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
g2.__DFSRecursive('Agg');
// g.DFSRecursive("Arnie")
// g

// console.log(g2.dfsStack('A')); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]

console.log(g2.__DFSRecursive('A')); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(g2.DFSRecursive()); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]

// console.log(g2.BFS('A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
