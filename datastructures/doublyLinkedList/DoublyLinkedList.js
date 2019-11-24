const { Node } = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let node = new Node(data);

    // empty list
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    // empty
    if (this.length === 0) return undefined;

    let popped = this.tail;

    // single node
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      // remove popped's connections
      popped.prev = null;
    }

    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;

    let shifted = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
      // sever connections
      shifted.next = null;
    }

    this.length--;
    return shifted;
  }

  unshift(val) {
    if (this.length === 0) return this.push(val);

    let node = new Node(val);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length)
      throw new RangeError('Index out of range');

    let count, current;

    if (index <= this.length / 2) {
      count = 0;
      current = this.head;

      while (count < index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;

      while (count > index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, val) {
    let node = this.get(index);

    if (node) {
      node.data = val;
      return true;
    }

    return false;
  }

  // returns boolean
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);

    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length-1) return this.pop();
    if (index === 0) return this.shift();

    let removed = this.get(index);
    let prevNode = removed.prev;
    let nextNode = removed.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removed.prev = null;
    removed.next = null;

    this.length--;
    return removed;
  }
}

module.exports = { LinkedList };
