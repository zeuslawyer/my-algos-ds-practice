// @ts-nocheck

/**
 * Step 1, create a table of the known correlations between integers and roman numerals.  include the 6 edge cases where subtractions are used to create roman numbers
 * Step 2, extract the keys from that table into an array,  and sort  array in descending order
 * Step 3, loop over that array
 * step 4, for every number in the array, create a while loop that runs while number < = the integer.  if yes, then subtract the number from the integer AND append the number's roman number counterpart to the result string
 * step 5, if the while loop has stopped running, check whether the integer is within range - if its <=0 then we are done. break out of the outer for loop, otherwise continue the for loop
 * step 6, return the result
 * 
 */

 // constraints :  int will be positive, in range from 1 to 3999

 // https://leetcode.com/problems/integer-to-roman/


 // Step 1
const table = {
  '1000': 'M',
  '900': 'CM',
  '500': 'D',
  '400': 'CD',
  '100': 'C',
  '90': 'XC',
  '50': 'L',
  '40': 'XL',
  '10': 'X',
  '9': 'IX',
  '5': 'V',
  '4': 'IV',
  '1': 'I'
}

/**
 * @param {number} int
 * @return {string}
 */
function intToRoman(int){
  let result = '' // roman numbers must be represented as string
  // step 2
  let nums =  Object.keys(table).sort((a,b)=>b-a)

  //step 3
  for(let i=0; i<nums.length; i++){
    let num = nums[i]

    // step 4
    while(num <= int) {
      int -= num
      result+= table[num]
    }

    // step 5
    if(num <=0) break
  }

  // step 6
  return result
}

let t = intToRoman(2430)
console.log(t)

console.log(intToRoman(402))
