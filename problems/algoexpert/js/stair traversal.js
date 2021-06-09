// https://www.algoexpert.io/questions/Staircase%20Traversal
// https://drive.google.com/file/d/1LXvNVYp0jnTfMw0B2THojhQaW_bk-Y4m/view?usp=sharing


// Recursion top down
// Time:  O(height * steps) -> N*K
// Space: O(N)
function staircaseTraversal(height, maxSteps) {
    const memo = []
    function numWaysToHeight(h){
        if(h<=1){
            return 1
        }
        if(memo[h]) return memo[h]

        // recurrence relation = f(h) = f(h-1) + f(h-2) + ... + f(h-maxSteps)
        let numWays =  0;
        for(let steps = 1; steps <= Math.min(maxSteps, h), steps++) { // == for(let steps = 1; steps <= maxSteps && steps<= h, steps++)
            numWays += numWaysToHeight(h - steps)
        }
        memo[h] = numWays;
        return numWays
    }
    
    return numWaysToHeight(height)
}

// iterative bottom up
// Time O(Height*maxSteps) || O(N*K)
// space O(N)
function staircaseTraversal(height, maxSteps){
    const numWaysToHeight =[];
    numWaysToHeight[0]=1
    numWaysToHeight[1]=1

    if (height < 2) return numWaysToHeight[height];

    let currentHeight = 2 // start from here since 1 and 2 are already known
    while(currentHeight <= height){
        // recurrence relation is f(h) = f(h-(maxSteps)) + f(h-(maxSteps- 1))+....+f(h-(h))
        // h-(maxSteps) is starting step

        let startingStep = currentHeight > maxSteps ? currentHeight-maxSteps : 0;  // starting step cannot be less than 0.
        // OR... let startingStep = Math.max(0, h-maxSteps)
    
        let numWays = 0
        for(let step = startingStep; step < currentHeight; step++) { // sum up num ways to previous steps
            numWays+= numWaysToHeight[step]
        }
        numWaysToHeight[currentHeight]= numWays
				currentHeight++
    }

    return numWaysToHeight[height]
}