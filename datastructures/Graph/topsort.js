// REFERENCE:  https://www.tutorialspoint.com/Topological-sorting-using-Javascript-DFS

// directed graph
class DiGraph {
  constructor() {
    this.adjList = {};
  }

  addVertex(v) {
    if (!this.adjList[v]) {
      this.adjList[v] = [];
    }
  }
  addDirectedEdge(v, e) {
    if (!this.adjList[v]) {
      this.addVertex[v];
    }
    this.adjList[v].push(e);
  }

  DFSRecursive(startingVertex) {
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

  // using DFS recurisive,  but adding to stack
  topSort() {
    let visited = {};
    let adjList = this.adjList;
    let stack = [];
    let sorted = [];

    // recursive helper
    function visit(n) {
      // console.log('visiting' , n)
      visited[n] = true;

      // visit neighbours
      let kids = adjList[n];
      kids.forEach(neigh => {
        if (!visited[neigh]) {
          visit(neigh);
        } else {
          throw new Error(` node ${n} points to ${neigh}. cyclical`);
        }
      });

      // after visiting all neighours, add this parent node to stack
      // console.log('adding to stack: ' , n)
      stack.push(n);
    }

    // visit all nodes to fill up the stack
    for (let node in this.adjList) {
      if (!visited[node]) {
        visit(node);
      }
    }

    while (stack.length > 0) {
      let popped = stack.pop();
      // console.log(popped, 'popped...')
      sorted.push(popped);
    }
    return sorted;
  }

  // top sort algo and detects cycle .. this is BFS
  kahnsTopSort() {
    let Q = []; // unshift + pop
    let sorted = [];

    // step 1:  generate incoming links count
    let incomingLinksCount = this.generateIncomingCountsMap();

    // step 2 : add the nodes with zero incoming links to the queue
    for (let node in incomingLinksCount) {
      if (incomingLinksCount[node] === 0) Q.unshift(node);
    }

    // step 3: keep popping nodes in queue, and adding them to the sorted list
    while (Q.length > 0) {
      let currentNode = Q.pop();
      sorted.push(currentNode);

      let neighbours = this.adjList[currentNode];
      neighbours.forEach(neighbour => {
        // decrement its incoming links, and if it has no more incoming links add to Q
        incomingLinksCount[neighbour]--;
        if (incomingLinksCount[neighbour] === 0) Q.unshift(neighbour);
      });
    }

    // step 4: compare the sorted array with lenght of nodes.  If unequal, there is a cycle
    if (sorted.length === Object.keys(this.adjList).length) {
      return sorted; // this is the top sorted sequence
    } else {
      return false;
    }
    return sorted;
  }
  // counts the indegrees for each node.
  generateIncomingCountsMap() {
    let incomingCounts = {};
    for (let node in this.adjList) {
      // add node to map and initialise
      !incomingCounts[node] ? (incomingCounts[node] = 0) : null;

      let neighbours = this.adjList[node];
      neighbours.forEach(n => {
        if (!incomingCounts[n]) incomingCounts[n] = 0;
        incomingCounts[n]++;
      });
    }
    // console.log('incoming links map', incomingCounts)
    return incomingCounts;
  }
}

let dg = new DiGraph();
dg.addVertex('A');
dg.addVertex('B');
dg.addVertex('C');
dg.addVertex('D');
dg.addVertex('E');
dg.addVertex('F');
dg.addVertex('G');

dg.addDirectedEdge('A', 'C');
dg.addDirectedEdge('A', 'B');
dg.addDirectedEdge('A', 'D');
dg.addDirectedEdge('C', 'D');
dg.addDirectedEdge('D', 'E');
dg.addDirectedEdge('E', 'F');
dg.addDirectedEdge('B', 'G');

// console.log(dg.topSort()); // [ 'A', 'B', 'G', 'C', 'D', 'E', 'F' ]
// console.log(dg.DFSRecursive('A')); // [ 'A', 'C', 'D', 'E', 'F', 'B', 'G' ]

let dgCyc = new DiGraph();
dgCyc.addVertex('A');
dgCyc.addVertex('B');
dgCyc.addVertex('C');
dgCyc.addVertex('D');

// cyclical
dgCyc.addDirectedEdge('A', 'B');
dgCyc.addDirectedEdge('B', 'C');
dgCyc.addDirectedEdge('C', 'D');
dgCyc.addDirectedEdge('D', 'B');

// console.log(dgCyc.topSort());
// console.log(dg.kahnsTopSort());

