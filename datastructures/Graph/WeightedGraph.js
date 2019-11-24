class WeightedGraph{
  
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(v){
    if(!this.adjacencyList[v]) this.adjacencyList[v] = [];
    return this
  }
}


let wg = new WeightedGraph()

console.log