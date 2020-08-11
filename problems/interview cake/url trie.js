// implement a DS that tracks all the URLs my crawler has visited.  We want to optimize the use of space

// SEE pdf of problem.  https://www.interviewcake.com/question/javascript/compress-url-list

class Trie {
    constructor() {
        this.root = {};
    }

    /** return true if new word. return false if existing word or word is a prefix of existing word */
    addWord(word) {
        let current = this.root;
        let isNewWord = false;
        let wordEnd = "isWordEnd";

        for (const char of word) {
            // char exists
            if (!current[char]) {
                current[char] = {};
                isNewWord = true;
            }

            current = current[char];
        }

        // end of word
        if (!current[wordEnd]) {
            current[wordEnd] = true;

            isNewWord = true;
        }

        return isNewWord;
    }
}

// Tests

const trie = new Trie();

assertEquals(trie.addWord("catch"), true, "new word 1");
assertEquals(trie.addWord("cakes"), true, "new word 2");
assertEquals(trie.addWord("cake"), true, "prefix of existing word");
assertEquals(trie.addWord("cake"), false, "word already present");
assertEquals(trie.addWord("caked"), true, "new word 3");
assertEquals(trie.addWord("catch"), false, "all words still present");
assertEquals(trie.addWord(""), true, "empty word");
assertEquals(trie.addWord(""), false, "empty word present");

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}
