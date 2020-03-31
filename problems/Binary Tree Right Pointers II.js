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

  const Q = [root]; // NOTE:  nodes can be null value, which is still a value unlike undefined

  while (Q.length > 0) {
    let level = [];
    let len = Q.length;

    for (let i = 0; i < len; i++) {
      level.push(Q.pop());
    }

    for (let i = 0; i < level.length; i++) {
      let current = level[i];
      if (current === null) continue; // move to next node

      // find next index that is not null.
      let nextIdx = i + 1;
      while (level[nextIdx] === null) {
        nextIdx++;
      }
      // out of bounds or next node found
      current.next = level[nextIdx] || null;

      // add both children nodes even if null
      Q.unshift(current.left);
      Q.unshift(current.right);
    }
  }

  return root;
};
