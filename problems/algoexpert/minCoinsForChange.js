// LEETCODE:  https://leetcode.com/problems/coin-change

/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var coinChange = function(coins, target) {
  if (coins.length === 0) return -1;

  // create data structure that maps target amounts to minCoins Needed
  let amountToMinCoins = new Array(target + 1).fill(Infinity);
  amountToMinCoins[0] = 0;

  for (const coin of coins) {
    for (let amount = 1; amount <= target; amount++) {
      if (coin <= amount) {
        amountToMinCoins[amount] = Math.min(
          amountToMinCoins[amount],
          amountToMinCoins[amount - coin] + 1
        );
      }
    }
  }

  return amountToMinCoins[target] === Infinity ? -1 : amountToMinCoins[target];
};

let input = [1, 2, 5];
let amount = 5;

let ans = coinChange( [2, 4], 7);
let ans2 = coinChange(input, amount);
console.log('answer:', ans);
console.log('answer2:', ans2);
