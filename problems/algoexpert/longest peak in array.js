// https://www.algoexpert.io/questions/Longest%20Peak

function longestPeak(array) {
  let longestPeak = 0;
  // start at 1 and end at len-2 because first and last cannot be tip of peak
  for (let i = 1; i < array.length - 1; i++) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];

    if (isPeak) {
      // check left slope
      let leftIdx = i - 2;
      while (array[leftIdx] < array[leftIdx + 1] && leftIdx >= 0) {
        leftIdx--;
      }
      // check right slope
      let rightIdx = i + 2;
      while (array[rightIdx] < array[rightIdx - 1] && rightIdx < array.length) {
        rightIdx++;
      }

      const peakLen = rightIdx - 1 - leftIdx; // rightIdx was incremented past the edge of peak so back 1

      longestPeak = Math.max(longestPeak, peakLen);
    }
  }
  return longestPeak;
}
