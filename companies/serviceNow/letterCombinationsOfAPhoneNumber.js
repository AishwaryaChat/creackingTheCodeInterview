// Letter Combinations of a Phone Number
// Medium
// company
// Amazon
// Apple
// Microsoft
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// TC - O(4^N * N)
// SC - O(N)

function backTrack(pos, digits, ans, temp, map, N) {
    if(pos === N) {
        ans.push(temp.join(""))
        return
    }
    const options = map[digits[pos]]
    for(let i=0; i<options.length; i++) {
        temp.push(options[i])
        backTrack(pos+1, digits, ans, temp, map, N)
        temp.pop()
    }
}

function solve(digits) {
    const n = digits.length
    if(n === 0) return []
    const map = {
        1: [],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    let ans = []
    backTrack(0, digits, ans, [], map, n)
    return ans
}

const digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// const digits = ""
// Output: []

// const digits = "2"
// Output: ["a","b","c"]

console.log(solve(digits))