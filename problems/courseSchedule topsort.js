// There are a total of n courses you have to take, labeled from 0 to n-1.
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// Input: 2, [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.

// basically a circular detection problem in a directed graph - NOTE:  use Kahn's algorithm (BFS) to get the top sort + check circularity

// REFERENCE:  https://www.youtube.com/watch?v=u4v_kvOfumU

function courseTaker(numCourses, prereqs) {
  let graph = {}; // the graph of courses
  let inDegrees = {}; // using kahns algorithm to count incoming links
  let Q = [];
  let sorted = []; // top sort
  // initialise data structures and ensure ALL subjects are there as keys

  // step 1:  generate a graph that shows how many deps each course has [ the in-degrees for each course]
  for (let [course, dep] of prereqs) {
    if (!graph[dep]) graph[dep] = [];
    if (!graph[course]) graph[course] = [];
    graph[dep].push(course);
    // add all courses to depCount map
    if (!inDegrees[course]) inDegrees[course] = 0;
    if (!inDegrees[dep]) inDegrees[dep] = 0;
    // add to the courses dep count
    inDegrees[course]++;
  }
  // console.log(inDegrees, graph);

  // step 2:  find the course with zero incoming links, and add that to Queue
  for (let course in inDegrees) {
    if (inDegrees[course] === 0) Q.unshift(course); // add courses with zero deps (zero in-degrees) to queue
  }

  // step 3:  while QUEUE has something, add it to the sorted array
  while (Q.length) {
    let currentCourse = Q.pop();
    sorted.push(currentCourse);

    // get neighbours and decrement their incoming links count
    let neighbours = graph[currentCourse];
    neighbours.forEach((neighbour) => {
      inDegrees[neighbour]--;
      if (inDegrees[neighbour] === 0) {
        Q.unshift(neighbour);
      }
    });
  }

  if (sorted.length === numCourses) return sorted;
  // else
  return false; // is cyclical
}

let result = courseTaker(4, [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4],
]);

let fail = courseTaker(2, [
  [0, 1],
  [1, 0],
]);

console.log(result);
console.log(fail);
