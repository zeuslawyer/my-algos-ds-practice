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
  if (!root) return null;
  let Q = [root];

  while (Q.length > 0) {
    let len = Q.length;
    let level = [];

    for (let i = 0; i < len; i++) {
      level.push(Q.pop());
    }

    for (let i = 0; i < len; i++) {
      let current = level[i];
      let next = level[i + 1] || null;

      current.next = next;

      if (current.left) {
        Q.unshift(current.left);
        Q.unshift(current.right);
      }
    }
  }

  return root;
};
