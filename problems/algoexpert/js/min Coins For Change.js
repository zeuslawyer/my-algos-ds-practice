// LEETCODE:  https://leetcode.com/problems/coin-change
// https://www.algoexpert.io/questions/Min%20Number%20Of%20Coins%20For%20Change
// https://drive.google.com/file/d/1fCoPJXWZrVg9fwCc11tBENIPKE54AOH8/view?usp=sharing

const { assertEquals } = require("../../test/assertEquals");

/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var coinChange = function (coins, target) {
  if(coins.length === 0) return 0;

  const minWaysToMake = new Array(target + 1).fill(Infinity);
  minWaysToMake[0] = 0; // base case

  for (const coin of coins){
    for(let targ = 0; targ < minWaysToMake.length; targ++){
      if(coin<=targ){
        const minWaysToMakeTarg = minWaysToMake[targ]
        const waysToMakeShortfall = minWaysToMake[targ-coin]
        currentCoinMinQty = 1;
  
        // update ways to make the target if current coin is included
        minWaysToMake[targ] = Math.min(minWaysToMakeTarg, currentCoinMinQty + waysToMakeShortfall)
      }
    }
  }

  // handle infinity case
  if (minWaysToMake[target] === Infinity) return -1
  // else
  return minWaysToMake[target]

};

let ans = coinChange([1, 5, 10], 7); // 3
assertEquals(ans, 3, "algo expert sample inputs");

let ans2 = coinChange([39, 45, 130, 40, 4, 1], 135);
assertEquals(ans2, 3, "algo expert test case 13");
