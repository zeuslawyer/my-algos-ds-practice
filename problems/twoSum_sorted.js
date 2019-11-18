// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.  

// ALSO NO ZERO INDEXING OF RETURNED ARRAY

// intuition : sorted, so p1 < p2, and p2 cannot increase and p1 cannot decrease


function twoSum(nums, target) {
  let p1 = 0
  let p2 = nums.length - 1

  while (nums[p1] + nums[p2] !== target) {

    // not found
    if (p2 <= p1) return -1
    
    // overshot => decrease needed
    if (nums[p1] + nums[p2] > target) {
      p2--
    } else if (nums[p1] + nums[p2] < target) {
      //  undershot => increase needed
      p1++
    }
  }

  return [p1 + 1, p2 + 1]  // non zero indexed

}

function __twoSum(nums, target){
  let p1=0
  let p2=nums.length-1

  while(p1<p2){
    if(nums[p1]+ nums[p2]=== target ) return [p1+1, p2+1]  // non zero indexed

    if(nums[p1] + nums[p2] < target) p1++  //undershot, increase
    if(nums[p1] + nums[p2] > target) p2-- // overshot, decrease

  }
  // not found
  return -1
}


twoSum([2, 7, 11, 15], 18)