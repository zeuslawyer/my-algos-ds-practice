// https://www.youtube.com/watch?v=Wmk_wsCnHCU

// return true if the arr provided represents any root to leaf path
function isValid(root, arr) {
  if (!root) return arr.length === 0;

  return validateDFS(root, 0, arr);
}

function validateDFS(node, height, arr) {
  if (!node) return false;

  // value doesnt match
  if (arr[height] !== node.val) return false; // the height maps to the index of the input arr!

  // if its a leaf, then must also be end of arr, so tree height must be the same as last index
  if (!node.left && !node.right) return height === arr.length - 1;

  // not leaf
  const left = validateDFS(node.left, height + 1, arr);
  const right = validateDFS(node.right, height + 1, arr);

  return left || right; // either can return true to the arr represents a path
}
