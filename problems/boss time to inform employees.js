// https://leetcode.com/problems/time-needed-to-inform-all-employees/
// https://www.youtube.com/watch?v=6wzOFeeIFKk @7.5 mins

/**
 * A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company has is the one with headID.
 * Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1.
 * Also it's guaranteed that the subordination relationships have a tree structure.
 * The head of the company wants to inform all the employees of the company of an urgent piece of news. He will inform his direct subordinates and
 * they will inform their subordinates and so on until all employees know about the urgent news.
 * The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e After informTime[i] minutes, all his
 * direct subordinates can start spreading the news).
 * Return the number of minutes needed to inform all the employees about the urgent news.
 */
const { assertEquals } = require('../test/assertEquals');

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} managers
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, managers, informTime) {
  // build org chart
  const directReportsOf = {};

  for (let i = 0; i < n; i++) {
    directReportsOf[i] = [];
  }

  // build direct reports in org chart
  for (let i = 0; i < managers.length; i++) {
    const employee = i;
    if (employee === headID) continue; // head does not have a boss

    const manager = managers[employee];
    // if(manager === -1) continue // already handled above
    directReportsOf[manager].push(employee);
  }

  // create tuple for each employee, with their id, and the TOTAL time to inform that employee
  const head = [headID, informTime[headID]];
  let maxTime = 0; // final answer, and time is always positive

  // BFS
  const Q = [head];
  while (Q.length > 0) {
    let [emp, totalTimeUntilEmp] = Q.pop();

    // update max time with the greater of last stored and current emp's total
    maxTime = Math.max(maxTime, totalTimeUntilEmp);

    // add emp's subordinates to Q
    const subords = directReportsOf[emp];

    subords.forEach((minion) => {
      let pair = [minion, informTime[minion] + totalTimeUntilEmp];
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

assertEquals(t, 3, 'Example 4 in leetcode has answer of "3": ');

let pp = numOfMinutes(
  8,
  0,
  [-1, 5, 0, 6, 7, 0, 0, 0],
  [89, 0, 0, 0, 0, 523, 241, 519]
);

assertEquals(pp, 612, 'A Test case in leetcode has answer of "612": ');
