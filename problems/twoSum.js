// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(arr, target) {
  let map = {}; // {num: index}

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    // else save number and index in table
    map[arr[i]] = i;
    // console.log("saving", arr[i], i, map)
  }

  return -1;
}

let res = twoSum([4, 3, 2, 7, 5], 7);

console.log(res);

function __twoSum(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    // console.log('running');

    // if compliment exists, return compliment index and i
    if (hash[nums[i]]) return [hash[nums[i]], i];

    // else, save the compliment
    const compliment = target - nums[i];
    hash[compliment] = i;
  }
  return [];
}

let _res = __twoSum([4, 3, 2, 7, 5], 7);
console.log(_res);
