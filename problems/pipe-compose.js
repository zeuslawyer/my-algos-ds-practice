/**
 * @param {function[]} args
 */
const pipe = (...args) => arg =>
  args.reduce((currVal, func) => func(currVal), arg);

const compose = (...args) => arg =>
  args.reduceRight((curr, func) => func(curr), arg);

module.exports = {
  pipe,
  compose
};
