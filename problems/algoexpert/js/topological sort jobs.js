function topologicalSort(jobs, deps) {
  let graph = {};
  let depCounts = {};
  let sorted = [];
  let Q = []; // unshift, pop

  // instantiate graph and depCounts
  jobs.forEach((job) => {
    graph[job] = [];
    depCounts[job] = 0;
  });

  // populate graph and depCounts
  for (let [first, second] of deps) {
    graph[first].push(second);

    depCounts[second]++;
  }

  // add to Q any job that has 0 prior deps
  for (let job of jobs) {
    if (depCounts[job] === 0) Q.unshift(job);
  }

  while (Q.length > 0) {
    let currentJob = Q.pop();
    sorted.push(currentJob);

    let neighbours = graph[currentJob];
    neighbours.forEach((n) => {
      depCounts[n]--; // decrement its indegrees by 1
      if (depCounts[n] === 0) Q.unshift(n); // if now 0, add to Q
    });
  }
  // console.log('RESULT:  ', sorted)

  // check if cyclical
  if (jobs.length === sorted.length) return sorted;
  return [];
}

// Do not edit the line below.
exports.topologicalSort = topologicalSort;
