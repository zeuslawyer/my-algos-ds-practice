class Trie {
  constructor() {
    this.root = {};
    this.EndSymbol = '*';
  }

  add(word) {
    let node = this.root;
    for (let char of word) {
      if (!(char in node)) node[char] = {};
      node = node[char];
    }
    // end of word
    node[this.EndSymbol] = word;
  }

  find(word) {
    let node = this.root;
    for (const char of word) {
      if (!(char in node)) return false;
      // else
      node = node[char];
    }
    return node[this.EndSymbol] === word;
  }
}

// const input = 'this is a big string';
// const targets = ['this', 'yo', 'is', 'a', 'bigger', 'string', 'kappa'];  // [ true, false, true, true, false, true, false ]
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

const trie = new Trie();
let inputs = input.split(' ');
for (const word of inputs) {
  trie.add(word);
}
console.log(inputs);
for (let i = 0; i < targets.length; i++) {
  let bool = trie.find(targets[i]);
  targets[i] = bool;
}

console.log(targets);
