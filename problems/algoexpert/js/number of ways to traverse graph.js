https://www.algoexpert.io/questions/Number%20Of%20Ways%20To%20Traverse%20Graph
https://drive.google.com/file/d/1N0kV9SjtPh_oTPx6bz2jngFacjGwrmx2/view?usp=sharing

// ** Dynamic Programming ** 
// Time: O(2^(W+H))   | Space: O(W + H)
function numberOfWaysToTraverseGraph(width, height) {
	const numberOfWays = []
	for (let i=0; i < height+1; i++){
		numberOfWays[i] = new Array(width+1).fill(0)
	}
	
		for(let r = 1; r < height+1; r++){
			for(let c =1; c < width+1; c++){
				
			if(r === 1 || c === 1){
				numberOfWays[r][c] = 1;
			} else {
				numberOfWays[r][c] = numberOfWays[r-1][c] +  numberOfWays[r][c-1]; 
			}
		}
	}
  
	return numberOfWays[height][width];
}




// ** RECURSION ** 
// Time: O(2^(W+H))   | Space: O(W + H)
// function numberOfWaysToTraverseGraph(width, height) {
//   // Write your code here.
//   if (width ===1 || height === 1) return 1
	
// 	return numberOfWaysToTraverseGraph(width-1, height) + numberOfWaysToTraverseGraph(width, height-1)
// }

// Do not edit the line below.
exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;
