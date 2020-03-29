// https://leetcode.com/problems/happy-number

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let store = {};

  while (!(n in store)) {
    store[n] = true;
    n = getNext(n);
    if (n === 1) return true;
  }

  return false;
};

function getNext(n) {
  let strArr = n.toString().split('');
  let total = 0;
  for (const num of strArr) {
    total += num * num;
  }

  return total;
}
