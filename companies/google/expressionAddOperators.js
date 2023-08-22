// Expression Add Operators
// Hard
// company
// Google
// Facebook
// Microsoft
// Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.

// Note that operands in the returned expressions should not contain leading zeros.

// Example 1:

// Input: num = "123", target = 6
// Output: ["1*2*3","1+2+3"]
// Explanation: Both "1*2*3" and "1+2+3" evaluate to 6.
// Example 2:

// Input: num = "232", target = 8
// Output: ["2*3+2","2+3*2"]
// Explanation: Both "2*3+2" and "2+3*2" evaluate to 8.
// Example 3:

// Input: num = "3456237490", target = 9191
// Output: []
// Explanation: There are no expressions that can be created from "3456237490" to evaluate to 9191.

// Constraints:

// 1 <= num.length <= 10
// num consists of only digits.
// -2^31 <= target <= 2^31 - 1

// Sources - Leetcode
// Time Complexity: O(N * 4^N)
// 1. At every step along the way, we consider exactly 4 different choices or 4 different recursive paths. The base case is when the value of index reaches N i.e. the length of the nums array. Hence, our complexity would be O(4^N)
// 2. For the base case we use a Array.join() operation in Javascript and that takes O(N) time. Here N represents the length of our expression. In the worst case, each digit would be an operand and we would have N digits and N−1 operators. So O(N). This is for one expression. In the worst case, we can have O(4^N) valid expressions.
// Overall time complexity = O(N×4^N)

// Space Complexity: O(N)
// 1. we have an array data structure that we update on the fly and only for valid expressions do we create a new string and add to our answers array. So, the space occupied by the intermediate list would be O(N) since in the worst case the expression would be built out of all the digits as operands.
// 2. Additionally, the space used up by the recursion stack would also be O(N) since the size of recursion stack is determined by the value of index and it goes from 0 all the way to N.
// 3. We don't consider the space occupied by the answers array since that is a part of the question's requirement and we can't reduce that in any way
function dfs(nums, pos, prevOperand, currOperand, result, target, expression, ans) {
  if (pos === nums.length) {
    if (result === target && currOperand===0) {
      ans.push(expression.map(a => a).join("").slice(1));
      return;
    }
    return;
  }
  currOperand = currOperand * 10 + Number(nums[pos])
  if(currOperand > 0) {
    dfs(nums, pos+1, prevOperand, currOperand, result, target, expression, ans)
  }
  expression.push("+")
  expression.push(`${currOperand}`)
  dfs(nums, pos+1, currOperand, 0, result+currOperand, target, expression, ans)
  expression.pop()
  expression.pop()

  if(expression.length > 0) {
    expression.push("-")
    expression.push(`${currOperand}`)
    dfs(nums, pos+1, -currOperand, 0, result-currOperand, target, expression, ans)
    expression.pop()
    expression.pop()

    expression.push("*")
    expression.push(`${currOperand}`)
    dfs(nums, pos+1, prevOperand * currOperand, 0,
    result-prevOperand+(prevOperand * currOperand),
    target,
    expression,
    ans
    )
    expression.pop()
    expression.pop()
  }
  return ans;
}

function solve(num, target) {
  return dfs(num, 0, 0, 0, 0, target, [], []);
}

// const num = "123";
// const target = 6;
// Output: ["1*2*3","1+2+3"]

const num = "232";
const target = 8;
// Output: ["2*3+2","2+3*2"]
// Explanation: Both "2*3+2" and "2+3*2" evaluate to 8.
// Example 3:

// const num = "3456237490"
// const target = 9191
// Output: []

console.log(solve(num, target));
