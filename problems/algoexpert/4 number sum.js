// Copyright © 2020 AlgoExpert, LLC. All rights reserved.

// Average: O(n^2) time | O(n^2) space

// Worst: O(n^3) time | O(n^2) space

function fourNumberSum(array, targetSum) {
    const allPairSums = {};
    const quadruplets = [];

    for (let i = 1; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const currentSum = array[i] + array[j];

            const difference = targetSum - currentSum;

            if (difference in allPairSums) {
                for (const pair of allPairSums[difference]) {
                    quadruplets.push(pair.concat([array[i], array[j]]));
                }
            }
        }

        for (let k = 0; k < i; k++) {
            const currentSum = array[i] + array[k];

            if (!(currentSum in allPairSums)) {
                allPairSums[currentSum] = [[array[k], array[i]]];
            } else {
                allPairSums[currentSum].push([array[k], array[i]]);
            }
        }
    }

    return quadruplets;
}

let arr = [7, 6, 4, -1, 1, 2];

let targetSum = 16;

let ans = fourNumberSum(arr, targetSum); // [[7, 6, 4, -1], [7, 6, 1, 2]]
console.log(ans);

let arr2 = [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let targetSum2 = 4;
let ans2 = fourNumberSum(arr2, targetSum2);
console.log(ans2); //[[-2, -1, 1, 6], [-2, 1, 2, 3], [-2, -1, 2, 5], [-2, -1, 3, 4]]

let arr3 = [1, 2, 3, 4, 5];
let targetSum3 = 100;

let ans3 = fourNumberSum(arr3, targetSum3);
console.log(ans3); // []
