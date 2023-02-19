const Stack = require("./stack");

function solve(A) {
  //   let s = new Stack();
  //   let SR = []
  // const n = A.length
  // while (!s.empty()) s.pop();
  // for (let i = 0; i < n; i++) {
  //   while (!s.empty() && A[s.peak()] >= A[i]) {
  //     SR[s.peak()] = i;
  //     s.pop();
  //   }
  //   s.push(i);
  // }
  // return SR;
  let ans = [];
  let st = new Stack();
  for (let i = A.length - 1; i >= 0; i--) {
    while (!st.isEmpty() && A[st.peak()] >= A[i]) st.pop();
    if (st.isEmpty()) {
      ans[i] = -1;
    } else {
      ans[i] = A[st.peak()];
    }
    st.push(i);
  }
  return ans;
}

const A = [4, 5, 2, 10, 8];
// console.log(solve(A));

module.exports = solve;
