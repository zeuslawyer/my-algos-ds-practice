function knapsackProblem(items, capacity) {
  let values = Array.from(items, () => Array(capacity + 1).fill(0));

  for (let i = 0; i < items.length; i++) {
    const [val, weight] = items[i];
    for (let j = 0; j < capacity + 1; j++) {
      const currentCap = j;

      // case 1: item weight exceeds maxCap
      if (weight > currentCap) {
        // exclude this item, by referring to previous row, or 0 if no previous row
        values[i][j] = i > 0 ? values[i - 1][j] : 0;
      } else {
        // item weight is <= maxCap, so include at most 1 unit of this item
        if (i === 0) {
          values[i][j] = val; // first row can only take a max of 1
        } else {
          let value = Math.max(
            values[i - 1][j], // exclude current item, OR
            val + values[i - 1][currentCap - weight]
          );
          values[i][j] = value;
        }
      }
    }
  }

  let lastRow = items.length - 1;
  let lastCol = capacity;

  const res = [values[lastRow][lastCol]];
  const chosen = [];
  const indexes = [];

  while (lastCol > 0 && lastRow >= 0) {
    // ensure first item is handled
    if (
      lastRow > 0 &&
      values[lastRow][lastCol] === values[lastRow - 1][lastCol]
    ) {
      lastRow -= 1; // current item wasnt chosen for knapsack
    } else {
      // include current item
      const currentItem = items[lastRow];
      chosen.push(items[lastRow]);
      indexes.push(lastRow);

      // adjust backpack's capacity to find next item
      lastRow = lastRow--;
      lastCol -= currentItem[1]; // deduct weight from row/cap
    }
  }
  res.push(indexes.reverse());
  console.log(res, chosen);
}

const items = [
  [1, 2],
  [4, 3],
  [5, 6],
  [6, 7]
];
const capacity = 10;
// [10,[1,3]]

const _items = [
  [2, 1],
  [70, 70],
  [30, 30],
  [69, 69],
  [100, 100]
];
const _capacity = 100; // [101,[0,2,3]]

let a = knapsackProblem(items, capacity);
console.log(a);

let b = knapsackProblem(_items, _capacity);
console.log(b);
