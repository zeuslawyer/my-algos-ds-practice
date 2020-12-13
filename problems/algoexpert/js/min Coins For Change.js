// LEETCODE:  https://leetcode.com/problems/coin-change

const { assertEquals } = require("../../test/assertEquals");

/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var coinChange = function (coins, target) {
  if (coins.length === 0) return -1;

  // create data structure that maps target amounts to minCoins Needed
  let minCoinsToTargetRange = new Array(target + 1).fill(Infinity);
  minCoinsToTargetRange[0] = 0; // min ways to get to a target amount of 0

  for (const coin of coins) {
    // since the target must be greater than coin, initialise target amount to coin and move towards actual target
    for (let targ = coin; targ <= target; targ++) {
      const shortfall = targ - coin;
      minCoinsToTargetRange[targ] = Math.min(
        minCoinsToTargetRange[shortfall] + 1, // <-- this is the the min if we include the current denom coin and then add the shortfall
        minCoinsToTargetRange[targ] // <-- this is the previously calculated min if we exclude the current demon coin
      );
    }
  }

  return minCoinsToTargetRange[target] === Infinity
    ? -1
    : minCoinsToTargetRange[target];
};

let ans = coinChange([1, 5, 10], 7); // 3
assertEquals(ans, 3, "algo expert sample inputs");

let ans2 = coinChange([39, 45, 130, 40, 4, 1], 135);
assertEquals(ans2, 3, "algo expert test case 13");
