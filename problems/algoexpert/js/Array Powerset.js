// https://www.algoexpert.io/questions/Powerset

// Write a function that takes in an array of integers and returns its powerset
// Time O(n. 2^n)
// Space O(n. 2^n)

// NOTE: iterative
function powerset(array) {
    let res = [[]];

    // append the current element in the array to EACH
    // subset in the result powerset array

    for (const num of array) {
        //  use the current len of the results array at the time of processing each num
        // this is similar to level order traversal
        let length = res.length;
        for (let j = 0; j < length; j++) {
            let subset = res[j];
            let newSet = subset.concat(num);
            res.push(newSet);
        }
    }

    return res;
}

// NOTE: recursive- bottom up
function powerset(array) {
    const res = [[]];

    recurseBottomUp(array, 0, res);
    return res;
}

function recurseBottomUp(array, i, res) {
    if (i >= array.length) {
        return res; // base case
    }

    let currentNum = array[i];
    let length = res.length; // similar to level order traversal

    for (let j = 0; j < length; j++) {
        let subset = res[j];
        res.push(subset.concat(currentNum));
    }

    recurseBottomUp(array, i + 1, res);
}

// NOTE: recursive top down
function powerset(array) {
    let res = [[]];
    return recurseTopDown(array, array.length - 1, res);
}

function recurseTopDown(array, i, powersets) {
    // base case
    if (i < 0) {
        return powersets;
    }

    let currentNum = array[i];
    let subsets = recurseTopDown(array, i - 1, powersets);
    let subsetsLen = subsets.length; // similar to level order traversal
    for (let c = 0; c < subsetsLen; c++) {
        let subset = subsets[c];
        subset = subset.concat(currentNum);
        powersets.push(subset);
    }

    return powersets;
}
