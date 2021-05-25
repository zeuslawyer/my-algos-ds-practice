

/**
 * Since its a directed graph, each "branch" gets put on the stack. Only descendants of a given
 * ancestor will end up being called in the recursion stack. Thus the stack tracks "lineage".
 * if an ancestor is in the stack and has been visited, and the next node being added to the stack is the same
 * as that visited ancestor, then a loop/cycle exists.
 * Thus the stack maintains ancestry. 
 * 
 * Thats also why after the recursion completes for a given subtree, the root node of that subtree
 * gets removed from the stack list.
 */

function cycleInGraph(edges) {
    // Write your code here.
      const visited ={}
      const inStack = {}
      
      
      for(let i=0; i< edges.length; i++){
          visited[i] = false
          inStack[i] = false
      }
      
      for (let node=0; node<edges.length; node++){
          if(visited[node]) continue
          
          let cycle = containsCycle(node, edges, visited, inStack)
          if(cycle) return true
      }	
      
    return false;
  }
  
  function containsCycle(node, edges, visited, inStack){
          visited[node] = true
          inStack[node] = true
          
          const nextNodes = edges[node]
          for (const next of nextNodes){
              // if(!visited[next]){
              // 	const cycle = containsCycle(next, edges, visited, inStack)
              // 	if(cycle) return true
              // } else if(inStack[next]){ // in stack will have ancestors
              // 	return true
              // }
              if(visited[next] && inStack[next]){
                  return true
              } else if (!visited[next]){
                  const cycle = containsCycle(next, edges, visited, inStack)
                  if(cycle) return true
              }
          }
          
          // remove it from stack (ancestor list) after its subtree has been processed without cycle
          inStack[node] = false
          return false
      }
  
  // Do not edit the line below.
  exports.cycleInGraph = cycleInGraph;
  