// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

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

  const Q = [root];

  while (Q.length > 0) {
    let level = [];
    let len = Q.length;

    for (let i = 0; i < len; i++) {
      level.push(Q.pop());
    }

    for (let i = 0; i < level.length; i++) {
      let curr = level[i];
      if (curr === null) continue;

      let nextInd = i + 1;
      // find the next index
      while (level[nextInd] === null) {
        nextInd += 1;
      }

      curr.next = level[nextInd] || null;
      Q.unshift(curr.left);
      Q.unshift(curr.right);
    }
  }

  return root;
};
