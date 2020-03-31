// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.currentSize = 0;
    this.cache = {};
    this.data = new DLL();
  }

  insertKeyValuePair(key, value) {
    if (key in this.cache) {
      this.cache[key].value = value;
      this.data.moveToTail(this.cache[key]);
    } else {
      const node = new DLLNode(key, value);

      if (this.currentSize < this.maxSize) {
        this.data.insert(node);
        this.currentSize++;
      } else {
        // at capacity
        let removed = this.data.removeHead();
        // evict
        delete this.cache[removed.key];
        // insert
        this.data.insert(node);
      }
      this.cache[key] = node;
    }
  }

  getValueFromKey(key) {
    if (!(key in this.cache)) return null;

    const node = this.cache[key];
    this.data.moveToTail(node);
    return node.value;
  }

  getMostRecentKey() {
    // Write your code here.
    return this.data.tail.key;
  }
}

class DLLNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // always insert at tail
  insert(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let currentTail = this.tail;
      currentTail.next = node;
      node.prev = currentTail;
      this.tail = node;
    }
  }

  remove(node) {
    if (node === this.tail || node === this.head) {
      return this.removeHead();
    }
    // else
    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    node.prev = null;
    node.next = null;

    return node;
  }

  removeHead() {
    if (this.head === this.tail) {
      this.tail = null;
      let oldHead = this.head;
      this.head = null;
      return oldHead;
    }
    // else
    let newHead = this.head.next;
    let oldHead = this.head;
    newHead.prev = null;
    this.head = newHead;

    oldHead.next = null;
    return oldHead;
  }

  moveToTail(node) {
    node = this.remove(node);
    this.insert(node);
  }
}

let cache = new LRUCache(3);
cache.insertKeyValuePair('first', 'Zubin');
cache.insertKeyValuePair('second', 'Maggie');
cache.insertKeyValuePair('third', 'Rowie');
cache.insertKeyValuePair('fourth', 'Somebody');
cache.insertKeyValuePair('fifth', 'YooHOo');

let t = cache.getValueFromKey('third');
console.log(cache.getMostRecentKey());
