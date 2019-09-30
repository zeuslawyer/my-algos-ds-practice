module.exports = (string, substring) => {
  let count = 0;
  string = string.toLowerCase();
  substring = substring.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      // break out if inner loop if no first letter match
      if (substring[j] !== string[i + j]) break;

      // if full substring has been looped, then its a match. So increment
      if (j === substring.length - 1) count++;
    }
  }

  return count;
};
