// 273. Integer to English Words
// Hard
// Companies
// Microsoft
// Apple
// Amazon
// Oracle
// Convert a non-negative integer num to its English words representation.

// Example 1:

// Input: num = 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"


// Constraints:

// 0 <= num <= 2^31 - 1

// TC - O(N)
// SC - O(1)
function threeDigit(num) {
    let ans = []
    let i = 0
    if (Number(num[0]) !== 0) {
        ans[i++] = getWordOne(num[0])
        ans[i++] = "Hundred"
    }
    const lastNum = num[1] + num[2]
    if (Number(lastNum) >= 20) {
        ans[i++] = getWordGreaterThan20(num[1])
        ans[i++] = getWordOne(num[2])
    } else if (Number(lastNum) >= 10) {
        ans[i++] = getWordLessThan20(lastNum)
    } else {
        ans[i++] = getWordOne(num[2])
    }
    return ans.join(" ").trim()
}

function twoDigit(num) {
    let ans = []
    let i = 0
    const lastNum = num[0] + num[1]
    if (Number(lastNum) >= 20) {
        ans[i++] = getWordGreaterThan20(num[0])
        ans[i++] = getWordOne(num[1])
    } else if (Number(lastNum) >= 10) {
        ans[i++] = getWordLessThan20(lastNum)
    } else {
        ans[i++] = getWordOne(num[1])
    }
    return ans.join(" ").trim()
}

function getNumInWordsFinal(num) {
    if (Number(num) === 0) return ""
    let ans = []
    let i = 0
    if (num.length === 3) {
        ans = threeDigit(num)
    } else if (num.length === 2) {
        ans = twoDigit(num)
    } else {
        ans = getWordOne(num[0])
    }
    return ans
}

function getWordOne(num) {
    switch (Number(num)) {
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
    }
    return "";
}

function getWordLessThan20(num) {
    switch (Number(num)) {
        case 10: return "Ten";
        case 11: return "Eleven";
        case 12: return "Twelve";
        case 13: return "Thirteen";
        case 14: return "Fourteen";
        case 15: return "Fifteen";
        case 16: return "Sixteen";
        case 17: return "Seventeen";
        case 18: return "Eighteen";
        case 19: return "Nineteen";
    }
    return "";
}

function getWordGreaterThan20(num) {
    switch (Number(num)) {
        case 2: return "Twenty";
        case 3: return "Thirty";
        case 4: return "Forty";
        case 5: return "Fifty";
        case 6: return "Sixty";
        case 7: return "Seventy";
        case 8: return "Eighty";
        case 9: return "Ninety";
    }
    return "";
}

function getUnit(curr) {
    switch (curr) {
        case "":
            return "Thousand"
        case "Thousand":
            return "Million"
        case "Million":
            return "Billion"
    }
}

function getNumInWords(words, pos, currNewPos, unit, ans) {
    if (pos < 0) return ans
    if (Number(words[pos]) !== 0) {
        ans[currNewPos--] = unit
    }

    ans[currNewPos--] = getNumInWordsFinal(words[pos--])
    return getNumInWords(words, pos, currNewPos, getUnit(unit), ans)
}

/**
 * @param {number} num
 * @return {string}
 */
var solve = function (num) {
    if (num === 0) return "Zero"
    let newNum = String(num)
    let i = newNum.length
    let words = []
    let j = 0
    while (i > 0) {
        if (i >= 3) {
            words[j++] = newNum.substring(i - 3, i)
            i -= 3
        } else if (i >= 2) {
            words[j++] = newNum.substring(i - 2, i)
            i -= 2
        } else {
            words[j++] = newNum.substring(i - 1, i)
            i -= 1
        }
    }
    words = words.reverse()
    const totalCells = words.length === 1 ? 1 : words.length + words.length - 1
    let ans = getNumInWords(words, words.length - 1, totalCells, "", [])
    ans = ans.filter(ans => !!ans)
    return ans.join(" ").trim()
};

// const num = 123
// Output: "One Hundred Twenty Three"

// const num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"

// const num = 1234567

console.log(solve())