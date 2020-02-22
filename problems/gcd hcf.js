
// SOLUTION 1:  https://www.tutorialspoint.com/GCD-of-an-array-of-numbers-in-java
function generalizedGCD(num, arr) {
  function gcd(a, b) {
    while (b > 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  let result = gcd(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    result = gcd(result, arr[i]);
  }
  return result;
}
let a = generalizedGCD(5, [12, 18, 24]);
console.log(a);

// SOLUTION 2 less optimal
function $generalizedGCD(num, arr) {
  let sorted = arr.sort((a, b) => a - b);
  let smallest = sorted[0];

  while (smallest > 1) {
    for (let i = 0; i < arr.length; i++) {
      let dig = sorted[i];
      // console.log(dig, smallest)
      if (dig % smallest !== 0) {
        break;
      } else if (i === arr.length - 1) {
        return smallest;
      }
    }
    smallest--;
  }
  return smallest;
}

let $a= generalizedGCD(5, [12, 18, 24]);
console.log($a);
