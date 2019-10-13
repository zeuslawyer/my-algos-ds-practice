const { LinkedListNode } = require('./Node');
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new LinkedListNode(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }
  pop() {
    if (this.length == 0) return undefined;

    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return popped;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
    this.length--;
    return popped;
  }
  shift() {
    if (this.length === 0) return undefined;

    let shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return shifted;
    }

    let newHead = this.head.next;
    this.head = newHead;
    this.length--;

    return shifted;
  }
  unshift(val) {
    if (this.length === 0) {
      this.push(val);
      return this;
    }

    let newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  get(index) {
    if (index >= this.length || index < 0)
      throw new RangeError('index out of bounds.');

    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let node = this.get(index);

    node.data = val;
    return node.data;
  }

  insert(index, val) {
    if (index < 0 || index > this.length)
      return new RangeError('Index out of bounds');
    // insert as tail
    if (index === this.length) return !!this.push(val);
    // insert as head
    if (index === 0) return !!this.unshift(val);

    let newNode = new LinkedListNode(val);
    let prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return new RangeError('Index out of bounds')

    // remove tail
    if (index === this.length-1) return this.pop()
    // remove  head
    if (index === 0) return this.shift()

    let prev = this.get(index - 1)
    let removed = prev.next
    let next = prev.next.next
    prev.next = next
    this.length--
    return removed
  }
}

module.exports = { SingleLinkedList };
