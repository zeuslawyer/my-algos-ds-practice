// given a string, return the string reversed, without using Array.prototype.reverse()

module.exports = str => {
  const stringArr = str.split('');
  let resArr = [];

  for (let i = stringArr.length - 1; i >= 0; i--) {
    resArr.push(stringArr[i]);
  }

  return resArr.join('');
};
