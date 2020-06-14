/*
 * Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴
 * Examples:
 * "civic" should return True
 * "ivicc" should return True
 * "civil" should return False
 * "livci" should return False
 */

// single Pass so O(N) time and worst case O(N) on space if all chars in string are unique
function hasPalindromePermutation(string) {
  let uniques = new Set();

  for (const char of string) {
    if (uniques.has(char)) {
      uniques.delete(char);
    } else {
      uniques.add(char);
    }
  }

  return uniques.size <= 1;
}

// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
