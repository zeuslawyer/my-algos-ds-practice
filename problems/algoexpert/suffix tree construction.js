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
    let curr;
    for (let i = 0; i < string.length; i++) {
      curr = this.root;
      for (let j = i; j < string.length; j++) {
        const char = string[j];
        if (curr[char] === undefined) {
          curr[char] = {};
        }
        curr = curr[char];
      }
      // end of string
      curr[this.endSymbol] = true;
    }
  }

  // contains suffix
  contains(string) {
    let curr = this.root;
    for (let char of string) {
      if (!curr[char]) return false;
      curr = curr[char];
    }

    return curr[this.endSymbol] === true;
  }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
