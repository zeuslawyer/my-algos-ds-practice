function reverseList(list) {
  if (list.length === 0) return list;
  let start = 0;
  let end = list.length - 1;

  while (start < end) {
    let temp = list[start];
    list[start] = list[end];
    list[end] = temp;

    start++;
    end--;
  }

  return list;
}

console.log(reverseList([0, 1, 2, 3]));
console.log(rev([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function rev(nums) {
  for (let i = 0; i < nums.length / 2; i++) {
    let temp = nums[i];
    nums[i] = nums[nums.length - 1 - i];
    nums[nums.length - 1 - i] = temp;
  }

  return nums;
}

rev([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// reverseList([1, 2, 3, 4,5,6,7,8,9,10])

