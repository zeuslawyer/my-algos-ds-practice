// needs a _Node class to hold value + priority level
class _Node {
  constructor(val = null, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class MinBinaryHeap {
  constructor() {
    this.nodes = [];
  }

  // insert (push)
  enque(val, priority) {
    let insertedNode = new _Node(val, priority);

    this.nodes.push(insertedNode);
    // edge case - heap was empty
    if (this.nodes.length === 1) return this;

    // else, min heap so  while priority less than parent's priorty bubble up / swap with parent
    let insertedNodeInd = this.nodes.length - 1; // insertedNodeInd of insertedNode
    let parentInd = Math.floor((insertedNodeInd - 1) / 2);

    let count = 0;

    // min heap so bubble up lesser value as long as index > 0
    while (
      insertedNodeInd > 0 &&
      insertedNode.priority < this.nodes[parentInd].priority
    ) {
      this.swap_Nodes(insertedNodeInd, parentInd);

      // update inserted and its new parent
      insertedNodeInd = parentInd;
      parentInd = this.getParentIndex(insertedNodeInd);

      count++;
      // console.log('Loop Count: ', count)
    }

    return this;
  }

  // extract min (root) + sinkdown
  deque() {
    // edge case - heap of 1 or less element
    if (this.nodes.length === 0) return undefined;
    if (this.nodes.length === 1) return this.nodes.pop();

    // swap root with last, to make last node the new root
    this.swap_Nodes(0, this.nodes.length - 1);

    // extrac the min value
    let result = this.nodes.pop();

    // let the new root trickle down to find its place
    this.sinkdown();

    return result;
  }

  // sinks larger value
  sinkdown(index = 0) {
    while (index < this.nodes.length) {
      // set parent
      let parent = this.nodes[index];

      //get the two child indexes
      let leftChildInd = 2 * index + 1;
      let rightChildInd = 2 * index + 2;
      let childInd;

      // if both children exist, then swap with the LESSER of them, if needed
      if (this.nodes[leftChildInd] && this.nodes[rightChildInd]) {
        // get lesser child
        childInd =
          this.nodes[leftChildInd].priority < this.nodes[rightChildInd].priority
            ? leftChildInd
            : rightChildInd;

        // min heap, swap only if the parent is >child node's priority
        if (parent.priority > this.nodes[childInd].priority) {
          this.swap_Nodes(index, childInd);
        }
      } else if (!this.nodes[leftChildInd]) {
        // no more swapping needed, as there are no children here, since in binary heaps left child must exist for a right child to exist
        break;
      } else if (!this.nodes[rightChildInd]) {
        // no right child , hence only leftChild so swap with leftChild
        childInd = leftChildInd;

        if (parent.priority > this.nodes[childInd].priority) {
          this.swap_Nodes(index, childInd);
        }
      }
      // update index for loop evaluation
      index = childInd;
    }
  }

  swap_Nodes(ind1, ind2) {
    // console.log('swapping')
    let temp = this.nodes[ind1];
    this.nodes[ind1] = this.nodes[ind2];
    this.nodes[ind2] = temp;
  }

  getParentIndex(childInd) {
    if (childInd < 1) return -1;
    return Math.floor((childInd - 1) / 2);
  }

  isMinBinHeap() {
    let heap = this.nodes;
    for (let [key, val] of Object.entries(heap)) {
      let child1 = heap[2 * key + 1];
      let child2 = heap[2 * key + 2];

      if (val.priority > child1.priority || val.priority > child2.priority)
        return false;

      return true;
    }
  }
}

class priorityQ extends MinBinaryHeap {}

// RUNNING============
let q = new priorityQ();

q.enque('hurty finger', 5);
q.enque('sniffles', 4);
q.enque('brain damage', 1);
q.enque('conjunctivitis', 3);

q.deque();
// q.deque()
// q.deque()
console.log(q);

console.log(q.isMinBinHeap());
