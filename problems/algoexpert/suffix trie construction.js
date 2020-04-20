// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.populateSuffixTrieFromIndex(i, string);
    }
  }

  populateSuffixTrieFromIndex(index, string) {
    let curr = this.root;
    for (let j = index; j < string.length; j++) {
      const char = string[j];
      if (curr[char] === undefined) {
        curr[char] = {};
      }
      curr = curr[char];
    }
    // end of string
    curr[this.endSymbol] = true;
  }

  contains(string) {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (!node[char]) return false;
      node = node[char];
    }
    return !!node[this.endSymbol];
  }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
