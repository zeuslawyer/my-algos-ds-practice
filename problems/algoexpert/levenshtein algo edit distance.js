/**
 * Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string. There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.
 *
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
  // insert emtpy spaces
  str1 = ' ' + str1; // input
  str2 = ' ' + str2; // target
  let rows = str1.length;
  let cols = str2.length;

  let edits = Array.from(Array(rows), () => Array(cols));
  edits[0][0] = 0;

  // loop and seed initial values in row 0 and col 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0) edits[row][col] = col;
      if (col === 0) edits[row][col] = row;
    }
  }

  // loop and seed rest of table
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      let inputChar = str1[row];
      let targetChar = str2[col];

      if (inputChar === targetChar) {
        // get northwest val
        edits[row][col] = edits[row - 1][col - 1];
      } else {
        // add 1 to min of (nrth, northwest and west) val
        edits[row][col] =
          1 +
          Math.min(
            edits[row - 1][col],
            edits[row - 1][col - 1],
            edits[row][col - 1]
          );
      }
    }
  }

  console.log(edits);

  return edits[rows - 1][cols - 1];
}

let res = levenshteinDistance(str1, str2);
console.log('result: ', res);
