// https://leetcode.com/problems/time-needed-to-inform-all-employees/
// https://www.youtube.com/watch?v=6wzOFeeIFKk @7.5 mins

const { assertEquals } = require;
var numOfMinutes = function (n, headID, managers, informTime) {
  let orgGraph = {}; // boss and array of subordinates
  for (let i = 0; i < n; i++) {
    orgGraph[i] = [];
  }
  for (let i = 0; i < managers.length; i++) {
    if (i === headID) continue; // top boss has no manager

    const boss = managers[i];

    // else
    orgGraph[boss].push(i);
  }

  // create tuple for  each employee [id, cumulative inform time for that employee = parents (boss) cumulative inform time + informTime[employee]]
  // boss tuple
  const Q = [[headID, 0 + informTime[0]]]; // 0+1
  let maxTime = 0; // the answer

  // BFS traverse orgChart
  while (Q.length > 0) {
    let [employee, cumulativeTime] = Q.pop();

    maxTime = Math.max(maxTime, cumulativeTime);

    let directReports = orgGraph[employee];

    directReports.forEach((dr) => {
      // new tuple
      const pair = [dr, cumulativeTime + informTime[dr]];

      Q.unshift(pair);
    });
  }

  return maxTime;
};

const n = 15,
  headID = 0,
  managers = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
  informTime = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];

let t = numOfMinutes(n, headID, managers, informTime);

assertEquals(t, 3, 'Example 4 in leetcode: ');
