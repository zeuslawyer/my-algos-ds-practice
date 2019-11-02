// NOTE: no Node class needed. works directly with values.

class MaxBinHeap {
  constructor() {
    this.values = []; // all values are stored in an empty this.valuesay. No need for Node class.
  }

  // insert with recursion
  _insert(val) {
    // (1) push
    this.values.push(val);

    // (2) edge case: was empty heap
    if (this.values.length === 1) return this;

    // (3) find parent node index and swap = bubble up
    bubbleUp(this.values.length - 1, this.values);

    // recursive helper function
    function bubbleUp(childInd, values) {
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
        bubbleUp(parentInd, values);
      }
    }

    return this;
  }

  // insert with a loop
  insert(val) {
    this.values.push(val);
    // was emtpy heap
    if (this.values.length === 1) return this;

    // else bubble up to top of tree
    let index = this.values.length - 1;
    let parentInd = this.getParentIndex(index);

    // swap while inserted value > parent (max heap) and index >0
    while (index > 0 && this.values[index] > this.values[parentInd]) {
      [this.values[index], this.values[parentInd]] = [
        this.values[parentInd],
        this.values[index]
      ];
      // update index and parentInd
      index = parentInd;
      parentInd = this.getParentIndex(index);
    }

    return this;
  }

  // extract root
  extractMax() {
    // edge case - heap of 1 or less element
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    // else, swap root and last values
    this.swapValues(0, this.values.length - 1);
    // max is now at end
    let result = this.values.pop();

    // reorder the heap, by "sinking" the new root down to its right place
    this.sinkDown(0);

    return result;
  }

  getParentIndex(childInd) {
    if (childInd < 1) return false;
    return Math.floor((childInd - 1) / 2);
  }

  getChildrenIndexes(parentInd) {
    let leftChildInd = 2 * parentInd + 1;
    let rightChildInd = 2 * parentInd + 2;

    return [leftChildInd, rightChildInd];
  }

  swapValues(ind1, ind2) {
    [this.values[ind1], this.values[ind2]] = [
      this.values[ind2],
      this.values[ind1]
    ];
  }

  sinkDown(index = 0) {
    // start at root by default
    let swapIndex; // index of node to swap with
    let count = 0;

    while (index < this.values.length) {
      const [leftChildInd, rightChildInd] = this.getChildrenIndexes(index);
      console.log('while loop count: ', ++count);

      // if both children exist, then swap with the HIGHER of them, if needed
      if (this.values[leftChildInd] && this.values[rightChildInd]) {
        // get index of greater of the two children
        swapIndex =
          this.values[leftChildInd] > this.values[rightChildInd]
            ? leftChildInd
            : rightChildInd;
        console.log(swapIndex, 'ONE');

        // compare node and swap with greater of two children
        if (this.values[index] < this.values[swapIndex])
          this.swapValues(index, swapIndex);
      } else if (!this.values[leftChildInd]) {
        // as heaps are always filled left first, then right, if this block evaluates, it means no children to swap with
        console.log(swapIndex, 'TWO, breaking');
        break;
      } else if (!this.values[rightChildInd]) {
        // no right child, so compare only with left child
        swapIndex = leftChildInd;
        if (this.values[index] < this.values[swapIndex])
          this.swapValues(index, swapIndex);
        console.log(swapIndex, 'THREE');
      }
      // update index so loop evaluates

      index = swapIndex;
    }
  }
}

// ========= RUNNING ===========

testHeap = [100, 88, 78, 76, 64, 41, 22, 70, 60, 55, 12];

let heap = new MaxBinHeap();
heap
  .insert(72)
  .insert(88)
  .insert(76)
  .insert(64)
  .insert(100);

let heapRecursive = new MaxBinHeap();
heapRecursive
  ._insert(72)
  ._insert(88)
  ._insert(76)
  ._insert(64)
  ._insert(100)
  ._insert(15);
// test function
function isMaxBinHeap(values) {
  for ([key, val] of Object.entries(values)) {
    // if a value is less than either of its children, return false
    let leftChild = values[2 * key + 1];
    let rightChild = values[2 * key + 2];
    if (val < leftChild || val < rightChild) {
      return false;
    }
  }

  return true;
}

(isMaxBinHeap(heapRecursive) === isMaxBinHeap(heap)) === isMaxBinHeap(testHeap);

heap.extractMax();
console.log('new heap without 100', heap);
isMaxBinHeap(heap);
