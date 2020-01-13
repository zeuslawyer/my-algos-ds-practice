// // Coin change 2
// // https://leetcode.com/problems/coin-change-2/

// /**
//  * @param {number} target
//  * @param {number[]} coins
//  * @return {number}
//  */

// var coinChange = function(target, coins) {
//   if (!coins.length) return -1;

//   // create data structure - mapping
//   const targetToNumCoinsMap = new Array(target + 1).fill(Infinity);
//   targetToNumCoinsMap[0] = 0;

//   // iterate over available coins
//   for (let coin of coins) {
//     // iterate over the range of target values 1 to target (incl)
//     for (let targ = 1; targ <= target; targ++) {
//       if (coin <= targ) {
//         // calculate
//         targetToNumCoinsMap[targ] = Math.min(
//           targetToNumCoinsMap[targ],
//           targetToNumCoinsMap[targ - coin] + 1
//         );
//       }
//     }
//   }
//   return targetToNumCoinsMap[target] === Infinity
//     ? -1
//     : targetToNumCoinsMap[target];
// };

// let input = [1, 2, 5];
// let amount = 5;

// let ans = coinChange(7, [2, 4]);
// let ans2 = coinChange(amount, input);
// // let ans = coinChange(amount, input);
// console.log('answer:', ans);
// console.log('answer2:', ans2);
