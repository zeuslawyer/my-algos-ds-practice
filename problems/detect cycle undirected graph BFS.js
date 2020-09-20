const uGraphCycle = [[1], [0, 2, 3], [1, 4, 5], [1], [2, 5], [2, 4]];

const uGraphNoCycle = [[1], [0, 2, 3], [1, 4, 5], [1], [2], [2]];

/**
 * BFS
 * trick - every node has one of three states - and if its "IN Q" then cycle exists
 * then it is a cycle UNLESS V is the parent of U
 * ALTERNATIVELY Does this undirected graph have a cycle? Run BFS, keeping track of the number of times we're visiting each node.
 * If we ever visit a node twice, then we have a cycle.
 * @param {Array} - where index represents node, and its elements denote the adjacency list
 */
function BFSdetectCycleUndirectedGraph(graph) {
    let inQ = "In Queue";
    let VISITED = "VISITED";

    let status = {};
    let Q = [0];
    status[0] = inQ;

    while (Q.length > 0) {
        let node = Q.pop();
        status[node] = VISITED;
        let neighbours = graph[node];
        for (let i = 0; i < neighbours.length; i++) {
            let n = neighbours[i];
            if (status[n] === inQ) return true; // cycle!
            if (status[n] !== VISITED) {
                Q.unshift(n);
                status[n] = inQ;
            }
        }
    }

    return false;
}

let a = BFSdetectCycleUndirectedGraph(uGraphCycle);
let b = BFSdetectCycleUndirectedGraph(uGraphNoCycle);

console.log(
    "Answer for BFS with cyclical graph :",
    a === true ? "PASS" : "FAIL"
); // true
console.log(
    "Answer for BFS with NO cyclical graph :",
    b === false ? " PASS" : "FAIL"
); // false
