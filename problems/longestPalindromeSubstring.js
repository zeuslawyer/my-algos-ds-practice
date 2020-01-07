let str = 'abaxyzzyxf';

var longestPalindrome = function(str) {
  let longestPal = str[0];

  for (let i = 1; i < str.length; i++) {
    let oddPal = getLongestPalFrom(str, i - 1, i + 1);
    let evenPal = getLongestPalFrom(str, i - 1, i);
    let longer = oddPal.length > evenPal.length ? oddPal : evenPal;

    longestPal = longestPal.length > longer.length ? longestPal : longer;
  }

  return longestPal;
};

function getLongestPalFrom(str, leftInd, rightInd) {
  while (leftInd >= 0 && rightInd < str.length) {
    if (str[leftInd] !== str[rightInd]) {
      break;
    }

    // else, expand outwards
    leftInd -= 1;
    rightInd += 1;
  }

  // when while loop breaks...
  return str.slice(leftInd + 1, rightInd); // do not include indexes that are not ===
}

let res = longestPalindrome(str);

console.log('answer:  ', res);
