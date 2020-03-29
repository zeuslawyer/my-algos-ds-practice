// https://leetcode.com/discuss/interview-question/344677

class PQ {
  constructor(arr) {
    this.data = arr.sort((a, b) => b - a);
  }
  get length() {
    return this.data.length;
  }

  enque(item) {
    this.data.push(item);
    this.data.sort((a, b) => b - a);
  }

  deque() {
    return this.data.pop();
  }
}

function connectRopes(ropes) {
  if (ropes.length === 0) return 0;
  let Q = new PQ(ropes);

  let cost = 0;
  while (Q.length > 1) {
    console.log(Q.data, cost);

    let first = Q.deque();
    let second = Q.deque();
    const sum = first + second;
    cost += sum;
    Q.enque(sum);
  }

  return cost;
}

const ropes = [8, 4, 6, 12]; // 58

let res = connectRopes(ropes);
console.log(res);
