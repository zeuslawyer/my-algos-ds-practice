// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]

// https://www.youtube.com/watch?v=ED4ateJu86I

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const lastIndexes = {}
  let sizes = []
  const len = S.length
  // build map of last index of each letter
  for(let i=0; i< len; i++ ){
    const char = S[i]
    lastIndexes[char] = i
  }

  // iterate over string and extend last index to include subsequent letters
  //use while loop as you can set iterator value
  let i = 0
  while(i<len){
    let lastInd = lastIndexes[S[i]]
    let j = i+1

    while(j < lastInd){
      lastInd = Math.max(lastInd, lastIndexes[S[j]])
      j++
    }

    // youve found a cluster,push size to sizes then update i
    sizes.push(j-i+1)
    i = j + 1

  }
  return sizes
};



const S= "ababcbacadefegdehijhklij"
const a = partitionLabels(S)
console.log(a) // [9,7,8]