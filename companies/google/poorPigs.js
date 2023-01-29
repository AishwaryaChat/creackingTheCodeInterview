// Poor Pigs
// Hard
// company
// Google
// Adobe
// Amazon
// There are buckets buckets of liquid, where exactly one of the buckets is poisonous. To figure out which one is poisonous, you feed some number of (poor) pigs the liquid to see whether they will die or not. Unfortunately, you only have minutesToTest minutes to determine which bucket is poisonous.

// You can feed the pigs according to these steps:

// Choose some live pigs to feed.
// For each pig, choose which buckets to feed it. The pig will consume all the chosen buckets simultaneously and will take no time. Each pig can feed from any number of buckets, and each bucket can be fed from by any number of pigs.
// Wait for minutesToDie minutes. You may not feed any other pigs during this time.
// After minutesToDie minutes have passed, any pigs that have been fed the poisonous bucket will die, and all others will survive.
// Repeat this process until you run out of time.
// Given buckets, minutesToDie, and minutesToTest, return the minimum number of pigs needed to figure out which bucket is poisonous within the allotted time.

// Example 1:

// Input: buckets = 4, minutesToDie = 15, minutesToTest = 15
// Output: 2
// Explanation: We can determine the poisonous bucket as follows:
// At time 0, feed the first pig buckets 1 and 2, and feed the second pig buckets 2 and 3.
// At time 15, there are 4 possible outcomes:
// - If only the first pig dies, then bucket 1 must be poisonous.
// - If only the second pig dies, then bucket 3 must be poisonous.
// - If both pigs die, then bucket 2 must be poisonous.
// - If neither pig dies, then bucket 4 must be poisonous.
// Example 2:

// Input: buckets = 4, minutesToDie = 15, minutesToTest = 30
// Output: 2
// Explanation: We can determine the poisonous bucket as follows:
// At time 0, feed the first pig bucket 1, and feed the second pig bucket 2.
// At time 15, there are 2 possible outcomes:
// - If either pig dies, then the poisonous bucket is the one it was fed.
// - If neither pig dies, then feed the first pig bucket 3, and feed the second pig bucket 4.
// At time 30, one of the two pigs must die, and the poisonous bucket is the one it was fed.

// Constraints:

// 1 <= buckets <= 1000
// 1 <= minutesToDie <= minutesToTest <= 100

// Solution
// Approach 1: Pig as a qubit
// Intuition

// These "strange" questions are now asked by Google, Baidu and IBM because of their interest in quantum computing. Quantum bit (or qubit) is the basic unit of quantum information, it's the quantum version of the classical binary bit. Binary bit has only two states : 0 and 1, and on a very basic level the qubit has more. In such questions we deal with an object (here is a pig) which has more than two states.

// How many states does a pig have
// If there is no time to test, i.e. minutesToTest / minutesToDie = 0, the pig has only one state - alive.
// If minutesToTest / minutesToDie = 1 then the pig has a time to die from the poison, that means that now there are two states available for the pig : alive or dead.
// One more step. If minutesToTest / minutesToDie = 2 then there are three available states for the pig : alive / dead after the first test / dead after the second test.
// The number of available states for the pig is states = minutesToTest / minutesToDie + 1.

// How many buckets could test x pigs with 2 available states

// One pig could test 2 buckets - let's make him drink from the bucket number 1 and then wait minutesToDie time. If he is alive - the poison is in the bucket number 2. If he is dead - the poison is in the bucket number 1.
// The same way two pigs could test 2^2 = 4 buckets
// Hence if one pig has two available states, x pigs could test 2^x buckets.

// How many buckets could test x pigs with s available states

// After the discussion above, the answer is quite obvious : s^x
//   buckets.

// Let's consider as an example one pig with 3 states, i.e. s = minutesToTest / minutesToDie + 1 = 2 + 1 = 3, and show that he could test 3 buckets.

// bla

// bla

// Solution

// Hence the problem is to find x such that states^x ≥ buckets, where x is a number of pigs, states = minutesToTest / minutesToDie + 1 is a number of states available for each pig, and buckets is number of buckets.

// The solution is well known : x ≥ (log(buckets)/log(⁡states))

// Implementation
// class Solution {
//     public int poorPigs(int buckets, int minutesToDie, int minutesToTest) {
//       int states = minutesToTest / minutesToDie + 1;
//       return (int) Math.ceil(Math.log(buckets) / Math.log(states));
//     }
//   }

// Complexity Analysis

// Time complexity : O(1), since it's a constant time solution.
// Space complexity : O(1)

function solve(buckets, minutesToDie, minutesToTest) {
  const availableStates = minutesToTest / minutesToDie + 1;
//   buckets = states ^ number of pigs
  return Math.ceil(Math.log10(buckets) / Math.log10(availableStates));
}
