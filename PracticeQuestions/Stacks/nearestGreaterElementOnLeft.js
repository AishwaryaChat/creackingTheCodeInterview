const Stack = require("./stack");

function solve(A) {
  // let s = new Stack();
  // let GL = [];
  // const n = A.length
  // while (!s.empty()) s.pop();
  // for (let i = n - 1; i >= 0; i--) {
  //   while (!s.empty() && A[s.peak()] < A[i]) {
  //     GL[s.peak()] = i;
  //     s.pop();
  //   }
  //   s.push(i);
  // }
  // return GL;
    let ans = [];
    let st = new Stack();
    for (let i = 0; i < A.length; i++) {
        while(!st.isEmpty() && A[st.peak()] <= A[i]) st.pop()
        if(st.isEmpty()) ans.push(-1)
        else ans.push(A[st.peak()])
        st.push(i)
    }
    return ans
}

const A = [4, 5, 2, 10, 8];
// console.log(solve(A));

module.exports = solve;
