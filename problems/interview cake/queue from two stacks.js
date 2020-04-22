//  Implement the enqueue and dequeue methods

class QueueTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    // empty queue
    if (!this.inStack.length && !this.outStack.length)
      throw new Error("Queue empty");

    if (this.outStack.length > 0) {
      return this.outStack.pop();
    }

    // outstack empty but instack has something
    while (this.inStack.length > 0) {
      let current = this.inStack.pop();
      this.outStack.push(current);
    }

    return this.dequeue();
  }
}

// Tests
const q = new QueueTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

let desc = "dequeue #1";
let actual = q.dequeue();
let expected = 1;
assertEquals(actual, expected, desc);

desc = "dequeue #2";
actual = q.dequeue();
expected = 2;
assertEquals(actual, expected, desc);

q.enqueue(4);

desc = "dequeue #3";
actual = q.dequeue();
expected = 3;
assertEquals(actual, expected, desc);

desc = "dequeue #4";
actual = q.dequeue();
expected = 4;
assertEquals(actual, expected, desc);

desc = "dequeue from empty queue";
const emptyDequeue = () => q.dequeue();
assertThrowsError(emptyDequeue, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
