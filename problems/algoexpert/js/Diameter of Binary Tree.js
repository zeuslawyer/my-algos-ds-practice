// https://drive.google.com/file/d/1TmqpnLgX8tk_eWtJ6_tGo7hc1GaKBAsk/view?usp=sharing
// https://www.algoexpert.io/questions/Binary%20Tree%20Diameter


/**
 * 
  Write a function that takes in a Binary Tree and returns its diameter. The
  diameter of a binary tree is defined as the length of its longest path, even
  if that path doesn't pass through the root of the tree.

  A path is a collection of connected nodes in a tree, where no node is
  connected to more than two other nodes. The length of a path is the number of
  edges between the path's first node and its last node.
 */

// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function binaryTreeDiameter(tree) {
    return getTreeInfo(tree).diameter;
  }

function getTreeInfo(tree){
    if(tree === null) return new TreeInfo(0,0);

    // get sub tree info
    let leftTreeInfo = getTreeInfo(tree.left);
    let rightTreeInfo = getTreeInfo(tree.right);

    // calculate values for both sub trees
    let longestDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
    let pathLengthAtCurrentNode = leftTreeInfo.height + rightTreeInfo.height;
    
    // calculate values for the current tree node
    let currentNodeHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);
    let diameterAtCurrentNode = Math.max(longestDiameterSoFar, pathLengthAtCurrentNode)

    return new TreeInfo(diameterAtCurrentNode, currentNodeHeight)
}


class TreeInfo{
    constructor(d, h){
        this.diameter = d;
        this.height = h;
    }
}

