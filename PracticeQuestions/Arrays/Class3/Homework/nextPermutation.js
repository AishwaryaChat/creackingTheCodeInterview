/*
Next Permutation

Problem Description
Implement the next permutation, which rearranges numbers into the numerically next greater permutation of numbers for a given array A of size N.

If such arrangement is not possible, it must be rearranged as the lowest possible order, i.e., sorted in ascending order.

NOTE:

The replacement must be in-place, do not allocate extra memory.
DO NOT USE LIBRARY FUNCTION FOR NEXT PERMUTATION. Use of Library functions will disqualify your submission retroactively and will give you penalty points.


Problem Constraints
1 <= N <= 5 * 10^5

1 <= A[i] <= 10^9



Input Format
The first and the only argument of input has an array of integers, A.



Output Format
Return an array of integers, representing the next permutation of the given array.



Example Input
Input 1:

 A = [1, 2, 3]
Input 2:

 A = [3, 2, 1]


Example Output
Output 1:

 [1, 3, 2]
Output 2:

 [1, 2, 3]


Example Explanation
Explanation 1:

 Next permutaion of [1, 2, 3] will be [1, 3, 2].
Explanation 2:

 No arrangement is possible such that the number are arranged into the numerically next greater permutation of numbers.
 So will rearranges it in the lowest possible order.
*/

// The idea here is to find a decreasing graph point from right side of array
// so if a[i] < a[i+1] then we stop and mark it as x
// now in the right half of x position of array we will find the just greater element than the element at position x, and then we will swap these 2
// now reverse the array from position x+1 till end of the array
// we are doing the last step because we found the increasing graph from right in step 1
// now if we will reverse that we will get the smallest forming sequence by reversing those elements

// TC - O(N)
// SC - O(1)

function solve(A) {
  let x;
  for (let i = A.length - 1; i > 0; i--) {
    if (x === undefined) {
      if (A[i - 1] < A[i]) {
        x = i - 1;
        break;
      }
    }
  }
  if (x !== undefined && A.length <= 2) {
    let temp = A[x];
    A[x] = A[x + 1];
    A[x + 1] = temp;
    return A;
  }
  if (x && A.length > 2) {
    let z = -1;
    let minDiff = Number.MAX_SAFE_INTEGER;
    for (let i = x + 1; i < A.length; i++) {
      if (A[i] > A[x]) {
        let diff = A[i] - A[x];
        if (diff < minDiff) {
          minDiff = diff;
          z = i;
        }
      }
    }

    let temp = A[x];
    A[x] = A[z];
    A[z] = temp;
    for (let i = x + 1, j = A.length - 1; i < j; i++, j--) {
      [A[i], A[j]] = [A[j], A[i]];
    }
    return A;
  }
  return A.sort();
}

// const A = [1, 2, 3]
// const A = [3, 2, 1]
// const A = [20, 21, 8, 80, 34, 11]
// const A = [
//   444, 994, 508, 72, 125, 299, 181, 238, 354, 223, 691, 249, 838, 890, 758, 675,
//   424, 199, 201, 788, 609, 582, 979, 259, 901, 371, 766, 759, 983, 728, 220, 16,
//   158, 822, 515, 488, 846, 321, 908, 469, 84, 460, 961, 285, 417, 142, 952, 626,
//   916, 247, 116, 975, 202, 734, 128, 312, 499, 274, 213, 208, 472, 265, 315,
//   335, 205, 784, 708, 681, 160, 448, 365, 165, 190, 693, 606, 226, 351, 241,
//   526, 311, 164, 98, 422, 363, 103, 747, 507, 669, 153, 856, 701, 319, 695, 52,
// ];

// const A = [1, 5, 8, 4, 7, 6, 5, 3, 1];

const A = [237, 542];

console.log(solve(A));
