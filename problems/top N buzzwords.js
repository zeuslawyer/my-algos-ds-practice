// amazon interview question:  https://leetcode.com/discuss/interview-question/460127/

let toys = ['elmo', 'elsa', 'legos', 'drone', 'tablet', 'warcraft'];
let quotes = [
  "Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
  'The new Elmo dolls are super high quality',
  'Expect the Elsa dolls to be very popular this year, Elsa!',
  "Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
  'For parents of older kids, look into buying them a drone',
  'Warcraft is slowly rising in popularity ahead of the holiday season'
];

/**
 * numToys, an integer representing the number of toys
 * topToys, an integer representing the number of top toys your algorithm needs to return;
 * toys, a list of strings representing the toys,
 * numQuotes, an integer representing the number of quotes about toys;
 * quotes, a list of strings that consists of space-sperated words representing articles about toys
 */
function topNBuzzWords(numToys, topToys, toys, numQuotes, quotes) {
  let hash = {};
  for (let toy of toys) {
    hash[toy.toLowerCase()] = 0; // word count in quotes
  }

  for (let sentence of quotes) {
    let words = sentence.split(' ');
    for (let word of words) {
      word = word.replace('!', '').toLowerCase();
      // look for word in hash, and updates its values
      if (word in hash) {
        hash[word] = hash[word] + 1;
      }
    }
  }
  console.log('Hash', hash);
  let result = Object.keys(hash).sort((a, b) => {
    if (hash[a] === hash[b]) {
      return a.localeCompare(b); // ascending order
    }
    // else
    return hash[b] - hash[a]; // descending order
  });

  // meet condition - only include toys mentioned in quotes if topToys > numToys
  return topToys > numToys
    ? result.filter(res => hash[res] > 0)
    : result.slice(0, topToys);
}

const ans = topNBuzzWords(toys.length, 12, toys, quotes.length, quotes);
console.log(ans);

// hash[word.toLowerCase()] = [w, q, b];
