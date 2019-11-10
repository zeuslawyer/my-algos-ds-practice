class GraphNode {
  constructor(vertex, distance) {
    this.vertex = vertex;
    this.distance = distance; // distance from another node
  }
}

class PQ {
  constructor() {
    this.nodes = [];
  }
  enque(node) {
    this.nodes.push(node);
    this.nodes.sort((a, b) => a.distance - b.distance);
    return this;
  }

  deque() {
    const res = this.nodes.shift();
    this.nodes.sort((a, b) => a.distance - b.distance);
    return res;
  }
}

class WGraph {
  constructor() {
    this.adjacencyMap = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyMap[vertex]) this.adjacencyMap[vertex] = [];
    return this;
  }

  addEdge(v1, v2, distance = 1) {
    if (!this.adjacencyMap[v1]) this.adjacencyMap[v1] = [];
    this.adjacencyMap[v1].push(new GraphNode(v2, distance));

    if (!this.adjacencyMap[v2]) this.adjacencyMap[v2] = [];
    this.adjacencyMap[v2].push(new GraphNode(v1, distance));

    return this;
  }

  findEdges(vertex) {
    return this.adjacencyMap[vertex];
  }

  shortestPath(start, end) {
    let distances = {};
    let Q = new PQ();
    let previousVertexMap = {};
    let path = [];

    // initialise the tables with the vertices as keys
    for (let vertex in this.adjacencyMap) {
      distances[vertex] = start === vertex ? 0 : Infinity; // only entry has known distance to itself = 0
      Q.enque({ vertex: vertex, distance: distances[vertex] });
      previousVertexMap[vertex] = null; // set each of these to null
    }

    // visit each from Q. Always pops minimum distance
    while (Q.nodes.length > 0) {
      let current = Q.deque();

      // handle found
      if (end === current.vertex) {
        // assemble route
        path.unshift(end);

        // console.log("path trace map", previousVertexMap)
        let lookUpKey = current.vertex;
        // loop while the previousMap has a non null value
        while (previousVertexMap[lookUpKey]) {
          // add the value to path
          path.unshift(previousVertexMap[lookUpKey]);
          // reassign the key to be its value in the previousVertex table
          lookUpKey = previousVertexMap[lookUpKey];
        }
        return path;
      }

      // visit each neighbour and update tables
      let neighbours = this.adjacencyMap[current.vertex];
      neighbours.forEach(neighbour => {
        let calculatedDistanceToStart = current.distance + neighbour.distance;

        // update tables if new distance lower than existing
        if (calculatedDistanceToStart < distances[neighbour.vertex]) {
          distances[neighbour.vertex] = calculatedDistanceToStart;
          previousVertexMap[neighbour.vertex] = current.vertex; // show new route via the current node to this neighbour
          Q.enque({
            vertex: neighbour.vertex,
            distance: calculatedDistanceToStart
          }); // put neighbour into queue, with an updated distance that is not Infinite
        }
      });
    }

    // not found
    return path;
  }

  BFS(entry) {
    if (!this.adjacencyMap[entry]) return false;

    let q = [entry];
    let traversed = {};
    let result = [];

    while (q.length > 0) {
      // console.log(q);
      let vertex = q.shift();

      // mark it as visited
      traversed[vertex] = true;
      result.push(vertex);

      // visit each neighbour
      let neighbours = this.adjacencyMap[vertex];
      neighbours.forEach(neighbour => {
        if (!traversed[neighbour.vertex]) {
          // add to queue if neighbour has not been visited
          q.push(neighbour.vertex);
          // mark as visited
          traversed[neighbour.vertex] = true;
        }
      });
    }
    return result;
  }

  DFS_recursive(entry) {
    if (!this.adjacencyMap[entry]) return [];

    let result = [];
    let visited = {};
    let adjacencyMap = this.adjacencyMap;
    function visit(nodeName) {
      if (!visited[nodeName]) {
        visited[nodeName] = true;
        result.push(nodeName);
        let neighbours = adjacencyMap[nodeName];
        neighbours.forEach(neighbour => {
          visit(neighbour.vertex);
        });
      }
    }

    visit(entry);
    return result;
  }

  DFS_stack(entry) {
    if (!this.adjacencyMap[entry]) return [];
    let result = [];
    let traversed = {};
    let stack = [entry]; // pop, push

    while (stack.length > 0) {
      console.log(stack)
      let current = stack.pop();
      

      if (!traversed[current]) {
        traversed[current] = true;
        result.push(current);

        let neighbours = this.adjacencyMap[current];

        neighbours.forEach(n => {
          stack.push(n.vertex);
        });
      }
    }
    return result;
  }
}

let graph = new WGraph();

graph
  .addVertex('A')
  .addVertex('B')
  .addVertex('C')
  .addVertex('D')
  .addVertex('E')
  .addVertex('F');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

// console.log(graph.findEdges("F"))
// console.log(graph.shortestPath("A", "E"))
// console.log(graph.DFS_recursive('B'));

let graph2 = new WGraph();
graph2
  .addVertex('A')
  .addVertex('B')
  .addVertex('C')
  .addVertex('D')
  .addVertex('F');
graph2.addEdge('A', 'B');
graph2.addEdge('A', 'C');
graph2.addEdge('B', 'D');
graph2.addEdge('C', 'E');
graph2.addEdge('D', 'E');
graph2.addEdge('D', 'F');
graph2.addEdge('E', 'F');

// console.log(graph2.BFS('A'));  // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
// console.log(graph2.DFS_recursive('A'));  // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(graph2.DFS_stack('A'));  // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
