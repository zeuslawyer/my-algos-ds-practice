/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
 * design an algorithm to find the maximum profit.
 * Note that you cannot sell a stock before you buy one
 *   https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    let currentPrice = prices[i];
    minPrice = Math.min(minPrice, currentPrice);

    let profit = prices[i] - minPrice;
    maxProfit = Math.max(profit, maxProfit);
  }

  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
let res = maxProfit(prices);
console.log("max profit is ", res);
