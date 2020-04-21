/**
 * 
Find the sum of each level of the following tree.

          4
        / | \
       1  5  10
      /  / \  \
     6  1   4  6

For this tree, the result would be: [4, 16, 17]

 */

class TNode {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
}

const eight = new TNode(6, []);
const seven = new TNode(4, []);
const six = new TNode(1, []);
const five = new TNode(6, []);
const four = new TNode(10, [eight]);
const three = new TNode(5, [six, seven]);
const two = new TNode(1, [five]);
const one = new TNode(4, [two, three, four]);

function recursive(node) {
  if (node === null) return [];
  const res = [];
  helper(node, 0, res);
  return res;
}

function helper(node, height = 0, res) {
  // initialise and increment
  if (res[height] === undefined) res[height] = 0;
  res[height] += node.value;

  const children = node.children;
  if (children.length > 0) ++height;
  children.forEach((child) => helper(child, height, res));
}

let t = recursive(one); //[ 4, 16, 17 ]
console.log(t);
