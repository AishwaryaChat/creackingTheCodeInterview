const Stack = require("./stack");

function solve(A) {
    let ans = [];
    let st = new Stack();
    for (let i = 0; i < A.length; i++) {
        while(!st.isEmpty() && A[st.peak()] <= A[i]) st.pop()
        if(st.isEmpty()) ans.push(-1)
        else ans.push(st.peak())
        st.push(i)
    }
    return ans
}

const A = [4, 5, 2, 10, 8];
// console.log(solve(A));

module.exports = solve;
