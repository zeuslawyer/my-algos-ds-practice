// undirected (bi directional)
class Graph {
  constructor() {
    // the graph, using the adjacency list implementation
    this.adjacencyArray = {};
  }

  addVertex(v) {
    // check doesnt exist so no accidental over writing of node data
    if (!this.adjacencyArray[v]) this.adjacencyArray[v] = [];
    return this;
  }

  // two vertices to add the edge between
  // if its a directed graph then add edge from v1 to v2
  addEdge(v1, v2) {
    // for v1 add v2 as connection
    if (!this.adjacencyArray[v1]) this.addVertex(v1);
    this.adjacencyArray[v1].push(v2);

    // since its undirected....for v2 add v1 as connection
    if (!this.adjacencyArray[v2]) this.addVertex(v2);
    this.adjacencyArray[v2].push(v1);

    // to add weights:
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyArray[v1] || !this.adjacencyArray[v2]) return false;

    // reassign the connections by filtering out the other
    this.adjacencyArray[v1] = this.adjacencyArray[v1].filter(el => el !== v2);

    // only if its undirected/bidirectional, do the reverse
    this.adjacencyArray[v2] = this.adjacencyArray[v2].filter(el => el !== v1);
    return true;
  }

  removeVertex(v) {
    if (!this.adjacencyArray[v]) return false;
    // find and remove all edges for V
    let edges = this.adjacencyArray[v];
    for (let i = 0; i < edges.length; i++) {
      // console.log('removing edges between', v, 'and', edges[i])
      this.removeEdge(v, edges[i]);
    }

    // remove the vertex from the adjacencyArray {or set it to null}
    delete this.adjacencyArray[v];
    return true;
  }

  findConnections(v) {
    return this.adjacencyArray[v];
  }

  // BFS - queue
  BFS(startingVertex) {
    
    let result = [];
    let visited = {};
    let q = [startingVertex]; // FIFO pop, unshift

    if (!this.adjacencyArray[startingVertex]) return result;

    while (q.length) {
      // console.log("Q:  ", q)
      let current = q.pop();
      visited[current] = true
      result.push(current)

      let neighbours = this.adjacencyArray[current]
      neighbours.forEach(neighbour=>{
        if(!visited[neighbour]) {
          visited[neighbour] = true
          q.unshift(neighbour)}
      })
      
    }
    return result

  }

  // recursive
  DFSRecursive(startingVertex) {
    let result = [];
    let visited = {};
    let adjacencyArray = this.adjacencyArray;
    if (!this.adjacencyArray[startingVertex]) return [];

    function visit(vertex) {
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        let neighbours = adjacencyArray[vertex];

        neighbours.forEach(n => visit(n));
      }
    }

    visit(startingVertex);
    return result;
  }

  // iterative with stack
  dfsStack(startingVertex) {
    let result = [];
    let visited = {};
    let stack = [startingVertex]; // LIFO push, pop

    if (!this.adjacencyArray[startingVertex]) return result;

    while (stack.length) {
      let current = stack.pop();

      if (!visited[current]) {
        visited[current] = true;
        result.push(current);

        let neighbours = this.adjacencyArray[current];
        neighbours.forEach(n => stack.push(n));
      }
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
g.adjacencyArray;

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

// console.log(g2.dfsStack('A')); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]

// console.log(g2.DFSRecursive("A")) // [ 'A', 'B', 'D', 'E', 'C', 'F' ]

console.log(g2.BFS('A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
