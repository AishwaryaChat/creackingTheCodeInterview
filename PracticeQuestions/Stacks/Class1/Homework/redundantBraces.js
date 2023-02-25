// Redundant Braces

// Problem Description
// Given a string A denoting an expression. It contains the following operators '+', '-', '*', '/'.

// Check whether A has redundant braces or not.

// NOTE: A will be always a valid expression and will not contain any white spaces.

// Problem Constraints
// 1 <= |A| <= 105

// Input Format
// The only argument given is string A.

// Output Format
// Return 1 if A has redundant braces else, return 0.

// Example Input
// Input 1:

//  A = "((a+b))"
// Input 2:

//  A = "(a+(a+b))"

// Example Output
// Output 1:

//  1
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  ((a+b)) has redundant braces so answer will be 1.
// Explanation 2:

//  (a+(a+b)) doesn't have have any redundant braces so answer will be 0.

function solve(str) {
  var st = [];
  var ans = 0;
  // Iterate through the given expression
  str.split("").forEach((ch) => {
    // if current character is close parenthesis ')'
    if (ch == ")") {
      var top = st[st.length - 1];
      st.pop();

      // If immediate pop have open parenthesis '('
      // duplicate brackets found
      var flag = true;

      while (st.length != 0 && top != "(") {
        // Check for operators in expression
        if (top == "+" || top == "-" || top == "*" || top == "/") flag = false;

        // Fetch top element of stack
        top = st[st.length - 1];
        st.pop();
      }

      // If operators not found
      if (flag == true) {
        ans = 1;
        return ans;
      }
    } else st.push(ch); // push open parenthesis '(',
    // operators and operands to stack
  });
  return ans;
}
