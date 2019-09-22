const test = require('./problems/test');
console.log('logging...', test());

exports.ALL = {
  test: require('./problems/test'),
  reverseString: require('./problems/reverseString')
};
