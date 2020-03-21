// https://leetcode.com/problems/search-suggestions-system/discuss/498865/JavaScript-Solution-Trie-and-Sort

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

// NOTE:  method 1 - Trie
var suggestedProducts = function(products, searchWord) {
  products.sort();
  let res = [];

  // build the trie
  let trie = {};

  for (const product of products) {
    let node = trie;
    for (const char of product) {
      if (!node[char]) node[char] = {};
      node = node[char];
      if (!node.suggestion) node.suggestion = [];
      if (node.suggestion.length < 3) node.suggestion.push(product);
    }
  }

  // traverse the input word
  let root = trie;
  for (let i = 0; i < searchWord.length; i++) {
    let char = searchWord[i];
    root = root[char];

    if (!root) {
      // char not found, so rest of word wont be available
      while (i < searchWord.length) {
        res.push([]);
        i++;
      }
      break; // exit for loop as word over
    }

    // else
    res.push(root.suggestion);
  }

  return res;
};

// NOTE:  method 2, filtering

var $suggestedProducts = function(products, searchWord) {
  products.sort();
  const res = [];

  for (let i = 0; i < searchWord.length; i++) {
    products = products.filter(p => p[i] === searchWord[i]); // if chars are a match, filter into products
    res.push(products.slice(0, 3));
  }

  return res;
};

const products = ['moneypot', 'monitor', 'mobile', 'mouse', 'mousepad'];
const searchWord = 'mouse';
/**
 * Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
 */

let a = suggestedProducts(products, searchWord);
console.log('TRIE', a);
let b = $suggestedProducts(products, searchWord);
console.log('\n sort and filter...', b);
