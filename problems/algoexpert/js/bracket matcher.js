function balancedBrackets(string) {
	let matchingBrackets = {
		")" : "(",
		"}" : "{",
		"]" : "["
	}
	const stack=[]
	for (let i=0; i< string.length; i++){
		// add opening brackets to stack
		let bracket = string[i]
		
		if (bracket === "(" || bracket==="{" || bracket==="["){
			stack.push(bracket)
		} else if (bracket === ")" || bracket==="}" || bracket==="]") {
			// evaluate closing bracket checks
			if(stack.length === 0 ) return false
			
			let popped = stack.pop()
			if(popped !== matchingBrackets[bracket]) return false
		}
	}
	
	return stack.length===0
	
}


const inp1 ="{}(){[]}({})" // true
const inp2 = "{}([]){[}]}({})" // false

console.log(balancedBrackets(inp1))
console.log(balancedBrackets(inp2))