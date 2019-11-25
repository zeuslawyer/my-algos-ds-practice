class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insertWord(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      let node = current.children.get(char);
      if (!node) {
        // insert
        node = new TrieNode();
        current.children.set(char, node);
      }
      current = node;
    }

    current.isEnd = true;
  }

  findWord(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      let node = current.children.get(char);
      if (!node) return false;

      current = node;
    }

    // word traversed, so if its isEnd === true then it is a word ,else its a substring
    return current.isEnd;
  }
}

let t = new Trie();
t.insertWord('zub');
t.insertWord('apple');

// console.log(t.root.children);
console.log(t.findWord('zu'));
console.log(t.findWord('zub'));
console.log(t.findWord('apple'));
console.log(t.findWord('app'));
