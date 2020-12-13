function findKthLargest(numsList, k) {
  buildMaxHeap(numsList)
  console.log(numsList)

  for (let i=numsList.length-1; i >= numsList.length-k; i--) {
    swap(0, i, numsList)
    sinkDown(0, i-1, numsList)
  }

  return numsList[numsList.length - k]
};

// function buildMaxHeap(numsList){
//   // find the last parent in the numsListay
//   let lastElemParentIdx = Math.floor((numsList.length-1-1) / 2)   // using formula childIdx = 2*parentIdx +1 

//   // sink down on all parent elements, to build max heap
//   for (let i=lastElemParentIdx; i>=0; i--){
//     sinkDown(i, numsList.length-1, numsList)
//   }
// }


function buildMaxHeap(numsList) {
  let lastChildsParentIdx = Math.floor((numsList.length - 2) / 2);
  for (let parent = lastChildsParentIdx; parent >= 0; parent--) {
    sinkDown(parent, numsList.length - 1, numsList);
  }
}


function sinkDown(startIdx, stopIdx, numsList){
  let leftChildIdx = 2 * startIdx + 1

  while (leftChildIdx <= stopIdx) {
// TODO rename startIdx to parent?

    let rightChildIdx = 2 * startIdx + 2
    if (rightChildIdx > stopIdx) rightChildIdx = -1

    // find index to swap with. Max heap, so greater of the two children will give the swap idx
    let swapIdx = leftChildIdx;
    if(rightChildIdx !== -1 && numsList[rightChildIdx] > numsList[startIdx]){
      swapIdx = rightChildIdx
    }

    // swap if child value is greater than parent
    if(numsList[startIdx] < numsList[swapIdx]){
      swap(startIdx , swapIdx, numsList)
      startIdx = swapIdx
      leftChildIdx = 2 * startIdx + 1
    } else {
      // done with sink down
      return
    }
  }
}

function swap(idx1, idx2, numsList){
  let temp = numsList[idx1]
  numsList[idx1] = numsList[idx2]
  numsList[idx2] = temp
}




const input = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;
let a = findKthLargest(input, k); // 4
// let b = findKthLargest([3, 2, 1, 5, 6, 4], 2); // 5
// let c = findKthLargest([7, 6, 5, 4, 3, 2, 1], 5); // 3
// let d = findKthLargest([3, 1, 2, 4], 2);

// console.log(a, b, c, d); 
console.log(a); 