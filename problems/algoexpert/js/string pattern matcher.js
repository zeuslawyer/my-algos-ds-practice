const { assertArrayEquals } = require('../../test/assertEquals');

function patternMatcher(pattern, string) {
  if (string.length < pattern.length) return [];

  // convert pattern to arr
  let patternArr;
  let patternInverted = false;
  if (pattern[0] === 'x') {
    patternArr = pattern.split('');
  } else {
    patternArr = invertPattern(pattern);
    patternInverted = true;
  }

  // build pattern count
  let counts = { x: 0, y: 0 };
  const firstPosOfY = patternArr.indexOf('y');
  for (const char of patternArr) counts[char] += 1;
  const len = string.length;
  // formula:  counts[x] * lenOfX + counts[y] * lenOfY = len

  if (counts['y'] > 0) {
    // test all lengths of x, starting at 1
    for (let i = 1; i < len; i++) {
      let lenOfX = i;
      let lenOfY = (len - counts['x'] * lenOfX) / counts['y'];
      // ensure that lenOfY is not 0 or decimal
      if (lenOfY <= 0 || lenOfY % 1 !== 0) {
        continue;
      }

      let idxY = lenOfX * firstPosOfY;

      const x = string.slice(0, lenOfX);
      const y = string.slice(idxY, idxY + lenOfY);
      const testStr = patternArr.map((char) => (char === 'x' ? x : y));
      // matches

      if (testStr.join('') === string) {
        if (patternInverted) return [y, x];
        else return [x, y];
      }
    }
  } else {
    // y <= 0, so the entire string is a combo of x's
    let lenOfX = len / counts['x'];
    if (lenOfX % 1 === 0) {
      // check if decimal
      const x = string.slice(0, lenOfX);
      const testStr = patternArr.map((char) => x);
      if (testStr.join('') === string) {
        if (patternInverted) return ['', x];
        else return [x, ''];
      }
    }
  }

  // didnt find pattern match
  return [];
}

/**
 *
 * @param {string} pattern
 */
function invertPattern(pattern) {
  // convert x to y and vice versa
  return pattern.split('').map((char) => (char === 'y' ? 'x' : 'y'));
}

let pattern = 'xxyxxy';
let string = 'gogopowerrangergogopowerranger';

const t = patternMatcher(pattern, string);
console.log(t);

assertArrayEquals(t, ['go', 'powerranger'], 'match test?');
