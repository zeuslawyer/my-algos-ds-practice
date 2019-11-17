// There are a total of n courses you have to take, labeled from 0 to n-1.
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// Input: 2, [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.


// basically a circular detection problem in a directed graph

// REFERENCE:  https://www.youtube.com/watch?v=u4v_kvOfumU

function courseTaker(numCourses, prereqs){

  // create datastructures
  let courseDirectedGraph = new Map()
  for(let[course, dep] of prereqs){
      courseDirectedGraph.set(dep, course)
  }
  console.log(courseDirectedGraph)
}




courseTaker(4, [ [0,1], [0,2], [1,3], [2,3]] )