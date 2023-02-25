/*
Balanced Paranthesis

Problem Description
Given an expression string A, examine whether the pairs and the orders of “{“,”}”, ”(“,”)”, ”[“,”]” are correct in A.

Refer to the examples for more clarity.



Problem Constraints
1 <= |A| <= 100



Input Format
The first and the only argument of input contains the string A having the parenthesis sequence.



Output Format
Return 0 if the parenthesis sequence is not balanced.

Return 1 if the parenthesis sequence is balanced.



Example Input
Input 1:

 A = {([])}
Input 2:

 A = (){
Input 3:

 A = ()[] 


Example Output
Output 1:

 1 
Output 2:

 0 
Output 3:

 1 


Example Explanation
You can clearly see that the first and third case contain valid paranthesis.

In the second case, there is no closing bracket for {, thus the paranthesis sequence is invalid.
*/

function solve (str) {
    let st = []
    let top = -1
    for(let i=0; i<str.length; i++) {
        if(str[i] === "(" || str[i] === "{" || str[i] === "[") {
            st.push(str[i])
            top+=1
        } else {
            if(str[i] === ")") {
                if(st[top] === "(") {
                    st.pop()
                    top -=1
                } else return false
            } else if(str[i] === "}") {
                if(st[top] === "{") {
                    st.pop()
                    top -=1
                } else return false
            } else if(str[i] === "]") {
                if(st[top] === "[") {
                    st.pop()
                    top -=1
                } else return false
            }
        }
    }
    console.log("st", st)
    return top === -1
}

const  A = '{([])}{'
console.log(A, " is valid: ", solve(A))