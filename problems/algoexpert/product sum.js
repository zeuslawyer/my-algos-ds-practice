/**
 * Write a function that takes in a "special" array and returns its product sum. 
 * A "special" array is a non-empty array that contains either integers or other
 * "special" arrays. The product sum of a "special" array is the sum of its elements, 
 * where "special" arrays inside it should be summed themselves and THEN
 * multiplied by their level of depth. For example, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2y + 2z.

 Sample input: [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
 Sample output: 12 (5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)
 */

function productSum(array, level = 1) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    if (!Array.isArray(current)) {
      sum += current;
    } else {
      sum += productSum(current, level + 1);
    }
  }

  return sum * level;
}

let arr1 = [[[[[5]]]]];
let t = $productSum(arr1);
let a = productSum(arr1);
console.log(t, a);

function $productSum(array) {
  let level = 1;
  let sum = 0;

  return helper(array, level);

  function helper(array, level) {
    for (let i = 0; i < array.length; i++) {
      let curr = array[i];
      if (Array.isArray(curr)) {
        sum += helper(curr, level + 1);
      } else {
        sum += curr 
      }
    }

    return sum*level;
  }
}

console.log($productSum(arr1));
