/**
 * Input: 
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation: 
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl" 
*/

/**
 * @param {string[]} words
 * @return {string | string[]}
 */
var longestWord = function(words) {
  words.sort();
  let set = new Set();
  let res = '';

  for (let word of words) {
    if (word.length === 1 || set.has(word.slice(0, -1))) {
      set.add(word);
      if (word.length > res.length) {
        res = word;
      }
    }
  }
  return res;
};

// var r = longestWord(['w', 'wo', 'wor', 'worl', 'world']); // word
// var r = longestWord(['wor', 'worl', 'world', 'w', 'worla']); // worla
var r = longestWord([
  'm',
  'mo',
  'moc',
  'moch',
  'mocha',
  'l',
  'la',
  'lat',
  'latt',
  'latte',
  'c',
  'ca',
  'cat'
]);

console.log(r);