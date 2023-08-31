// 1363. Largest Multiple of Three
// Hard
// Companies
// Google
// Given an array of digits digits, return the largest multiple of three that can be formed by concatenating some of the given digits in any order. If there is no answer return an empty string.

// Since the answer may not fit in an integer data type, return the answer as a string. Note that the returning answer must not contain unnecessary leading zeros.



// Example 1:

// Input: digits = [8,1,9]
// Output: "981"
// Example 2:

// Input: digits = [8,6,7,1,0]
// Output: "8760"
// Example 3:

// Input: digits = [1]
// Output: ""


// Constraints:

// 1 <= digits.length <= 10^4
// 0 <= digits[i] <= 9


// TLE
function dfs(digits, pos, mod, temp, dp, ans) {
    if (pos > digits.length) {
        if (mod === 0) {
            if (temp.length === 0) return Number.MIN_SAFE_INTEGER
            return Number(temp.join(""))
        }
        return Number.MIN_SAFE_INTEGER
    }
    const key = `${pos}_${mod}_${temp.join("")}`
    if (dp[key] !== undefined) return dp[key]
    dp[key] = Number.MIN_SAFE_INTEGER

    let resultWith = dfs(digits, pos + 1, (mod + digits[pos]) % 3, temp.concat(digits[pos]), dp, ans)
    let resultWithout = dfs(digits, pos + 1, mod, temp, dp, ans)
    const result = Math.max(ans.ans, resultWith, resultWithout)
    ans.ans = result
    return dp[key] = result
}

var solve = function (digits) {
    const sum = digits.reduce((acc, a) => acc + a, 0)
    if (sum === 0) return "0"
    digits.sort((a, b) => b - a)
    if (sum % 3 === 0) return digits.join("")

    let dp = {}
    let ans = {ans: Number.MIN_SAFE_INTEGER}
    const ans1 = dfs(digits, 0, 0, [], dp, ans)
    return ans1 === Number.MIN_SAFE_INTEGER ? "" : String(ans1)
};

// Accepted solution

function solve(digits, ind, mod, dp) {
    if (ind >= digits.length) {
        if (mod === 0) return "";
        return "-";
    }
    
    if (dp[ind][mod] !== "") return dp[ind][mod];
    
    const withVal = solve(digits, ind + 1, (mod + digits[ind]) % 3, dp);
    const withoutVal = solve(digits, ind + 1, mod, dp);
    
    if (withVal === "-") return dp[ind][mod] = withoutVal;
    
    if (withoutVal === "-") {
        if (withVal === "-") return withVal;
        return dp[ind][mod] = digits[ind] + withVal;
    }
    
    let result;
    if (withoutVal.length > withVal.length + 1) {
        result = withoutVal;
    } else {
        result = digits[ind] + withVal;
    }
    
    return dp[ind][mod] = result;
}

function largestMultipleOfThree(digits) {

digits.sort((a, b) => b - a);
    
    const sum = digits.reduce((acc, curr) => acc + curr, 0);
    if (sum === 0) return "0";
    
    if (sum % 3 === 0) {
        let number = "";
        for (let i = 0; i < digits.length; ++i) {
            number += digits[i];
        }
        return number;
    }
    
    let dp = new Array(digits.length + 1).fill("").map(() => new Array(3).fill(""));
    const ans = solve(digits, 0, 0, dp);
return ans === "" ? ans : Number(ans) === 0 ? "0" : ans
};


// const digits = [8,1,9]
// Output: "981"

// const digits = [8, 6, 7, 1, 0]
// Output: "8760"

// const digits = [1]
// Output: ""
// const digits = [0, 0, 0, 1]

// const digits = [0]

const digits = [1,1,1,2]

console.log(solve(digits))