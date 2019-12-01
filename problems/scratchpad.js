/**
 * Caesar Cipher Encryptor
Given a non-empty string of lowercase letters and a non-negative integer value representing a key, write a function that returns a new string obtained by
shifting every letter in the input string by k positions in the alphabet, where k is the key. Note that letters should "wrap" around the alphabet; in other words,
the letter "z" shifted by 1 returns the letter "a".

Sample input:"xyz", 2
Sample output:"zab"
 */

function caesarCipherEncryptor(string, key) {
  let maxCode = 'z'.charCodeAt(0);
  let minCode = 'a'.charCodeAt(0) - 1;
  let res = '';

  for (const char of string) {
    let newCode = char.charCodeAt(0) + (key % 26);
    if (newCode > maxCode) {
      newCode = minCode + (newCode % maxCode);
    }
    res += String.fromCharCode(newCode);
  }

  return res;
}

// let t = caesarCipherEncryptor('abc', 52);
// let t = caesarCipherEncryptor('abc', 57);
// let t = caesarCipherEncryptor('xyz', 2); //zab
let t = caesarCipherEncryptor('xyz', 5); //cde
console.log(t);
