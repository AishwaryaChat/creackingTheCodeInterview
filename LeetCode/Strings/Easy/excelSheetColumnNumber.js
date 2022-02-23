/*
171. Excel Sheet Column Number
Easy

2741

250

Add to List

Share
Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnTitle = "A"
Output: 1
Example 2:

Input: columnTitle = "AB"
Output: 28
Example 3:

Input: columnTitle = "ZY"
Output: 701
 
Input: columnTitle = "AAZ"
Output: 728

Constraints:

1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].
*/

/**
 * @param {string} columnTitle
 * @return {number}
 */
// Complexity - O(n)
 var titleToNumber = function(columnTitle) {
    let result = 0
    for(let i=columnTitle.length-1, j=0; i>=0;i--, j++) {
     let charAtI = columnTitle.charCodeAt(i) - 64
     result += Math.pow(26, j) * charAtI
    }
    return result
};

// Recursion
var titleToNumberRecursive = function(s) {
    return calculateTitleToNumber(s, 0);
};

function calculateTitleToNumber(s,depth) {
        if(s.length === 0) return 0
        else {
            let charAtI = s.charCodeAt(s.length-1) - 64
            return charAtI * Math.pow(26, depth) + calculateTitleToNumber(s.slice(0,s.length-1), depth+1)
        }
    }