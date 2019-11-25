function longestPrefix(strings) {
  if (strings.length === 0) return '';
  if (strings.length === 1) return strings[0];

  let res = '';

  let first = strings[0]; // use the first word as the basis for comparisons

  for (let key in first) {
    for (let i = 1; i < strings.length; i++) {
      if (!strings[i][key] || strings[i][key] !== first[key]) return res; // check out of bounds or not match
    }
    // all words at index key match first word at index key, so add that char to res
    res += first[key];
  }
  return res;
}

let t = longestPrefix(['leet', 'leeet', 'leetcode', 'leeeek']);
console.log(t);
