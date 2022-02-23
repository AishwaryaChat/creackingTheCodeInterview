/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    const sortedStr = strs.sort((a,b) => a.length - b.length)
    let longestPrefix = ""
    for(let i=0; i<strs[0].length; i++){
        const prefix = strs[0].slice(0,i+1)
        let prefixFlag = true
        for(let j=1; j<strs.length; j++) {
            let str2 = strs[j].slice(0, i+1)
            if(prefix != str2)  {
                prefixFlag = false
                break
            }
        }
        if(prefixFlag) {longestPrefix = prefix}
        else {
            break
        }
    }
    return longestPrefix
};
const strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))

