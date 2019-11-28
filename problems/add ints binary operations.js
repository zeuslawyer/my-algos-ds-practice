// https://leetcode.com/problems/sum-of-two-integers/

// REFERENCE:  https://www.youtube.com/watch?v=qq64FrA2UXQ

//Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

function sum(a, b) {
  while (b) {
    // compute the carry over in bits
    let carry = (a & b) << 1;
    // compute the sum in bits
    a = a ^ b;
    b = carry;
  }
  return a;
}

let t = sum(1, 3);
console.log(t);



if(head && !head.next) return head
    
let prev = null
let current = head
let next = current.next

while(current){
    next = current.next
    current.next = prev
    prev = current
    current = next
}

return prev