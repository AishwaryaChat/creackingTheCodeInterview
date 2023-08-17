function recurse(N, pos, sum, dp, nums, ans1) {
  const key = `${pos}_${sum}`;
//   if (dp[key] !== undefined) return dp[key];
  if (sum === 0) {
    if (pos === N) {
        ans1.push(nums.map(a => a))
        return 1;
    }
    return 0;
  }
  if (pos === N) return 0;

  ans = 0;
  for (let i = 0; i <= sum && i<=9; i++) {
    ans += recurse(N, pos + 1, sum - i, dp, nums.concat(i), ans1);
  }
  dp[key] = ans;
  return ans;
}

function solve(N, sum) {
  const dp = { 0: 0 };
 for(let i=1;i<=N;i++) {
    for(let s=0;s<=sum;s++) {
        
    }
 }
  return ans;
}

const N = 3;
const sum = 10;
console.log(solve(N, sum));
