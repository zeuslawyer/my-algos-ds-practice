class Trie {
  constructor() {
    this.root = {};
  }

  createSuffixTrie(string) {
    for (let i = 0; i < string.length; i++) {
      let node = this.root;
      for (let j = i; j < string.length; j++) {
        let char = string[j];
        if (!node[char]) node[char] = {};
        node = node[char];
      }
      node.stringEnd = string;
    }
  }
  contains(string) {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (!node[char]) return false;

      node = node[char];
    }
    // sub-string matched without returning false
    return true;
  }
}

function multiStringSearch(bigString, smallStrings) {
  const trie = new Trie();
  trie.createSuffixTrie(bigString);

  return smallStrings.map((small) => trie.contains(small));
}

// let test = new $Trie();
// test.createSuffixTrie(input);
// // console.log(test.contains('Mary'));
