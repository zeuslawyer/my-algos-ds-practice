// https://leetcode.com/problems/binary-tree-maximum-path-sum/#:~:text=Binary%20Tree%20Maximum%20Path%20Sum%20%2D%20LeetCode&text=Given%20a%20non%2Dempty%20binary,along%20the%20parent%2Dchild%20connections.

// SOLUTION 1 : ALGOEXPERT - solution 2 is better
function maxPathSum(tree) {
  const [maxBranchSum, maxPathSum] = findMaxSumInSubtree(tree);

  return maxPathSum;
}

/**
 * returns tuple of max branch sum and max triangle sum (incl root node) in given tree
 */
function findMaxSumInSubtree(tree) {
  if (tree === null) return [0, -Infinity];

  const [leftMaxBranchSum, leftMaxPathSum] = findMaxSumInSubtree(tree.left);
  const [rightMaxBranchSum, rightMaxPathSum] = findMaxSumInSubtree(tree.right);

  const maxChildBranchSum = Math.max(leftMaxBranchSum, rightMaxBranchSum); // this could be -ve
  // current node value
  const val = tree.value;
  // include triangle or just branch sum whichever is higher
  const maxBranchSum = Math.max(maxChildBranchSum + val, val);

  const maxRootedNodeSum = Math.max(
    leftMaxBranchSum + val + rightMaxBranchSum,
    maxBranchSum
  );

  const maxPathSumAccum = Math.max(
    leftMaxPathSum,
    rightMaxPathSum,
    maxRootedNodeSum
  );

  return [maxBranchSum, maxPathSumAccum];
}

// SOLUTION 2:  leetcode
// https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/422797/JavaScript-Solution-w-Explanation
//https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/606362/JavaScript-10-lines-DFS

function maxPathSum(tree) {
  let sum = -Infinity;
  function dfs(node) {
    if (!node) return 0;

    const left = Math.max(dfs(node.left), 0); // ignore negative branch sums
    const right = Math.max(dfs(node.right), 0); // ignore negative branch sums

    // update sum that gets returned
    sum = Math.max(sum, left + node.value + right);

    // return whichever branch is bigger
    return Math.max(left, right) + node.value;
  }

  dfs(tree);

  return sum;
}
