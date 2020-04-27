function knapsackProblem(items, capacity) {
  // const grid = items.map((item) => new Array(capacity + 1).fill(0));
  const grid = Array.from(items).map((row) => new Array(capacity + 1).fill(0));

  const result = [];
  const picked = [];

  for (let i = 0; i < grid.length; i++) {
    const [val, weight] = items[i];
    for (let j = 1; j < capacity + 1; j++) {
      const currentCap = j;
      if (weight > currentCap) {
        // exclude
        grid[i][j] = i > 0 ? grid[i - 1][j] : 0;
      } else {
        if (i === 0) {
          grid[i][j] = val; // current value
        } else {
          const maxValue = Math.max(
            val + grid[i - 1][currentCap - weight],
            grid[i - 1][currentCap]
          );
          grid[i][j] = maxValue;
        }
      }
    }
  }

  const maxValue = grid[grid.length - 1][capacity];
  result[0] = maxValue;

  let row = grid.length - 1;
  let col = grid[0].length - 1;

  const selectedItemsIdxs = [];
  while (row >= 0) {
    // item at this row is included if its grid value !== prev row
    const currentMaxVal = grid[row][col];
    const prevMaxVal = row > 0 ? grid[row - 1][col] : 0;
    if (currentMaxVal !== prevMaxVal) {
      // this item is included
      selectedItemsIdxs.push(row);
      const [_, weight] = items[row];

      row -= 1;
      col -= weight;
    } else {
      // current item excluded so move to previous
      row -= 1;
      console.log('row', row, col);
    }
  }
  result[1] = selectedItemsIdxs.reverse();

  return result;
}

const items = [
  [1, 2],
  [4, 3],
  [5, 6],
  [6, 7],
];
const capacity = 10; // [10,[1,3]]

const _items = [
  [2, 1],
  [70, 70],
  [30, 30],
  [69, 69],
  [100, 100],
];
const _capacity = 100; // [101,[0,2,3]]

let a = knapsackProblem(items, capacity);
console.log(a);

let b = knapsackProblem(_items, _capacity);
console.log(b);
