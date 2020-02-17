// LEETCODE: https://leetcode.com/problems/binary-tree-level-order-traversal/

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  
  const result = []
  
  let Q = [root]
  while(Q.length > 0){
      let level=[]
      let len = Q.length
      
      for(let i =0; i< len; i++){
          let curr = Q.pop()
          level.push(curr.val)
          if(curr.left) Q.unshift(curr.left)
          if(curr.right) Q.unshift(curr.right)
      }
      result.push(level)
      
  }
  
  return result
};
