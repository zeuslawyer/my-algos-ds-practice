// https://leetcode.com/problems/search-suggestions-system/discuss/498865/JavaScript-Solution-Trie-and-Sort

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

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
      if (!node.suggestions) node.suggestions = [];
      if (node.suggestions.length < 3) node.suggestions.push(product);
    }
  }

  console.log(trie);

  // traverse the input word
  let node = trie;
  for (const char of searchWord) {
    node = node[char];
    let suggestions = node.suggestions;
    res.push(suggestions || []);
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
console.log(a);
