// NOTE:  uses Nodes to hold data on priority level.

// needs a Node call
class Node {
  constructor(val = null, priority) {
    this.val = val
    this.priority = priority
  }
}


class MinBinaryHeap {
  constructor() {
    this.nodes = []
  }

  // insert
  enque(val, priority) {
    let insertedNode = new Node(val, priority)

    this.nodes.push(insertedNode)
    // edge case - heap was empty
    if (this.nodes.length === 1) return this

    // else, min heap so  while priority less than parent's priorty bubble up / swap with parent
    let insertedInd = this.nodes.length - 1  // insertedInd of insertedNode
    let parentInd = Math.floor((insertedInd - 1) / 2)

    let count = 0

    // min heap so bubble up lesser value as long as index > 0
    while (insertedInd > 0 && insertedNode.priority < this.nodes[parentInd].priority) {
      this.swapNodes(insertedInd, parentInd)

      // update inserted and its new parent
      insertedInd = parentInd;
      parentInd = this.getParentIndex(insertedInd)

      count++
      // console.log('Loop Count: ', count)

    }

    return this
  }

  // extract min (root)
  deque() {

    // swap root with last, to make last node the new root
    this.swapNodes(0, this.nodes.length - 1)

    // extrac the min value
    let result = this.nodes.pop()

    // let the new root trickle down to find its place
    this.sinkdown()

    return result
  }

  sinkdown(index = 0) {
    while (index < this.nodes.length) {
      //get the two child indexes
      let leftChildInd = 2 * index + 1
      let rightChildInd = 2 * index + 2
      let swapIndex;

      // if both children exist, then swap with the LESSER of them, if needed
      if (this.nodes[leftChildInd] && this.nodes[rightChildInd]) {
        swapIndex = this.nodes[leftChildInd].priority < this.nodes[rightChildInd].priority ? leftChildInd : rightChildInd

        // min heap, swap only if the node is > target swap nodes priority
        if (this.nodes[index].priority > this.nodes[swapIndex].priority) {
          this.swapNodes(index, swapIndex)
        }

      } else if (!this.nodes[leftChildInd]) {
        // no more swapping needed, as there are no children here
        break
      } else if (!this.nodes[rightChildInd]) {
        // no right child , hence only leftChild so swap with leftChild
        swapIndex = leftChildInd

        if (this.nodes[index].priority > this.nodes[swapIndex].priority) {
          this.swapNodes(index, swapIndex)
        }
      }
      // update index for loop evaluation
      index = swapIndex
    }
  }


  swapNodes(ind1, ind2) {
    // console.log('swapping')
    let temp = this.nodes[ind1]
    this.nodes[ind1] = this.nodes[ind2];
    this.nodes[ind2] = temp
  }

  getParentIndex(childInd) {
    if (childInd < 1) return false
    return Math.floor((childInd - 1) / 2)
  }

  isMinBinHeap() {
      let heap = this.nodes
      for(let [key, val] of Object.entries(heap)) {
        let child1 = heap[2*key+1]
        let child2 = heap[2*key+2]

        if (val.priority > child1.priority || val.priority > child2.priority) return false

        return true
      }

  }

}



class priorityQ extends MinBinaryHeap {

}

// RUNNING============
let q = new priorityQ()

q.enque('hurty finger', 5)
q.enque('sniffles', 4)
q.enque('brain damage', 1)
q.enque('conjunctivitis', 3)

q.deque()
// q.deque()
// q.deque()
// console.log(q)


console.log(q.isMinBinHeap())


