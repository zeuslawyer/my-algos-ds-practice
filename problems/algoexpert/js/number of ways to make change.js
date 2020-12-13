const { assertEquals } = require("../../test/assertEquals");

// O(n ∗ m) time and O(n)O(n) additional space
function numberOfWaysToMakeChange(target, wallet) {
  if (!wallet.length) return 0;

  // start by making an array where the indices is 0...target and the value at each index is the number of ways of getting that target.
  let waysToTarget = new Array(target + 1).fill(0);

  waysToTarget[0] = 1; // # of ways to get to target of 0 => only 1 way!

  // iterative over the wallet
  //   for (let denom of wallet) {
  //     for (let currentTarg = 1; currentTarg <= target; currentTarg++) {
  //       if (currentTarg < denom) continue;

  //       // else incremement
  //       waysToTarget[currentTarg] += waysToTarget[currentTarg - denom];
  //       // console.log( currentTarg, denom,waysToTarget)
  //     }
  //   }
  for (let denom of wallet) {
    // since targ  needs to be greater than denom to make the target from the denom
    // start counting from the denom and move upwards till fill the array until input target is reached
    for (let currentTarg = denom; currentTarg <= target; currentTarg++) {
      // since the second for loop guarantees that the currentTarg is >= the current denom
      // we know that there will be a range of shortfalls from denom ... target
      // increment the ways to the current targ by an amount equal to the shortfall between the targ and the denom because thats whats left over
      const shortfall = currentTarg - denom;
      waysToTarget[currentTarg] += waysToTarget[shortfall];
    }
  }

  return waysToTarget[target]; // last item in the array
}

let t = numberOfWaysToMakeChange(4, [1, 5, 10, 25]); // 1
let u = numberOfWaysToMakeChange(5, [1, 5, 10, 25]);

assertEquals(t, 1, "Test case 5");
assertEquals(u, 2, "Test case 6");
