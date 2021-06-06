// https://www.algoexpert.io/questions/Index%20Equals%20Value
// https://drive.google.com/file/d/1I1Zo56AEnRv2Dm4FFevl7rbCNwPVKYUb/view?usp=sharing

// Write a function that takes in a sorted array of distinct integers and returns
// the first index in the array that is equal to the value at that index. In
// other words, your function should return the minimum index where index == array[index]

// O(n!*n) time and O(n!*n) space
function indexEqualsValue(arr) {
    // Write your code here.
    let start = 0;
    let end = arr.length;
    let res = -1;

    while (start < end) {
        let midIdx = Math.floor((start + end) / 2);
        let currVal = arr[midIdx];

        if (currVal === midIdx) {
            // check on the left to see if there is previous num that is also == its index
            let prevIdx = midIdx - 1;
            let prevVal = arr[prevIdx];
            if (prevVal === prevIdx) {
                // keep looking to the left
                res = prevIdx;
                end = prevIdx - 1;
            } else {
                // prevVal is < prevIdx so eliminate left side of array as array is sorted
                // current index is therefore the earliest index that meets reqmt
                return midIdx; // midIdx
            }
        } else {
            // update start and end pointers
            if (currVal > midIdx) {
                end = midIdx - 1;
            } else if (currVal < midIdx) {
                start = midIdx + 1;
            }
        }
    }

    return res;
}

// Do not edit the line below.
exports.indexEqualsValue = indexEqualsValue;

const tc1 = [-5, -3, 0, 3, 4, 5, 9];

const got = indexEqualsValue(tc1);

function assert(want, got) {
    want === got
        ? console.log("PASS")
        : console.log(`FAIL:  wanted ${want} but got ${got}}.`);
}
assert(3, got);
assert(2, indexEqualsValue([-5, 1, 0, 3, 4, 5, 9]));
