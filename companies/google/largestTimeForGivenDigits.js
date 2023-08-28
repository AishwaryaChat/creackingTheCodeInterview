// 949. Largest Time for Given Digits
// Medium
// company
// Google
// Amazon
// LiveRamp
// Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// Return the latest 24-hour time in "HH:MM" format. If no valid time can be made, return an empty string.



// Example 1:

// Input: arr = [1,2,3,4]
// Output: "23:41"
// Explanation: The valid 24-hour times are "12:34", "12:43", "13:24", "13:42", "14:23", "14:32", "21:34", "21:43", "23:14", and "23:41". Of these times, "23:41" is the latest.
// Example 2:

// Input: arr = [5,5,5,5]
// Output: ""
// Explanation: There are no valid 24-hour times as "55:55" is not valid.


// Constraints:

// arr.length == 4
// 0 <= arr[i] <= 9

function backtrack(temp, map, maxTime) {
    if (temp.length === 4) {
        const hour = (10 * Number(temp[0])) + Number(temp[1])
        const minutes = (10 * Number(temp[2])) + Number(temp[3])
        const time = hour * 60 + minutes
        if (hour < 24 && minutes < 60 && maxTime.time < time) {
            maxTime.time = time
            maxTime.ans = `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? "0" + minutes : minutes}`
        }

        return
    }
    Object.keys(map).forEach((key) => {
        if (map[key] > 0) {
            temp.push(key)
            map[key]--
            backtrack(temp, map, maxTime)
            temp.pop()
            map[key]++
        }
    })
}

function solve(arr) {
    let map = {}
    for (let num of arr) {
        if (map[num] === undefined) map[num] = 0
        map[num] += 1
    }
    let maxTime = { time: -1, ans: "" }
    backtrack([], map, maxTime)
    return maxTime.ans
}

const arr = [1, 2, 3, 4]
// Output: "23:41"

// const arr = [5,5,5,5]
// Output: ""

console.log(solve(arr))