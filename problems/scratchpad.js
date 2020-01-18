const inp1 = [2, 3, -2, 4]; // 6

var maxProductKadane = function(arr) {
  let maxSoFar = arr[0];
  let minSoFar = arr[0];
  let maxProd = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let currentMin = minSoFar;
    let currentMax = maxSoFar;

    minSoFar = Math.min(current, currentMin * current, maxSoFar * current);

    maxSoFar = Math.max(current, currentMin * current, currentMax * current);

    maxProd = Math.max(maxProd, maxSoFar);
  }

  return maxProd;
};

const ans = maxProductKadane(inp1);
console.log(ans);
