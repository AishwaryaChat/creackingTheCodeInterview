// Allocate Books
// Solved

// Problem Description
// Given an array of integers A of size N and an integer B.

// The College library has N books. The ith book has A[i] number of pages.

// You have to allocate books to B number of students so that the maximum number of pages allocated to a student is minimum.

// A book will be allocated to exactly one student.
// Each student has to be allocated at least one book.
// Allotment should be in contiguous order, for example: A student cannot be allocated book 1 and book 3, skipping book 2.
// Calculate and return that minimum possible number.

// NOTE: Return -1 if a valid assignment is not possible.

// Problem Constraints
// 1 <= N <= 105
// 1 <= A[i], B <= 10^5

// Input Format
// The first argument given is the integer array A.
// The second argument given is the integer B.

// Output Format
// Return that minimum possible number.

// Example Input
// A = [12, 34, 67, 90]
// B = 2

// Example Output
// 113

// Example Explanation
// There are two students. Books can be distributed in following fashion :

// 1)  [12] and [34, 67, 90]
//     Max number of pages is allocated to student 2 with 34 + 67 + 90 = 191 pages
// 2)  [12, 34] and [67, 90]
//     Max number of pages is allocated to student 2 with 67 + 90 = 157 pages
// 3)  [12, 34, 67] and [90]
//     Max number of pages is allocated to student 1 with 12 + 34 + 67 = 113 pages
//     Of the 3 cases, Option 3 has the minimum pages = 113.

// We are dividing the question in two parts
// 1st parth is to find the minimum number of people required to assign all books, if a person can be given only a fixed maximum number of pages
// We get this from function countPeople
// The second part is to find the minimum number of pages for given people
// TC - O(N log(pMax))
function countPeople(B, maximumPagesPerPerson) {
  let people = 1;
  let pagesAllocated = 0;
  for (let i = 0; i < B.length; i++) {
    pagesAllocated += B[i];
    if (pagesAllocated > maximumPagesPerPerson) {
      pagesAllocated = B[i];
      people += 1;
    }
  }
  return people;
}
function solve(A, B) {
  // if number of books are less than people, then there cannot be a possible allocation
  if (A.length < B) return -1;
  let pMax = A.reduce((acc, a) => {
    acc += a;
    return acc;
  }, 0);
  let pMin = Math.max(A[0]);
  while (pMin <= pMax) {
    const mid = pMin + Math.floor((pMax - pMin) / 2);
    let people = countPeople(A, mid);
    if (people === B && countPeople(A, mid - 1) > B) return mid;
    if (people > B) pMin = mid + 1;
    else pMax = mid - 1;
  }
}

const A = [12, 34, 67, 90];
const B = 2;
// Output - 113

console.log(solve(A, B));
