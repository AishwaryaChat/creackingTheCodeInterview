/*
Finish Maximum Jobs

Problem Description
There are N jobs to be done, but you can do only one job at a time.

Given an array A denoting the start time of the jobs and an array B denoting the finish time of the jobs.

Your aim is to select jobs in such a way so that you can finish the maximum number of jobs.

Return the maximum number of jobs you can finish.



Problem Constraints
1 <= N <= 105

1 <= A[i] < B[i] <= 109



Input Format
The first argument is an integer array A of size N, denoting the start time of the jobs.
The second argument is an integer array B of size N, denoting the finish time of the jobs.



Output Format
Return an integer denoting the maximum number of jobs you can finish.



Example Input
Input 1:

 A = [1, 5, 7, 1]
 B = [7, 8, 8, 8]
Input 2:

 A = [3, 2, 6]
 B = [9, 8, 9]


Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

 We can finish the job in the period of time: (1, 7) and (7, 8).
Explanation 2:

 Since all three jobs collide with each other. We can do only 1 job.
*/

// Idea is to finish any job as soon as possible
// So if we start doing the jobs in a sort order of end time
// so 1st job will be completed asap then we can start the next job with second last end time
// In this way we can maximize the number of jobs
// TC = O(NlogN)
// SC = O(1)

function sortAB(A, B) {
  let v = [];
  for (let i = 0; i < A.length; i++) {
    v.push([A[i], B[i]]);
  }
  v.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < v.length; i++) {
    A[i] = v[i][0];
    B[i] = v[i][1];
  }
  return [A, B];
}
function solve(C, D) {
  const [A, B] = sortAB(C, D);

  let end = 0;
  let ans = 0;
  for (let i = 0; i < B.length; i++) {
    if (A[i] >= end) {
      ans++;
      end = B[i];
    }
  }
  return ans;
}

// const A = [1, 5, 7, 1];
// const B = [7, 8, 8, 8];

const A = [4, 4, 8, 15, 6];
const B = [9, 5, 15, 16, 7];

// const A = [3, 2, 6];
// const B = [9, 8, 9];

console.log(solve(A, B));
