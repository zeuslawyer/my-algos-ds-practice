// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/submissions/
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/discuss/420632/JavaScript-BFS-and-DFS-Solution


/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root === null) return root;
   
   return bfs(root)
};

function bfs(node) {
   let Q = [node]
   
   while(Q.length > 0){
       let len = Q.length
       let level = []
       for(let i=0; i< len; i++){
           level.push(Q.pop())
       }
       for(let i=0 ;i < level.length;i++){
           let curr = level[i]
           curr.next = level[i+1] || null // set next pointer to next item in the same level of the tree

           if(curr.left){ // perfect tree, so only proceed if there is a left child
               Q.unshift(curr.left)
               Q.unshift(curr.right)
           }
       }
   }
   return node
}