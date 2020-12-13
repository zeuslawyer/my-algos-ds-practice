// Do not edit the class below except for
// the insert method. Feel free to add new
// properties and methods to the class.
class ContinuousMedianHandler {
  constructor(value) {
    // Write your code here.
    this.median = null;
    this.numbers = [];
  }

  insert(number) {
    // your code here
    let nums = this.numbers;
    nums.push(number);
    nums.sort((a, b) => a - b); // sort scending
    this.numbers = nums;
    this.median = this.calcMedian(this.numbers);
  }

  getMedian() {
    return this.median;
  }

  calcMedian(input) {
    let len = input.length;
    let med;
    if (len % 2 === 0) {
      let firstInd = len / 2;
      let secondInd = len / 2 - 1;
      med = (this.numbers[firstInd] + this.numbers[secondInd]) / 2;
    } else {
      let first = Math.floor(len / 2);
      med = this.numbers[first];
    }

    return med;
  }
}
