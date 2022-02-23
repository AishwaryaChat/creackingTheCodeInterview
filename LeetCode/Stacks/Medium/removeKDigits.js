/*
402. Remove K Digits
Medium

Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

 

Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 

Constraints:

1 <= k <= num.length <= 10^5
num consists of only digits.
num does not have any leading zeros except for the zero itself.
*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
    let stack = []
    let i =0
    while(i<num.length) {
        const char = Number(num[i])
        while(stack.length > 0 && stack[stack.length-1]>char && k>0){
            stack.pop()
            k-=1
        }
        if(stack.length>0 || char!== 0) stack.push(char)
        i++
    }
    const stackLength = stack.length
    if(stackLength>0 && k>0){
        while(k>0) {
            stack.pop()
            k-=1
        }
    }
    if(stack.length === 0) return '0'
    return stack.join('')
};