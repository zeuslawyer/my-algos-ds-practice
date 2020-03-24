//  https://leetcode.com/problems/word-search-ii/submissions/

const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
];

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let results = new Set();
  const visited = board.map(row => row.map(col => false));

  // build trie
  let trie = {};
  for (const word of words) {
    let node = trie;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.wordEnd = word;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      visit(i, j, board, visited, results, trie);
    }
  }

  return Array.from(results.values());
};

function visit(i, j, board, visited, results, node) {
  if (visited[i][j]) return;

  let char = board[i][j];
  if (!node[char]) return;
  // else
  node = node[char];
  if (node.wordEnd) results.add(node.wordEnd);
  // if (node.wordEnd) results.push(node.wordEnd);
  visited[i][j] = true;
  const neighbours = getNeighbours(i, j, board);
  neighbours.forEach(n => {
    const [r, c] = n;
    visit(r, c, board, visited, results, node);
  });

  // after dfs, mark as unvisited
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

const words = ['oath', 'pea', 'eat', 'rain'];

let ans = findWords(board, words); //["eat","oath"]
console.log('ANS', ans);
