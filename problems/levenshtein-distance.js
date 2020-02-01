/**
 * Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed
 * on the first string to obtain the second string. There are three edit operations: insertion of a character, deletion of a character,
 * and substitution of a character for another.
 *
 * INTUITION:
 *-create a table that includes an empty string at the start of each string
 *- fill in the top row 0 and the left most col 0
 *- compare each letter to the other. If equal you add 1 to the northwest value in table.  if NOT equal you add 1 to the min of (north, west and nortwest)
 *-  return last cell in table
 */

let str1 = 'abc';
let str2 = 'yabd';

// ans 2

function levenshteinDistance(str1, str2) {
  // insert blank char at start of each
  str1 = ' ' + str1;
  str2 = ' ' + str2;

  let rows = str1.length;
  let cols = str2.length;

  // create a table with intialized vals in 0th row and 0th col
  let edits = Array.from(Array(rows), () => Array(cols));

  for (let i = 0; i < rows; i++) {
    edits[i][0] = i;
  }
  for (let j = 0; j < cols; j++) {
    edits[0][j] = j;
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      let inputChar = str1[row];
      let targetChar = str2[col];

      if (inputChar === targetChar) {
        // get northwest value
        edits[row][col] = edits[row - 1][col - 1];
      } else {
        // get min of north, west and northwest
        edits[row][col] =
          1 +
          Math.min(
            edits[row - 1][col],
            edits[row][col - 1],
            edits[row - 1][col - 1]
          );
      }
    }
  }

  console.log(edits);

  return edits[rows - 1][cols - 1];
}

let ans = levenshteinDistance('yacb', 'abc');
// let ans = levenshteinDistance(str1, str2);
console.log(ans);
