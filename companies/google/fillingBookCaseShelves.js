// Filling Bookcase Shelves
// Medium
// 1.5K
// 100
// company
// Google
// company
// Bloomberg
// company
// Amazon
// You are given an array books where books[i] = [thicknessi, heighti] indicates the thickness and height of the ith book. You are also given an integer shelfWidth.

// We want to place these books in order onto bookcase shelves that have a total width shelfWidth.

// We choose some of the books to place on this shelf such that the sum of their thickness is less than or equal to shelfWidth, then build another level of the shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down. We repeat this process until there are no more books to place.

// Note that at each step of the above process, the order of the books we place is the same order as the given sequence of books.

// For example, if we have an ordered list of 5 books, we might place the first and second book onto the first shelf, the third book on the second shelf, and the fourth and fifth book on the last shelf.
// Return the minimum possible height that the total bookshelf can be after placing shelves in this manner.

// Example 1:

// Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelf_width = 4
// Output: 6
// Explanation:
// The sum of the heights of the 3 shelves is 1 + 3 + 2 = 6.
// Notice that book number 2 does not have to be on the first shelf.
// Example 2:

// Input: books = [[1,3],[2,4],[3,2]], shelfWidth = 6
// Output: 4

// Constraints:

// 1 <= books.length <= 1000
// 1 <= thicknessi <= shelfWidth <= 1000
// 1 <= heighti <= 1000

// TC - O(N^2)
// SC - O(N)
function solve(books, totalWidth) {
  const N = books.length;
  let dp = new Array(N + 1).fill(0);
  dp[1] = books[0][1];
  for (let i = 2; i <= N; i++) {
    const [width, height] = books[i - 1];
    let currWidth = width;
    dp[i] = dp[i - 1] + height;
    let currentHeight = height;
    for (let j = i - 2; j >= 0; j--) {
      const [width1, height1] = books[j];
      currWidth += width1;
      if (currWidth <= totalWidth) {
        currentHeight = Math.max(currentHeight, height1);
        dp[i] = Math.min(dp[i], currentHeight + dp[j]);
      } else {
        break;
      }
    }
  }
  return dp[N];
}

// const books = [
//   [1, 1],
//   [2, 3],
//   [2, 3],
//   [1, 1],
//   [1, 1],
//   [1, 1],
//   [1, 2],
// ];
// const shelf_width = 4;
const books = [
  [1, 3],
  [2, 4],
  [3, 2],
];
const shelf_width = 6;

console.log(solve(books, shelf_width));
