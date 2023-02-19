function countCows(A, minDist) {
  let c1 = A[0];
  let countOfCows = 1;
  for (let i = 1; i < A.length; i++) {
    let dist = A[i] - c1;
    if (dist >= minDist) {
      countOfCows++;
      c1 = A[i]
    }
  }
  return countOfCows;
}

function solve(A, B) {
    A.sort((a, b) => a-b)
  const N = A.length;
  let low = 0;
  let high = A[N - 1] - A[0];
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const count = countCows(A, mid);
    const countMidPlus1 = countCows(A, mid + 1)
    if (count >= B && countCows(A, mid + 1) < B) return mid;
    if (count < B) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
}

const A = [5, 17, 100, 11];
const B = 2;

console.log(solve(A, B));
