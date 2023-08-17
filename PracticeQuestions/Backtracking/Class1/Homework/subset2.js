// Subsets II

// Problem Description
// Given a collection of integers denoted by array A of size N that might contain duplicates, return all possible subsets.

// NOTE:

// Elements in a subset must be in non-descending order.
// The solution set must not contain duplicate subsets.
// The subsets must be sorted lexicographically.


// Problem Constraints
// 0 <= N <= 16



// Input Format
// Only argument is an integer array A of size N.



// Output Format
// Return a 2-D vector denoting all the possible subsets.



// Example Input
// Input 1:

//  A = [1, 2, 2]
// Input 2:

//  A = [1, 1]


// Example Output
// Output 1:

//  [
//     [],
//     [1],
//     [1, 2],
//     [1, 2, 2],
//     [2],
//     [2, 2]
//  ]
// Output 2:

//  [
//     [],
//     [1],
//     [1, 1]
//  ]


// Example Explanation
// Explanation 1:

// All the subsets of the array [1, 2, 2] in lexicographically sorted order.

function dfs(A, pos, ans, midAns) {
    if(pos===A.length) {
    ans.push(midAns.map(a =>a))
    // ans.push(midAns.map(a => a))
        return
    }
    // ans.push(midAns.map(a =>a))

    dfs(A, pos+1, ans, midAns);
    midAns.push(A[pos])
    dfs(A, pos+1, ans, midAns);
    midAns.pop()
    
    return ans;
  }

function solve(A) {
    A.sort((a,b)=>a-b)
//     let freq = {};
//   for (let i = 0; i < A.length; i++) {
//     if (!freq[A[i]]) freq[A[i]] = 0;
//     freq[A[i]] += 1;
//   }
let ans = []
    dfs(A, 0, ans, []);
   ans.sort((a, b) => {
    for (let i = 0; i < a.length && i < b.length; i++) {
      if (a[i] !== b[i]) {
        return a[i] - b[i];
      }
    }
    return a.length - b.length;
  });
   return ans
}

 const A = [1, 2, 2] 
// Output :
//  [
//     [],
//     [1],
//     [1, 2],
//     [1, 2, 2],
//     [2],
//     [2, 2]
//  ]

//  A = [1, 1]
// Output :
//  [
//     [],
//     [1],
//     [1, 1]
//  ]


console.log(solve(A))