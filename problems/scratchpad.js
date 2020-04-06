/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.data = new DLL();
  this.size = 0;
  this.cache = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let node = this.cache[key];
  if (node === undefined) return null;

  // else
  this.data.remove(node);
  this.data.insertAtTail(node);
  return node;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node = this.cache[key];
  if (node !== undefined) {
    // node already exists
    node.value = value; // update value
    this.cache[key] = node; // update cache
    this.data.remove(node); // move up in DLL
    this.data.insertAtTail(node);
  } else {
    // data does not exist
    node = new Node(key, value); // create node
    this.cache[key] = node; // put in hash table
    this.data.insertAtTail(node); // add to DLL

    this.size += 1; // handle capacity
    if (this.size > this.capacity) {
      let leastUsed = this.data.removeLeastUsed(); // remove least used from DLL
      delete this.cache[leastUsed.key]; // delete from table
      this.size -= 1;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
class DLL {
  constructor() {
    this.head = new Node('Head', 'Bookend');
    this.tail = new Node('Tail', 'Bookend');
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertAtTail(newNode) {
    let currentNode = this.tail.prev;
    currentNode.next = newNode;
    newNode.next = this.tail;
    newNode.prev = currentNode;
    this.tail.prev = newNode;
  }

  remove(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
    node.next = null;
    node.prev = null;
    return node;
  }

  removeLeastUsed() {
    let leastUsed = this.head.next;
    return this.remove(leastUsed);
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

let t = new LRUCache(2);
t.put(1, 1);
t.put(2, 2);
// console.log(t.cache);
console.log(t.get(1));
