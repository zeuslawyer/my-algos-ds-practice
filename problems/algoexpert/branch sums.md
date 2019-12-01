# Branch Sums

Write a function that takes in a Binary Tree and returns a list of its branch sums (ordered from leftmost branch sum to rightmost branch sum). A branch sum
is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node. Each
Binary Tree node has a value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. Children
nodes can either be Binary Tree nodes themselves or the None (null) value.
Sample input:
        1
      /   \
    2     3
   / \   / \
  4  5   6 7
 / \  \
8 9   10
Sample output: [15, 16, 18, 10, 11]

```
// https://leetcode.com/problems/sum-of-two-integers/

// REFERENCE:  https://www.youtube.com/watch?v=qq64FrA2UXQ

//Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

function sum(a, b){
  while(b){
    let carry = (a & b) << 1
    a = a ^ b
    b = carry
  }
  return a
}



function getSum(a, b){
  let carry = (a & b) << 1
  console.log(carry)
  a ^= b
  if(carry){
    getSum (a, carry)
  }

  return a
}



let t = sum(1,3)
console.log(t)

let too = getSum(1,5)
console.log(too)
```