function generalizedGCD(num, arr)
{
    let sorted = arr.sort((a,b)=>a-b)
    let smallest = sorted[0]
    
    while (smallest > 1){
        for(let i = 0; i< arr.length; i++){
            let dig = sorted[i]
            // console.log(dig, smallest)
            if (dig%smallest !==0) {
                break;
            } 
            else if (i===arr.length-1) {
                return smallest
            }
        }
         smallest--
    }
    return smallest
    
}

let a = generalizedGCD(5, [12,18,24])
console.log(a)