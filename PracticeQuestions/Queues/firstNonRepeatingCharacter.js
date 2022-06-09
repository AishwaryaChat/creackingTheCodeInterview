/*
First non-repeating character

Problem Description
Given a string A denoting a stream of lowercase alphabets, you have to make a new string B.
B is formed such that we have to find the first non-repeating character each time a character is inserted to the stream and append it at the end to B. If no non-repeating character is found, append '#' at the end of B.



Problem Constraints
1 <= |A| <= 100000



Input Format
The only argument given is string A.



Output Format
Return a string B after processing the stream of lowercase alphabets A.



Example Input
Input 1:

 A = "abadbc"
Input 2:

 A = "abcabc"


Example Output
Output 1:

"aabbdd"
Output 2:

"aaabc#"


Example Explanation
Explanation 1:

"a"      -   first non repeating character 'a'
"ab"     -   first non repeating character 'a'
"aba"    -   first non repeating character 'b'
"abad"   -   first non repeating character 'b'
"abadb"  -   first non repeating character 'd'
"abadbc" -   first non repeating character 'd'
Explanation 2:

"a"      -   first non repeating character 'a'
"ab"     -   first non repeating character 'a'
"abc"    -   first non repeating character 'a'
"abca"   -   first non repeating character 'b'
"abcab"  -   first non repeating character 'c'
"abcabc" -   no non repeating character so '#'
*/

// TC - O(N)
// SC - O(R+R) === O(R), freq array or object and queue

const Queue = require("./arrayImpelemtation")


function solve(A) {
    let ans = []
    let queue = new Queue({})
    let freq = {}
    for(let i=0; i<A.length; i++){
        if(freq[A[i]]) {
            freq[A[i]] += 1
        } else {
            freq[A[i]] = 1
            queue.enqueue(A[i])
        }
        while(freq[queue.frontElement()] > 1) {
            queue.dequeue()
        }
        ans.push(queue.isEmpty() ? "#" : queue.frontElement())
    }
    return ans.join("")
}

// const A = "abadbc"
const A = "abcabc"
console.log(solve(A))