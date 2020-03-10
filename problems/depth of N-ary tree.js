

// https://leetcode.com/explore/learn/card/n-ary-tree/131/recursion/919/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0
  const depths=[] // branch depths
  
  getDepth(root, 0, depths)

  return Math.max(...depths) // get max value from the depths of all the branches
}

function getDepth(node, depth = 0, depths){
  depth+=1 // increment depth 
  // if no children, update depth array, and we're done with this branch
  if(!node.children.length){
    depths.push(depth)
    return
  }
  // else
  node.children.forEach(c=>{
    getDepth(c, depth, depths)
  })
}
