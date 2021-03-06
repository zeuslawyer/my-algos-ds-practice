// https://www.youtube.com/watch?v=8LusJS5-AGo
// formula at 13:57 and 9 mins, and backtrack at 11:35
// formula at 16 mins in algoexpert video

/**
 *
 * @param {*} items - array of Value, Weight  integers
 * @param {*} capacity max capacity of the container
 * @returns Array [total value of selected items, Array[index of selected items] ]
 */
function knapsackProblem(items, capacity) {
  // buid matrix, fill with zeros. Rows = capacity from 0 <=  capacity
  let grid = items.map((row) => new Array(capacity + 1).fill(0));
  // const grid = Array.from(items).map((row) => new Array(capacity + 1).fill(0));
  // console.log(grid);

  for (let i = 0; i < items.length; i++) {
    // skip column 0 as it will always have zero items (being zero capacity)
    const [val, weight] = items[i]; // current item combo
    for (let j = 1; j < capacity + 1; j++) {
      const maxCap = j;
      // formula - if weight greater, then take previous row (i.e. exclude this item).
      if (weight > maxCap) {
        grid[i][j] = i > 0 ? grid[i - 1][j] : 0; // first row with W>C must be 0
      } else {
        //  if W<=C then Math.max formula applies
        if (i === 0) {
          grid[i][j] = val; // first row can only be 1s where weight i< capacity limit
        } else {
          const maxValue = Math.max(
            // grid[prevrow][col] == excluding current item.
            // OR include this item, but container has less capacity, so find next fittable item
            // (i.e. item other than current one, and which has weight <= remaining capacity () )
            grid[i - 1][maxCap],
            val + grid[i - 1][maxCap - weight]
          );
          grid[i][j] = maxValue;
        }
      }
    }
  }

  const maxValue = grid[grid.length - 1][capacity];
  const result = [maxValue];

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
