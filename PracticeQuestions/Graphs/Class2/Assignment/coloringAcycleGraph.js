/*
Coloring a Cycle Graph

Problem Description
Given the number of vertices A in a Cyclic Graph.

Your task is to determine the minimum number of colors required to color the graph so that no two Adjacent vertices have the same color.



Problem Constraints
3 <= A <= 109



Input Format
First argument is an integer A denoting the number of vertices in the Cyclic Graph.



Output Format
Return an single integer denoting the minimum number of colors required to color the graph so that no two Adjacent vertices have the same color.



Example Input
Input 1:

 5
Input 2:

 4


Example Output
Output 1:

 3
Output 2:

 2


Example Explanation
Explanation 1:

 
 Color required = 3
Explanation 2:

 
 Color required = 2
*/

// TC = O(1), SC = O(1)

function solve(N) {
  return 2 + (N % 2);
}

// const N = 4
const N = 5;
console.log(solve(N));
