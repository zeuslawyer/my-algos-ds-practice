class GraphNode {
  constructor(vertex, distance) {
    this.vertex = vertex;
    this.distance = distance  // distance from another node
  }
}

class PQ{
  constructor(){
    this.nodes =[]
  }
  enque(node){
    this.nodes.push(node)
    this.nodes.sort((a,b)=> a.distance - b.distance)
    return this
  }

  deque(){
    const res = this.nodes.shift();
    this.nodes.sort((a,b)=> a.distance - b.distance)
    return res
  }
}

class WGraph {
  constructor(){
    this.adjacencyMap = {}
  }

  addVertex(vertex){
    if(!this.adjacencyMap[vertex]) this.adjacencyMap[vertex] = []
    return this
  }

  addEdge(v1, v2, distance){
    if(!this.adjacencyMap[v1]) this.adjacencyMap[v1] = []
    this.adjacencyMap[v1].push(new GraphNode(v2, distance))

    if(!this.adjacencyMap[v2]) this.adjacencyMap[v2] = []
    this.adjacencyMap[v2].push(new GraphNode(v1, distance))

    return this
  }

  findEdges(vertex){
    return this.adjacencyMap[vertex]
  }

  shortestPath(start, end){
    let distances = {}
    let Q = new PQ()
    let previousVertexMap = {}
    let path = []

    // initialise the tables with the vertices as keys
    for(let vertex in this.adjacencyMap){
      distances[vertex] = (start===vertex) ? 0 : Infinity  // only entry has known distance to itself = 0
      Q.enque({vertex: vertex, distance: distances[vertex]})
      previousVertexMap[vertex]= null // set each of these to null
    }

    // visit each from Q. Always pops minimum distance
    while(Q.nodes.length > 0){
      let current = Q.deque()

      // handle found
      if(end===current.vertex){
        // assemble route
        path.unshift(end)

        // console.log("path trace map", previousVertexMap)
        let lookUpKey = current.vertex
        // loop while the previousMap has a non null value
        while(previousVertexMap[lookUpKey]){
          // add the value to path
          path.unshift(previousVertexMap[lookUpKey])
          // reassign the key to be its value in the previousVertex table
          lookUpKey= previousVertexMap[lookUpKey]
        }
        return path

      }

      // visit each neighbour and update tables
      let neighbours =  this.adjacencyMap[current.vertex]
      neighbours.forEach(neighbour=>{
        let calculatedDistanceToStart = current.distance + neighbour.distance

        // update tables if new distance lower than existing
        if(calculatedDistanceToStart < distances[neighbour.vertex]){
          distances[neighbour.vertex] = calculatedDistanceToStart
          previousVertexMap[neighbour.vertex] = current.vertex  // show new route via the current node to this neighbour
          Q.enque({vertex: neighbour.vertex, distance: calculatedDistanceToStart }) // put neighbour into queue, with an updated distance that is not Infinite
        }

      })
    }

    // not found
    return path



  }


}


let graph = new WGraph()

graph.addVertex("A").addVertex("B").addVertex("C").addVertex("D").addVertex("E").addVertex("F")
graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)

// console.log(graph.findEdges("F"))
console.log(graph.shortestPath("A", "E"))




