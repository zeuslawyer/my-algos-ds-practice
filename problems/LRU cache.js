//https://leetcode.com/problems/lru-cache

class DLLNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = new DLLNode('name', 'dummy head');
    this.tail = new DLLNode('name', 'dummy tail');
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertNeck(node) {
    let head = this.head;
    let next = this.head.next;
    head.next = node;
    node.prev = head;
    next.prev = node;
    node.next = next;

    return node;
  }

  remove(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;

    return node;
  }

  removeLeastUsed() {
    let rear = this.tail.prev;
    this.remove(rear);
    return rear;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.cache = {};
  this.dll = new DLL();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (key in this.cache) {
    const res = this.cache[key];
    // move node to neck
    this.dll.remove(res);
    this.dll.insertNeck(res);
    return res.val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // if already in cache, update
  if (key in this.cache) {
    let node = this.cache[key];
    node.val = value;
    this.cache[key] = node; // update cache
    // move to neck
    this.dll.remove(node);
    this.dll.insertNeck(node);
  } else {
    // not in cache
    const node = new DLLNode(key, value);
    this.cache[key] = node;
    this.dll.insertNeck(node);
    this.size++;

    if (this.size > this.capacity) {
      let removed = this.dll.removeLeastUsed();
      delete this.cache[removed.key];
      this.size--;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// ["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],     [1,1],   [2,2],[1],  [3,3],[2], [4,4], [1],  [3],  [4]]

let t = new LRUCache(2);
t.put(1, 1);
t.put(2, 2);
// console.log(t.cache);
console.log(t.get(1));
