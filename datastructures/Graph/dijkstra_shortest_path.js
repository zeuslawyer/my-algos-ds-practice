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
    // sort ascending
    this.nodes.sort((a, b) => a.distanceFromStart - b.distanceFromStart); // distance from start
    return this;
  }

  deque() {
    const res = this.nodes.shift();
    this.nodes.sort((a, b) => a.distanceFromStart - b.distanceFromStart);
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
    let distanceFromStart = {};
    let Q = new PQ(); // priority queue
    let parentOf = {};
    let result = [];

    // initialise the tables with the vertices as keys
    for (let vertex in this.adjacencyMap) {
      distanceFromStart[vertex] = vertex === start ? 0 : Infinity; // only entry has known distance to itself = 0
      Q.enque({ vertex: vertex, distanceFromStart: distanceFromStart[vertex] }); // distance here is distance from start
      parentOf[vertex] = null; // set each of these to null
    }

    // visit each from Q. Always pops minimum distance
    while (Q.nodes.length > 0) {
      let current = Q.deque();

      // handle found
      if (end === current.vertex) {
        // and to path, in proper sequence
        result.unshift(end);
        let parent = parentOf[end];

        while (parent) {
          result.unshift(parent); // insert into start of array, so that it builds path in order
          parent = parentOf[parent];
        }

        return result;
      }

      // visit each neighbour and update tables
      let neighbours = this.adjacencyMap[current.vertex];
      neighbours.forEach(neighbour => {
        let newDistanceFromStart =
          current.distanceFromStart + neighbour.distance;

        // update tables if new distance lower than existing
        if (newDistanceFromStart < distanceFromStart[neighbour.vertex]) {
          distanceFromStart[neighbour.vertex] = newDistanceFromStart;
          parentOf[neighbour.vertex] = current.vertex; // show new route via the current node to this neighbour

          // put neighbour back in queue, with an updated distance
          neighbour.distanceFromStart = newDistanceFromStart;
          Q.enque(neighbour);
        }
      });
    }

    // not found
    return result;
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
      // console.log('visiting');
      // mark visited
      visited[nodeName] = true;
      result.push(nodeName);

      // visit neighbours
      let neighbours = adjacencyMap[nodeName];
      neighbours.forEach(neighbour => {
        if (!visited[neighbour.vertex]) {
          visit(neighbour.vertex);
        }
      });
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
      console.log(stack);
      let current = stack.pop();

      // mark as visited
      traversed[current] = true;
      result.push(current);

      // visit each neighbour
      let neighbours = this.adjacencyMap[current];
      neighbours.forEach(neighbour => {
        if (!traversed[neighbour.vertex]) {
          // mark as visited
          traversed[neighbour.vertex] = true;
          // add to stack
          stack.push(neighbour.vertex);
        }
      });
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
console.log(graph.shortestPath('A', 'E')); // [ 'A', 'C', 'D', 'F', 'E' ]
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

console.log(graph2.BFS('A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
// console.log(graph2.DFS_recursive('A')); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
// console.log(graph2.DFS_stack('A')); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
