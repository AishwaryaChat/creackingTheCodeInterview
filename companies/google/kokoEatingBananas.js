// Koko Eating Bananas
// Medium
// company
// Amazon
// Salesforce
// Google
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

// Constraints:

// 1 <= piles.length <= 10^4
// piles.length <= h <= 10^9
// 1 <= piles[i] <= 10^9

// TC - O(N log(KMax))
function minimumTimeTakenToEatAllBananas(B, k) {
  let minTime = 0;
  for (let i = 0; i < B.length; i++) {
    minTime += Math.floor(B[i] / k) + (B[i] % k > 0 ? 1 : 0);
  }
  return minTime;
}

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let kMax = Math.max(...piles);
  let kMin = 1;
  while (kMin <= kMax) {
    let k = kMin + Math.floor((kMax - kMin) / 2);
    const timeTaken = minimumTimeTakenToEatAllBananas(piles, k);
    if (timeTaken <= h && minimumTimeTakenToEatAllBananas(piles, k - 1) > h)
      return k;
    if (timeTaken > h) kMin = k + 1;
    else kMax = k - 1;
  }
};

// const piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// const piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// const piles = [30,11,23,4,20], h = 6
// Output: 23

const piles = [312884470];
const h = 312884469;

console.log(minEatingSpeed(piles, h));
