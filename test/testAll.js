const expect = require('chai').expect;

const { ALL } = require('../index');

it('should log OK', () => {
  expect(ALL.test()).to.equal('OK');
});

it('should reverse the string', () => {
  expect(ALL.reverseString('malayalam')).to.equal('malayalam');
  expect(ALL.reverseString('rowena')).to.equal('anewor');
});
