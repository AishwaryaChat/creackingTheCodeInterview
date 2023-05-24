// Time Needed to Rearrange a Binary String
// Medium
// company
// Paypal
// Amazon
// You are given a binary string s. In one second, all occurrences of "01" are simultaneously replaced with "10". This process repeats until no occurrences of "01" exist.

// Return the number of seconds needed to complete this process.

// Example 1:

// Input: s = "0110101"
// Output: 4
// Explanation:
// After one second, s becomes "1011010".
// After another second, s becomes "1101100".
// After the third second, s becomes "1110100".
// After the fourth second, s becomes "1111000".
// No occurrence of "01" exists any longer, and the process needed 4 seconds to complete,
// so we return 4.
// Example 2:

// Input: s = "11100"
// Output: 0
// Explanation:
// No occurrence of "01" exists in s, and the processes needed 0 seconds to complete,
// so we return 0.

// Constraints:

// 1 <= s.length <= 1000
// s[i] is either '0' or '1'.

// Follow up:

// Can you solve this problem in O(n) time complexity?

//  TC - O(N^2)
function solve(s) {
  s = s.split("");
  let ans = 0;
  while (true) {
    let flag = false;
    let i = 1;
    while (i < s.length) {
      if (s[i] == "1" && s[i - 1] == "0") {
        flag = true;
        s[i - 1] = "1";
        s[i] = "0";
        i += 2;
      } else {
        i += 1;
      }
    }
    if (!flag) return ans;
    ans += 1;
  }
}

// TC - O(N^2)
// SC - O(1)
function solveSimple(s) {
  let count =  0;
    while(s.indexOf('01')!=-1){
      s = s.replaceAll("01", "10")
        count++;
    }
    return count;
}

// intution - at the end we want the string to look like this - 1111100000, all the ones first then all the zero, according to this the time taken to shift the last one to its correct position should be the answer, we have to see how many zeros are there which are on left of last occurence of one, the answer will be equal to atleast the numbers of zeros to the lesft of last occurance of 1, but not just that for example 011, for second 1 to shift it first have to wait for 1st 1 to shift, so every time we come across 2 consecutive 1's we have to increase waiting time because these 1's cannot be shifting together in one cycle, 
// similarly And everytime we come acress two consequetive zeroes, the waiting time decreases by one.
//  ( consider 0 1 1 0 0 1 The waiting time for the first '1' is 0, for the second '1' is 1 , but for the third '1' is again 0, because while the second '1' was waiting, the third '1' would not waste a turn by moving through the zeroes before it.)
// TC - O(N)
// SC - O(1)
function solveOptimised(s) {
  let waitingTime = 0
    let zeroCount = 0
    let lastOccOf1 = s.lastIndexOf("1")
    for(let i=0; i<=lastOccOf1; i++) {
        if(i>0 && s[i]==="1" && s[i-1]==="1" && zeroCount>0) 
            waitingTime+=1
        if(i>0 && s[i]==="0" && s[i-1]==="0" && waitingTime>0)
            waitingTime-=1
        if(s[i]==="0") zeroCount+=1
    }
    return  zeroCount + waitingTime
}

const s = "0110101";
// Output: 4

// const s = "11100"
// Output: 0

console.log(solve(s));
