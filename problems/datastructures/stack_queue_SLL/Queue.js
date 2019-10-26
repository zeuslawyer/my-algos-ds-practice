// SLL node
class qNode {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// FIFO
class Q {
  constructor() {
    this.head = null; // top of queue (for constant time retrieval)
    this.tail = null; // bottom - all new entrants
    this.size = 0;
  }

  // add to tail of stack. all new entrants. regular 'push'
  enque(val) {
    let newNode = new qNode(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  // All removals are from the head.  effectively a shift.
  deque() {
    if (this.size === 0) return undefined;

    let result = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {

      // update head
      this.head = this.head.next;

      // snip connections
      result.next = null
    }

    this.size--;
    return result;
  }
}

let q = new Q();
q.enque('one').enque('two');
q.enque('hello')

console.log(q.deque());



// q.enque('new');
console.log(q);
