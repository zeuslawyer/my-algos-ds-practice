// https://leetcode.com/problems/top-k-frequent-words/

// https://leetcode.com/problems/top-k-frequent-words/discuss/444221/JavaScript-Solution

var topKFrequent = function(words, k) {
  let hash = {}
  for(const word of words){
    hash[word] = hash[word] + 1 || 1
  }

  let sorted = Object.keys(hash).sort((a,b)=>{
    // if equal frequency, sort by increasing alphabetical order
    if(hash[a]===hash[b]){
      return a.localeCompare(b)
    }
    // sort in descreasing freq order
    return hash[b] - hash[a]
  })

  return sorted.slice(0,k)
}


const a = topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4)

console.log(a) // ["the", "is", "sunny", "day"]