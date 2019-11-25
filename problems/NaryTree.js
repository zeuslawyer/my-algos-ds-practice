// https://leetcode.com/explore/learn/card/n-ary-tree/130/traversal/925

// **
//  * // Definition for a Node.
//  * function Node(val, children) {
//  *    this.val = val;
//  *    this.children = children;
//  * };
//  */
/**
 * @param {Node} root
 * @return {number[]}
 */


// iterative

// var preorder = function(root, res = []) {
//   if(!root) return res
//     let stack = [root]
    
//     while(stack.length > 0){
//         let node = stack.pop()
//         if (!node) continue
//         res.push(node.val)
//         for(let i = node.children.length ; i>=0; i--){
//             stack.push(node.children[i])
//         }
//     }
    
//     return res
// };


// recursive
var preorder = function(root, res = []) {
  if(!root) return res
    
    res.push(root.val)
    
    for(let i = 0; i< root.children.length;  i++){
        preorder(root.children[i], res)
    }
    
    return res
};