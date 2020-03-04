var topKFrequent = function(words, k) {
    let hash ={}
    for (let word of words){
        hash[word] = hash[word] + 1 || 1
    }
    
    let pq = []
    for(const k in hash){
        pq.push([k, hash[k]])
    }
    
    pq.sort((a,b)=>{
        if(a[1]===b[1]){ // same freq
           return b[0].localeCompare(a[0])
        }
        // else
        return a[1]-b[1]}
           )
    
    let res = []
    while(k > 0){
        let [word,_] = pq.pop()
        res.push(word)
        k--
    }
    
    return res

};





let a = topKFrequent(["i", "love", "leetcode", "i", "love", "coding"],2)
console.log(a) // ["i","love"]

// let t = [[ 'i', 2 ], [ 'love', 2 ]]
// console.log("love".localeCompare("i")) .