// https://www.algoexpert.io/questions/Permutations
// https://drive.google.com/file/d/1NDFBe0X-Pby6Ki6HOkLxa1hqZTrZzzoQ/view?usp=sharing

//   Write a function that takes in an array of unique integers and returns an
//   array of all permutations of those integers in no particular order.
//   If the input array is empty, the function should return an empty array.

function getPermutations(arr) {
    const perms = [];
    helper(0, arr, perms);

    return perms;
}

function helper(i, arr, perms) {
    if (i === arr.length - 1) {
        // base case - array with swapped elements is processed,
        // copy it because it represents a single permutation
        const copy = [...arr];
        perms.push(copy);
    } else {
        for (let j = i; j < arr.length; j++) {
            swapInPlace(i, j, arr);
            helper(i + 1, arr, perms);
            swapInPlace(i, j, arr);
        }
    }
}

function swapInPlace(i, j, arr) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
