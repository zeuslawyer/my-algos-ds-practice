
/**
 * Given two array of integers(the first array is array A, the second array is array B), now we are going to find 
 * a element in array A which is A[i], and another element in array B which is B[j],
 *  so that the difference between A[i] and B[j] (|A[i] - B[j]|) is as small as possible, return their smallest difference.
 * 
 *  For example, given array A = [3,6,7,4], B = [2,8,9,3], return 0
 * https://www.hackingnote.com/en/interview/problems/the-smallest-difference
 * 
 */


 // O(N LogN) -> assuming sort is nLogn
function smallestDifference(arrOne, arrTwo) {
  arrOne = arrOne.sort((a, b)=> a-b)
  arrTwo = arrTwo.sort((a, b)=> a-b)
	let res = []
	
	let minDiff = Infinity
	
	let left = 0
	let right = 0
	
	while (left< arrOne.length && right < arrTwo.length){
		let leftNum = arrOne[left]
		let rightNum = arrTwo[right]

		// edge case, diff=0
		if(leftNum === rightNum) {
			// diff is 0, this is the min absolute possibe
			res=[leftNum, rightNum]
			return res
		}
		
		let diff = Math.abs(leftNum - rightNum)
		if(diff < minDiff){
			// update results
			res = [leftNum, rightNum]
			// update minDiff
			minDiff = diff
		}
		
		// case 1
		if (leftNum < rightNum){
			// increase left pointer to reduce the diff between nums, as arrays are sorted
			left++
		} else {
			right++
		}
	}
	
	return res
	
}	

const t= smallestDifference([-1,5,10,20,28,3], [26,134,135,15,17])  // [28, 26]
console.log(t)
