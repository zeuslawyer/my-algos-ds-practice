class heapNode {
  constructor(val, priority) {
    this.data = val;
    this.priority = priority || null;
  }
}

class pQ {
  constructor() {
    this.data = [];
  }

  enQrecurse(val, priority) {
    let node = new heapNode(val, priority);
    this.data.push(node);

    if (this.data.length === 1) return this;

    // this.bubbleUp(this.data.length - 1);
    _bubbleUp(this.data.length - 1, this.data);

    function _bubbleUp(childInd, values) {
      let parentInd = Math.floor((childInd - 1) / 2);

      // base case child < parent
      if (values[childInd] <= values[parentInd]) return;

      // else swap if child is > parent, recursively
      while (values[childInd] > values[parentInd]) {
        // console.log(`swapping child at index ${childInd}`, values[childInd], `with parent at index ${parentInd}`, values[parentInd]);
        [values[childInd], values[parentInd]] = [
          values[parentInd],
          values[childInd]
        ];
        _bubbleUp(parentInd, values);
      }
    }
    return this;
  }
  bubbleUp(ind) {
    let parentInd = this.getParent(ind);

    if (this.data[ind].priority >= this.data[parentInd].priority) return;

    while (this.data[ind].priority < this.data[parentInd].priority) {
      console.log(this.data);
      this.swap_Nodes(ind, parentInd);
      this.bubbleUp(parentInd);
    }
  }

  enQ(val, priority) {
    let newNode = new heapNode(val, priority);
    this.data.push(newNode);

    if (this.data.length === 1) return this;

    // reorder
    let insertedInd = this.data.length - 1;
    let parentInd = this.getParent(insertedInd);

    while (
      insertedInd > 0 &&
      this.data[insertedInd].priority < this.data[parentInd].priority
    ) {
      let temp = this.data[parentInd];
      this.data[parentInd] = this.data[insertedInd];
      this.data[insertedInd] = temp;

      insertedInd = parentInd;
      parentInd = this.getParent(insertedInd);
    }

    return this
  }

  deQrecurse() {
    if (this.data.length === 0) return false;
    if (this.data.length === 1) {
      return this.data.pop();
    }

    this.swap_Nodes(0, this.data.length - 1);
    let res = this.data.pop();

    this.sinkdown();

    return res;
  }

  sinkdown() {
    let index = 0;
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;
  }

  deQ() {
    if (this.data.length === 0) return false;
    if (this.data.length === 1) {
      return this.data.pop();
    }

    this.swap_Nodes(0, this.data.length - 1);

    let res = this.data.pop(); // remove item from heap

    // sinkdown
    let index = 0;
    while (index < this.data.length) {
      console.log('running');
      // let [leftInd, rightInd] = this.getChildren(index);
      let leftInd = 2 * index + 1;
      let rightInd = 2 * index + 2;

      if (this.data[leftInd] && this.data[rightInd]) {
        let swapInd =
          this.data[leftInd].priority < this.data[rightInd].priority
            ? leftInd
            : rightInd;
        if (this.data[index].priority > this.data[swapInd].priority) {
          this.swap_Nodes(swapInd, index);
          index = swapInd;
        }
      } else if (!this.data[leftInd]) {
        // nothing further to do
        break;
      } else if (!this.data[rightInd]) {
        let swapInd = leftInd;
        if (this.data[index].priority > this.data[swapInd].priority) {
          this.swap_Nodes(swapInd, index);
          index = swapInd;
        }
      }
    }

    return res;
  }

  getParent(index) {
    if (index < 1) return -1;
    return Math.floor((index - 1) / 2);
  }

  getChildren(index) {
    let first = 2 * index + 1;
    let second = 2 * index + 2;
    return [first, second];
  }

  swap_Nodes(ind1, ind2) {
    // console.log('swapping')
    let temp = this.data[ind1];
    this.data[ind1] = this.data[ind2];
    this.data[ind2] = temp;
  }
}

let t = new pQ();
t.enQ('skydiving', 1);
t.enQ('pushups', 5);
t.enQ('TWD', 1);

// console.log('popped', t.deQ());
// console.log('popped', t.deQ());
// console.log('popped', t.deQ());

t.enQrecurse('cooking', 4);
t.enQrecurse('cycling', 3);
// t.enQ('sleeping', 2);

console.log(t.data);
// console.log('popped', t.deQ());
