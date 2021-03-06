// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// NOTE: BFS
var maxDepth = function (root) {
  let depth = 0;
  if (!root) return depth;

  const Q = [root];

  while (Q.length > 0) {
    let len = Q.length;
    console.log(Q);

    for (let i = 0; i < len; i++) {
      let current = Q.pop();
      if (current.left) Q.unshift(current.left);
      if (current.right) Q.unshift(current.right);
    }
    depth += 1;
  }

  return depth;
};

// NOTE: DFS - works on min depth and max depth
var maxDepth = function (root, depth = 0) {
  if (!root) return depth;
  depth++;
  if (root.left && root.right) {
    let left = maxDepth(root.left, depth);
    let right = maxDepth(root.right, depth);
    return Math.max(left, right);
  }

  if (!root.left) return maxDepth(root.right, depth);
  if (!root.right) return maxDepth(root.left, depth);
};

// NOTE: DFS
var maxDepthDFS = function (root, depth = 0) {
  if (!root) return depth;

  depth += 1;
  let left = maxDepthDFS(root.left, depth);
  let right = maxDepthDFS(root.right, depth);

  return Math.max(left, right);
};
