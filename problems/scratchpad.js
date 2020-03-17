var BSTIterator = function(root) {
  if (!root) return null;

  this.root = root;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let next = this.root.left;
  this.root = next;
  return next;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return !!this.root.left;
};

var obj = new BSTIterator(100);
// var param_1 = obj.next()
//  var param_2 = obj.hasNext()

console.log(obj);
