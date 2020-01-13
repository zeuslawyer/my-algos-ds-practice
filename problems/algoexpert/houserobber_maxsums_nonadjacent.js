
// AKA house robber problem
// https://leetcode.com/problems/house-robber/description/


const input = [75, 105, 120, 75, 90, 135];
const input2 = [105, 75, 120, 75, 90, 135];

// Time and Space:  O(N) and O(N)
function maxSubsetSumNoAdjacent(arr) {
  if (!arr.length) return 0;
  if (arr.length === 1) return arr[0];

  let sumArray = [];
  sumArray[0] = arr[0];
  sumArray[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    sumArray[i] = Math.max(sumArray[i - 1], arr[i] + sumArray[i - 2]);
  }

  return sumArray[sumArray.length - 1];
}

let ans = maxSubsetSumNoAdjacent(input);
console.log(ans);
