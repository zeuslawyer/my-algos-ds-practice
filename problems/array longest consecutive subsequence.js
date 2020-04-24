// https://www.youtube.com/watch?v=VeJOswJTDos
// https://www.youtube.com/watch?v=xdMyL--dOqE&feature=youtu.be
// https://leetcode.com/problems/longest-consecutive-sequence
// https://leetcode.com/problems/longest-consecutive-sequence/discuss/592056/99-time-100-space-solution-wvideo-whiteboard-explanation

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let longestLen = 0;

  // make hashmap
  const hash = {};
  for (const val of nums) {
    hash[val] = true;
  }

  //iterate and count
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    // if current - 1 is in the hash, then we are not at the lowest number in the possible subsequence
    // this means that when we do get to the lowest number, we will enter the while loop and re-do
    // the calculations we are about to do.
    // so only proceed with the calcs if current is NOT the lowest number
    if (!hash[current - 1]) {
      let len = 1;
      while (current + 1 in hash) {
        len += 1;
        current += 1;
      }
      longestLen = Math.max(longestLen, len);
    }
  }

  return longestLen;
};
