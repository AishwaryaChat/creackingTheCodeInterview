// Ways to send the signal

// Problem Description

// You are trying to send signals to aliens using a linear array of A laser lights. You don't know much about how the aliens are going to percieve the signals, but what you know is that if two consecutive lights are on then the aliens might take it as a sign of danger and destroy the earth.

// Find and return the total number of ways in which you can send a signal without compromising the safty of the earth. Return the ans % 109 + 7.

// Problem Constraints

// 1 <= A <= 10^5

// Input Format

// The only argument given is integer A.

// Output Format

// Return the ans%(109+7).

// Example Input

// Input 1:

//  A = 2
// Input 2:

//  A = 3

// Example Output

// Output 1:

//  3
// Output 2:

//  5

// Example Explanation

// Explanation 1:

//  OFF OFF
//  OFF ON
//  ON OFF
// All lights off is also a valid signal which probably means 'bye'

// Explanation 2:

//  OFF OFF OFF
//  OFF OFF ON
//  OFF ON OFF
//  ON OFF OFF
//  ON OFF ON

let MOD = Math.pow(10, 9) + 7;

// The below recursive solution will not work in case of n > 10^4, since the recursion stack space will exceed out
function recursive(pos, status, n, DP) {
  if (pos === n) return 1;
  const dpKey = `${pos}_${status}`;
  const val = DP[dpKey];
  if (val !== undefined) return val;
  if (status === "ON") {
    DP[dpKey] = recursive(pos + 1, "OFF", n, DP) % MOD;
  } else {
    let off = recursive(pos + 1, "OFF", n, DP) % MOD;
    let on = recursive(pos + 1, "ON", n, DP) % MOD;
    DP[dpKey] = (off + on) % MOD;
  }
  return DP[dpKey];
}

function solve(n) {
  let DP = {};
  let ans1 = recursive(1, "ON", n, DP) % MOD;
  let ans2 = recursive(1, "OFF", n, DP) % MOD;
  return (ans1 + ans2) % MOD;
}

// TC - O(N)
// SC - O(N)
function solve2(n) {
  const DP = new Array(n + 1).fill();
  DP[0] = [0, 0];
  DP[1] = [1, 1];
  console.log(DP);
  for (let i = 2; i <= n; i++) {
    DP[i] = [];
    DP[i][0] = (DP[i - 1][0] % MOD) + (DP[i - 1][1] % MOD);
    DP[i][1] = DP[i - 1][0] % MOD;
  }
  console.log(DP);
  return ((DP[n][0] % MOD) + (DP[n][1] % MOD)) % MOD;
}

// TC - O(N)
// SC - O(1)
function solve2SpaceOptimised(n) {
  let DP0 = [1, 1];
  let DP = [];
  for (let i = 2; i <= n; i++) {
    DP[0] = (DP0[0] % MOD) + (DP0[1] % MOD);
    DP[1] = DP0[0] % MOD;
    DP0 = DP.map((a) => a);
  }
  return ((DP[0] % MOD) + (DP[1] % MOD)) % MOD;
}

const N = 4;
// const N = 224;
// const N = 99951;
// const N = 26;
console.log(solve2SpaceOptimised(N));
