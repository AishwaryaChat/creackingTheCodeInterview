const Stack = require("./stack");

function solve(A) {
  let ans = [];
  let st = new Stack();
  const n = A.length;
  for (let i = n - 1; i >= 0; i--) {
    while (!st.isEmpty() && A[st.peak()] <= A[i]) st.pop();
    if (st.isEmpty()) ans[i] = n;
    else ans[i] = st.peak();
    st.push(i);
  }
  return ans;
}

const A = [4, 5, 2, 10, 8];
// console.log(solve(A));

module.exports = solve;
