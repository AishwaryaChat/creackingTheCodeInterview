// Minimum Space Wasted From Packaging

// company
// Google
// Amazon
// You have n packages that you are trying to place in boxes, one package in each box. There are m suppliers that each produce boxes of different sizes (with infinite supply). A package can be placed in a box if the size of the package is less than or equal to the size of the box.

// The package sizes are given as an integer array packages, where packages[i] is the size of the ith package. The suppliers are given as a 2D integer array boxes, where boxes[j] is an array of box sizes that the jth supplier produces.

// You want to choose a single supplier and use boxes from them such that the total wasted space is minimized. For each package in a box, we define the space wasted to be size of the box - size of the package. The total wasted space is the sum of the space wasted in all the boxes.

// For example, if you have to fit packages with sizes [2,3,5] and the supplier offers boxes of sizes [4,8], you can fit the packages of size-2 and size-3 into two boxes of size-4 and the package with size-5 into a box of size-8. This would result in a waste of (4-2) + (4-3) + (8-5) = 6.
// Return the minimum total wasted space by choosing the box supplier optimally, or -1 if it is impossible to fit all the packages inside boxes. Since the answer may be large, return it modulo 109 + 7.

// Example 1:

// Input: packages = [2,3,5], boxes = [[4,8],[2,8]]
// Output: 6
// Explanation: It is optimal to choose the first supplier, using two size-4 boxes and one size-8 box.
// The total waste is (4-2) + (4-3) + (8-5) = 6.
// Example 2:

// Input: packages = [2,3,5], boxes = [[1,4],[2,3],[3,4]]
// Output: -1
// Explanation: There is no box that the package of size 5 can fit in.
// Example 3:

// Input: packages = [3,5,8,10,11,12], boxes = [[12],[11,9],[10,5,14]]
// Output: 9
// Explanation: It is optimal to choose the third supplier, using two size-5 boxes, two size-10 boxes, and two size-14 boxes.
// The total waste is (5-3) + (5-5) + (10-8) + (10-10) + (14-11) + (14-12) = 9.

// Constraints:

// n == packages.length
// m == boxes.length
// 1 <= n <= 10^5
// 1 <= m <= 10^5
// 1 <= packages[i] <= 10^5
// 1 <= boxes[j].length <= 10^5
// 1 <= boxes[j][k] <= 10^5
// sum(boxes[j].length) <= 10^5
// The elements in boxes[j] are distinct.

// TC - O(N^3)
// SC - O(1)
function solve(packages, boxes) {
  let minimumSpaceWasted = Number.MAX_SAFE_INTEGER;
  for (let j = 0; j < boxes.length; j++) {
    let totalSpaceWasted = 0;
    for (let i = 0; i < packages.length; i++) {
      let minSpaceWastedForPackage = Number.MAX_SAFE_INTEGER;
      for (let k = 0; k < boxes[j].length; k++) {
        if (packages[i] <= boxes[j][k]) {
          minSpaceWastedForPackage = Math.min(
            minSpaceWastedForPackage,
            boxes[j][k] - packages[i]
          );
        }
      }
      totalSpaceWasted += minSpaceWastedForPackage;
    }
    minimumSpaceWasted = Math.min(totalSpaceWasted, minimumSpaceWasted);
  }
  return minimumSpaceWasted === Number.MAX_SAFE_INTEGER
    ? -1
    : minimumSpaceWasted;
}

function getIndexOfLargestFittingPackage(packages, boxSize) {
  let low = 0;
  let high = packages.length - 1;
  while (low < high) {
    const mid = Math.ceil((high + low) / 2);
    if (packages[mid] <= boxSize) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

// TC - O(PlogP + N*((M logM)+ (MlogP))), 
// where P is length of packages
// N is number of box suppliers,
// 
// M is number of boxes for a supplier

// In below solution we are finding the most appropriate box for a set of packages, and calculating the space wasted for that set of packages with the selected box, we keep adding the total wasted space and at the end we check if current wasted space is less than previous one, so we replace the answer

function solveOptimized(packages, boxSuppliers) {
  packages.sort((a, b) => a - b);
  let acc = 0;
  const packagesPrefixSum = packages.map((e) => {
    acc += e;
    return acc;
  });
  let minimumSpaceWasted = Number.MAX_SAFE_INTEGER;
  for (let boxes of boxSuppliers) {
    boxes.sort((a, b) => a - b);
    if (boxes[boxes.length - 1] < packages[packages.length - 1]) continue;
    let lastUsedIndex = -1;
    let totalWastedSpace = 0;
    for (boxSize of boxes) {
      const largestPackageIndex = getIndexOfLargestFittingPackage(
        packages,
        boxSize
      );
      const numPackagesToBox = largestPackageIndex - lastUsedIndex;
      if (numPackagesToBox === 0) continue;
      const lastPrefixSum =
        lastUsedIndex === -1 ? 0 : packagesPrefixSum[lastUsedIndex];
      const spaceWasted =
        numPackagesToBox * boxSize -
        (packagesPrefixSum[largestPackageIndex] - lastPrefixSum);
      totalWastedSpace += spaceWasted;
      lastUsedIndex = largestPackageIndex;
    }
    minimumSpaceWasted = Math.min(minimumSpaceWasted, totalWastedSpace);
  }
  return minimumSpaceWasted;
}

// const packages = [2, 3, 5];
// const boxes = [
//   [4, 8],
//   [2, 8],
// ];
// Output: 6

// const packages = [2,3,5]
//  const boxes = [[1,4],[2,3],[3,4]]
// Output: -1

const packages = [3, 5, 8, 10, 11, 12];
const boxes = [[12], [11, 9], [10, 5, 14]];
// Output: 9

console.log(solveOptimized(packages, boxes));
// packages[(3, 5, 8, 10, 11, 12)];
// packagesPrefixSum[(3, 8, 16, 26, 37, 49)];
// boxes = [5, 10, 14];
