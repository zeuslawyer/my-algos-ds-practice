function multiStringSearch(bigString, smallStrings) {
  let trie = new suffixTrie(bigString);

  for (let i = 0; i < smallStrings.length; i++) {
    smallStrings[i] = trie.contains(smallStrings[i]);
  }
  return smallStrings;
}

class suffixTrie {
  constructor(string) {
    this.root = {};
    this.constructSuffixTrie(string);
  }

  constructSuffixTrie(string) {
    for (let i = 0; i < string.length; i++) {
      let node = this.root;
      this.insertSubStrings(i, string, node);
    }
  }

  insertSubStrings(idx, string, node) {
    // let node = this.root;

    for (let i = idx; i < string.length; i++) {
      let char = string[i];
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.wordEnd = true;
  }

  contains(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node[char]) return false;
      node = node[char];
    }
    return true;
  }
}

const input = 'Mary goes to the shopping center every week.';
const targets = [
  'to',
  'Mary',
  'centers',
  'shop',
  'shopping',
  'string',
  'kappa'
]; // [ true, true, false, true, true, false, false ]

let a = multiStringSearch(input, targets);
console.log(' ANSWER', a);
