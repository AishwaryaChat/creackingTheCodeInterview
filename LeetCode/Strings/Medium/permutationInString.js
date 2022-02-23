/*
567. Permutation in String
Medium

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// Complexity: O(N^2)
// Solved by myself
var checkInclusion = function(s1, s2) {
    const map = {}
    for(let i=0; i<s1.length; i++) {
        map[s1[i]] = map[s1[i]] ? map[s1[i]]+1 : 1
    }
    let keyCount = Object.keys(map).length
          
    let right = 0
    let left = 0
    
    while(right<s2.length && left<s2.length) {
        if(map[s2[right]]){
            map[s2[right]] -= 1
            if(map[s2[right]] === 0) keyCount-=1
            if(keyCount === 0) return true
            right++
        } else {
            while(right>left) {
                right--
                if(map[s2[right]] !== undefined) {
                if(map[s2[right]] === 0) keyCount++
                map[s2[right]]+=1
            }
            }
            left++
            right = left
        }
    }
    return false
};


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// Complexity O(N)
var checkInclusion2 = function(s1, s2) {
    const mapS1 = Array(26).fill(0)
    const mapS2 = Array(26).fill(0)
    for(let char of s1) mapS1[char.charCodeAt()-97]++ 
    const windowLength = s1.length
    for(let i=0; i<s2.length; i++) {
        mapS2[s2[i].charCodeAt() - 97]++
        if(i>=windowLength) {
            mapS2[s2[i-windowLength].charCodeAt() - 97]--
        }
        if(compareMaps(mapS1, mapS2)) return true
    }
    return false
};

var compareMaps = (s1, s2) => {
    for(let i=0; i<26; i++) {
        if(s1[i]!==s2[i]) return false
    }
    return true
}

// Complexity O(N) where N is length of s2, Modified version of mine
var checkInclusion3 = function(s1, s2) {
    const map = {}
    for(let i=0; i<s1.length; i++) {
        map[s1[i]] = map[s1[i]] ? map[s1[i]]+1 : 1
    }
    let keyCount = Object.keys(map).length
          
    let right = 0
    let left = 0
    let window = s1.length
    
    while(right<=s2.length) {
        if(map[s2[right]]!==undefined){
            map[s2[right]] -= 1
            if(map[s2[right]] === 0) keyCount-=1
        } 
        if(right-left+1 < window) {
            right++
        } else if(right-left+1 === window){
            if(keyCount === 0) return true
            if(map[s2[left]]!==undefined) {
                map[s2[left]]++
                if(map[s2[left]] === 1) keyCount++
            }
            left++
            right++
        }
    }
    return false
};


