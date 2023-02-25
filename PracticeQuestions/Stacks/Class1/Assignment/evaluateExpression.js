/*
Evaluate Expression

Problem Description
An arithmetic expression is given by a character array A of size N. Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each character may be an integer or an operator.



Problem Constraints
1 <= N <= 10^5



Input Format
The only argument given is character array A.



Output Format
Return the value of arithmetic expression formed using reverse Polish Notation.



Example Input
Input 1:
    A =   ["2", "1", "+", "3", "*"]
Input 2:
    A = ["4", "13", "5", "/", "+"]


Example Output
Output 1:
    9
Output 2:
    6


Example Explanation
Explaination 1:
    starting from backside:
    * : () * ()
    3 : () * (3)
    + : (() + ()) * (3)
    1 : (() + (1)) * (3)
    2 : ((2) + (1)) * (3)
    ((2) + (1)) * (3) = 9
Explaination 2:
    + : () + ()
    / : () + (() / ())
    5 : () + (() / (5))
    13 : () + ((13) / (5))
    4 : (4) + ((13) / (5))
    (4) + ((13) / (5)) = 6
*/

function solve(A) {
  let operators = ["+", "-", "*", "/"];
  let st = [];
  let top = -1;
  for (let i = 0; i < A.length; i++) {
    if (operators.indexOf(A[i]) === -1) {
      st.push(A[i]);
      top += 1;
    } else {
      let op1 = Number(st.pop());
      let op2 = Number(st.pop());
      top -= 2;
      let result;
      if (A[i] === "/") {
        result = Math.floor(op2 / op1);
      }
      if (A[i] === "*") {
        result = op2 * op1;
      }
      if (A[i] === "+") {
        result = op2 + op1;
      }
      if (A[i] === "-") {
        result = op2 - op1;
      }
      st.push(result);
      top += 1;
    }
  }
  return st[top];
}

const A = ["2", "1", "+", "3", "*"];

console.log(solve(A));

const B = ["4", "13", "5", "/", "+"]
console.log(solve(B));


