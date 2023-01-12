// Gym Trainer
// Medium
// Problem Description

// You are the trainer of a gym and there are A people who come to your gym.

// Some of them are friends because they walk together, and some of them are friends because they talk together.
// But people become possessive about each other, so a person cannot walk with one friend and talk with another. Although he can walk with two or more people or talk with two or more people.

// You being the trainer, decided to suggest each one of the 2 possible diets. But friends, being friends will always have the same diet as all the other friends are having.

// Find and return the number of ways you can suggest each of them a diet.

// As the number of ways can be huge, return the answer modulo 109+7.

// NOTE: If there is any person who walks with one person and talks with the another person, then you may return 0.

// Problem Constraints

// 1 <= A, N, M <= 105

// 1 <= B[i][0], B[i][1], C[i][0], C[i][1] <= A

// Input Format

// The first argument contains an integer A, representing the number of people.
// The second argument contains a 2-D integer array B of size N x 2, where B[i][0] and B[i][1] are friends because they walk together.
// The third argument contains a 2-D integer array C of size M x 2, where C[i][0] and C[i][1] are friends because they talk together.

// Output Format

// Return an integer representing the number of ways to suggest one of the two diets to the people.

// Example Input

// Input 1:

//  A = 4
//  B = [
//        [1, 2]
//      ]
//  C = [
//        [3, 4]
//      ]
// Input 2:

//  A = 3
//  B = [
//        [1, 2]
//      ]
//  C = [
//        [1, 3]
//      ]

// Example Output

// Output 1:

//  4
// Output 2:

//  0

// Example Explanation

// Explanation 1:

//  There are four ways to suggest the diet:
//  Diet-1 to (1, 2) and Diet-2 to (3, 4).
//  Diet-1 to (1, 2) and Diet-1 to (3, 4).
//  Diet-2 to (1, 2) and Diet-1 to (3, 4).
//  Diet-2 to (1, 2) and Diet-2 to (3, 4).

// Explanation 2:

//  Person 1 walks with person 2 and talks with person 3. So, we will return 0.
// The below solution is given using disjoin sets union
// TC - O(N)
// SC - O(N)
function findRoot(x, parent) {
  if (x === parent[x]) return x;
  parent[x] = findRoot(parent[x], parent);
  return parent[x];
}

function union(x, y, parent) {
  const rx = findRoot(x, parent);
  const ry = findRoot(y, parent);
  if (rx === ry) return false;
  parent[rx] = ry;
  return true;
}

function initParent(A) {
  const parent = new Array(A + 1).fill();
  for (let i = 1; i <= A; i++) {
    parent[i] = i;
  }
  return parent;
}

function solve(A, B, C) {
  const MOD = Math.pow(10, 9) + 7;
  const parent = initParent(A);
  const talkSet = new Map();
  for (let i = 0; i < B.length; i++) {
    const [x, y] = B[i];
    talkSet.set(x);
    talkSet.set(y);
    union(x, y, parent);
  }

  for (let i = 0; i < C.length; i++) {
    const [x, y] = C[i];
    if (talkSet.has(x) || talkSet.has(y)) return false;
    union(x, y, parent);
  }

  for (let i = 1; i <= A; i++) {
    findRoot(i, parent);
  }

  let sets = new Map();
  let setsCount = 0;
  for (let i = 1; i <= A; i++) {
    if (!sets.has(parent[i])) {
      sets.set(parent[i]);
      setsCount++;
    }
  }
  let ans = 1;
  for (let i = 1; i <= setsCount; i++) {
    ans = ((ans % MOD) * 2) % MOD;
  }
  return ans;
}

// const A = 20;
// const B = [
//   [14, 15],
//   [8, 18],
//   [9, 4],
//   [19, 11],
//   [10, 14],
//   [5, 2],
//   [13, 8],
//   [18, 7],
// ];
// const C = [
//   [14, 6],
//   [10, 8],
//   [11, 12],
//   [20, 2],
//   [4, 15],
//   [2, 16],
//   [17, 4],
//   [1, 2],
//   [14, 17],
//   [13, 19],
//   [15, 19],
//   [3, 5],
// ];

const A = 20;
const B = [
  [1, 5],
  [4, 6],
  [18, 3],
  [4, 5],
  [15, 9],
  [15, 4],
];
const C = [
  [13, 20],
  [7, 20],
  [8, 19],
  [13, 7],
  [13, 8],
  [2, 19],
];

// const A = 4;
// const B = [[1, 2]];
// const C = [[3, 4]];
const ans = solve(A, B, C);
console.log(ans);
