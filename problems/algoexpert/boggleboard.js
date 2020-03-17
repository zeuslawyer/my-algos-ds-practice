const words = [
  'this',
  'is',
  'not',
  'a',
  'simple',
  'boggle',
  'board',
  'test',
  'REPEATED',
  'NOTRE-PEATED'
];
const output = ['this', 'is', 'a', 'simple', 'boggle', 'board'];

const input = [
  ['t', 'h', 'i', 's', 'i', 's', 'a'],
  ['s', 'i', 'm', 'p', 'l', 'e', 'x'],
  ['b', 'x', 'x', 'x', 'x', 'e', 'b'],
  ['x', 'o', 'g', 'g', 'l', 'x', 'o'],
  ['x', 'x', 'x', 'D', 'T', 'r', 'a'],
  ['R', 'E', 'P', 'E', 'A', 'd', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x']
];

/**
 *
 * time complexity : trie = O(words * lenOfMaxWord). nested for loops = O(MN). DFS recursion - 8 neighbours for
 *  each letter in word so lenOfMaxWord ^^ 8.  So total is O(MN * lenOfMaxWord ^^ 8 + (words * lenOfMaxWord))
 *
 * space complexity:  trie = O(words * lenOfMaxWord). visite matrix = NM.  so total = O(NM + (words * lenOfMaxWord))
 *
 */
function boggleBoard(board, words) {
  // step 1: build trie with all the words
  const trie = new Trie();
  for (let word of words) {
    trie.add(word);
  }

  let visited = board.map(row => row.map(val => false));
  // let visited =  Array.from(board, ()=> new Array(board.length).fill(false))
  let foundWords = {}; // this will produce the returned results

  // step 2:  iterate over the board
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      visit(r, c, trie.root, board, visited, foundWords);
    }
  }

  return Object.keys(foundWords);
}

// step 3  DFS visit neighbours, and after visiting, reset visited to false
function visit(row, col, trieNode, board, visited, foundWords) {
  if (visited[row][col]) return; // do not execute if this is visited

  let char = board[row][col];
  if (!(char in trieNode)) return; // letter is not in current level of the tree so done with dfs

  // else process current letter & check if its a full word match
  visited[row][col] = true;
  trieNode = trieNode[char]; // update level in trie
  let endSymbol = '*';
  if (endSymbol in trieNode) {
    console.log('FOUND IT', endSymbol, trieNode[endSymbol]);
    foundWords[trieNode[endSymbol]] = true;
  } // if the whole word is found, add to result list

  // then process neighbours
  let neighbours = getNeighbours(row, col, board);
  neighbours.forEach(n => {
    let [r, c] = n;
    visit(r, c, trieNode, board, visited, foundWords);
  });

  // after recursion, mark visited as false so that future visits are permitted
  visited[row][col] = false;
}

// helper - get neighbours

function getNeighbours(row, col, board) {
  // diagonal neighbours allowed - so up to 8 neighbours can be found in grid
  let neighbours = []; // pairs of r,c

  let rowStart = 0;
  let colStart = 0;
  let rowEnd = board.length - 1;
  let colEnd = board[0].length - 1;

  // nor west
  if (row > rowStart && col > colStart) {
    neighbours.push([row - 1, col - 1]);
  }
  // nor east
  if (row > rowStart && col < colEnd) {
    neighbours.push([row - 1, col + 1]);
  }

  // sou east
  if (row < rowEnd && col < colEnd) {
    neighbours.push([row + 1, col + 1]);
  }

  // sou west
  if (row < rowEnd && col > colStart) {
    neighbours.push([row + 1, col - 1]);
  }

  // north
  if (row > rowStart) {
    neighbours.push([row - 1, col]);
  }
  // sourth
  if (row < rowEnd) {
    neighbours.push([row + 1, col]);
  }
  // west
  if (col > rowStart) {
    neighbours.push([row, col - 1]);
  }

  // east
  if (col < colEnd) {
    neighbours.push([row, col + 1]);
  }

  return neighbours;
}

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

// let t = new Trie();
// t.add('zubin');
// console.log(t.find('zubin'));

let run = boggleBoard(input, words);
console.log(run); // ['this', 'is', 'a', 'simple', 'boggle', 'board'];
