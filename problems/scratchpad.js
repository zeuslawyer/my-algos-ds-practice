// https://leetcode.com/problems/word-search/

class Trie {
  constructor(str) {
    this.root = {};
    this.addString(str);
  }

  addString(string) {
    if (!string) return;

    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.wordEnd = string;
  }

  contains(string) {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (!node[char]) return false;
      node = node[char];
    }
    return node.wordEnd === string;
  }
}
const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const exists = [];
  const visited = Array.from(board, () => Array.from(board[0]).fill(false));
  // const visited = board.map(row => row.map(col => false));

  const trie = new Trie(word);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      visit(i, j, visited, board, trie.root, exists);
    }
  }

  console.log('FINAL WORD ARR', exists);
  return exists.length > 0;
};

function visit(i, j, visited, board, node, exists) {
  if (visited[i][j]) return;

  const char = board[i][j];
  if (!node[char]) return;
  // else
  node = node[char];
  visited[i][j] = true;
  if (node.wordEnd) exists.push(node.wordEnd);

  const neighbours = getNeighbours(i, j, board);
  neighbours.forEach(n => {
    visit(n[0], n[1], visited, board, node, exists);
  });

  visited[i][j] = false;
}

function getNeighbours(r, c, board) {
  const neighbours = [];

  // top
  if (r > 0) neighbours.push([r - 1, c]);
  // bottom
  if (r < board.length - 1) neighbours.push([r + 1, c]);
  // left
  if (c > 0) neighbours.push([r, c - 1]);
  // right
  if (c < board[0].length - 1) neighbours.push([r, c + 1]);

  return neighbours;
}

let ans = exist(board, 'ABCCED');
let ans2 = exist(board, 'ABCB');
console.log('ANS', ans, ans2);
let t = new Trie();
t.addString('zu');
// console.log(t.root);
// console.log(t.contains('zu'));
