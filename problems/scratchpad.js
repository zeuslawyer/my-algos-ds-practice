function longestPalindromicSubstring(str) {
  let answer = str[0];

  for (let i = 0; i < str.length; i++) {
    let oddPal = getLongestPalFrom(str, i - 1, i + 1);
    let evenPal = getLongestPalFrom(str, i - 1, i);

    let longer = evenPal.length > oddPal.length ? evenPal : oddPal;
    answer = longer.length > answer.length ? longer : answer;
  }

  return answer;
}

function getLongestPalFrom(str, leftInd, rightInd) {
  // look for left and right indexes of longest substring
  while (leftInd >= 0 && rightInd < str.length) {
    if (str[leftInd] !== str[rightInd]) break;

    // else
    leftInd--;
    rightInd++;
  }

  let pal = str.slice(leftInd + 1, rightInd);
  return pal;
}

let a = longestPalindromicSubstring('abaxyzzyxf'); //xyzzyx

let b = longestPalindromicSubstring('z234a5abbba54a32z'); //5abbba5
console.log(b);
console.log(longestPalindromicSubstring('aaaaa'));
console.log(a);
