const stockPrices = [10, 7, 5, 8, 11, 9]; // ans 6 - buy $5 sell $11

// an array called stockPrices, where:
// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.
// Write an efficient function that takes stockPrices and returns the best profit I could have made
// from one purchase and one sale of one share of Apple stock yesterday.

function getMaxProfit(stockPrices) {
  if (stockPrices.length <= 1) throw new Error("empty prices");
  let minPrice = stockPrices[0];
  // must buy before we sell, so earliest sell time is index 1, so initial profit is sell-buy
  let maxProfit = stockPrices[1] - stockPrices[0];

  // start from the first possible selling time, which is after index 0 (index 0 is first buy time, buy comes before sell)
  for (let i = 1; i < stockPrices.length; i++) {
    // calculate profit assuming you sold at this price
    const currentPrice = stockPrices[i];
    const profit = currentPrice - minPrice;

    // update maxProfit
    maxProfit = Math.max(profit, maxProfit);
    // update minimum price for future sales
    minPrice = Math.min(currentPrice, minPrice);
  }

  return maxProfit;
}

// Tests

let desc = "price goes up then down";
let actual = getMaxProfit([1, 5, 3, 2]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = "price goes down then up";
actual = getMaxProfit([7, 2, 8, 9]);
expected = 7;
assertEqual(actual, expected, desc);

desc = "price goes up all day";
actual = getMaxProfit([1, 6, 7, 9]);
expected = 8;
assertEqual(actual, expected, desc);

desc = "price goes down all day";
actual = getMaxProfit([9, 7, 4, 1]);
expected = -2;
assertEqual(actual, expected, desc);

desc = "price stays the same all day";
actual = getMaxProfit([1, 1, 1, 1]);
expected = 0;
assertEqual(actual, expected, desc);

desc = "error with empty prices";
const emptyArray = () => getMaxProfit([]);
assertThrowsError(emptyArray, desc);

desc = "error with one price";
const onePrice = () => getMaxProfit([1]);
assertThrowsError(onePrice, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
