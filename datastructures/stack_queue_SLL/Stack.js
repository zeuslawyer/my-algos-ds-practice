// SLL node
class StackNode {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null; // top of stack (for constant time retrieval)
    this.tail = null; // bottom
    this.size = 0;
  }

  // same as unshift as we add to head of stack not tail
  push(val) {
    let newNode = new StackNode(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return this
  }

  // same as shift, because head is the top of stack
  pop() {
    if (this.size === 0) return undefined;

    let result = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next
      // snip connections
      result.next = null
    }

    this.size--;
    return result;
  }
}

let stack = new Stack()
stack.push('first').push('second').push('third')
stack.pop()
// stack.pop()
// stack.pop()

console.log(stack)

