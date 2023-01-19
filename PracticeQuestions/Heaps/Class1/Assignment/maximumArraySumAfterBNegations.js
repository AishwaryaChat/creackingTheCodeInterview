/*
Maximum array sum after B negations

Problem Description
Given an array of integers A and an integer B. You must modify the array exactly B number of times. In a single modification, we can replace any one array element A[i] by -A[i].

You need to perform these modifications in such a way that after exactly B modifications, sum of the array must be maximum.



Problem Constraints
1 <= length of the array <= 5*10^5
1 <= B <= 5 * 10^6
-100 <= A[i] <= 100



Input Format
The first argument given is an integer array A.
The second argument given is an integer B.



Output Format
Return an integer denoting the maximum array sum after B modifications.



Example Input
Input 1:

 A = [24, -68, -29, -9, 84]
 B = 4
Input 2:

 A = [57, 3, -14, -87, 42, 38, 31, -7, -28, -61]
 B = 10


Example Output
Output 1:

 196
Output 2:

 362


Example Explanation
Explanation 1:

 Final array after B modifications = [24, 68, 29, -9, 84]
Explanation 2:

 Final array after B modifications = [57, -3, 14, 87, 42, 38, 31, 7, 28, 61]
*/

const { Heap } = require("../../minheapImplementation");

function solve(A, B) {
  let heap = new Heap();
  for (let i = 0; i < A.length; i++) {
    heap.push(A[i]);
  }
  for (let i = 1; i <= B; i++) {
    let ele = heap.peek();
    heap.pop();
    const elementToInsert = ele === 0 ? 0 : -1 * ele;
    heap.push(elementToInsert);
  }
  return heap._heap.reduce((acc, ele) => (acc += ele), 0);
}

// const A = [ -38, 65, 30, 19, 75, -80, -30, 94, -9, 93, 51, 49, 18, -99, -99, 7, -14 ]
// const B = 4097

// const A = [ -70, 71, 69, 5, 97, 85, 68, -2, -27, -63, -8 ]
// const B = 11288

const A = [-18, -79, -54, -12, 77, -73, -27, -46, -8];
const B = 9;

console.log(solve(A, B));
