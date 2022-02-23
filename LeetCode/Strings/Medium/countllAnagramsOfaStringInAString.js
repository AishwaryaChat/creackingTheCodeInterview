// Complexity - O(S * P), where S is length of s and P is length of p
var findAnagrams = function(s, p) { 
    const pKeysObj = {}
    const result = []
    for(let i=0; i<p.length; i++) {
        if(pKeysObj[p[i]]) {
           pKeysObj[p[i]]+=1 
        } else {
            pKeysObj[p[i]] = 1
        }
    }
    for(let i=0; i<s.length; i++) {
        let sKeys = {}
        let anagram = true
        for(let j=0; j<p.length; j++) {
            const sKeyIndex = j+i
            if(sKeys[s[sKeyIndex]] && pKeysObj[s[sKeyIndex]] && sKeys[s[sKeyIndex]] > pKeysObj[s[sKeyIndex]]) {
                break
            } else if(sKeys[s[sKeyIndex]]) {
                sKeys[s[sKeyIndex]]+=1
            } else {
                sKeys[s[sKeyIndex]] = 1
            }
        }
        const pKeys = Object.keys(pKeysObj)
        for(let k=0; k<pKeys.length; k++) {
            if(sKeys[pKeys[k]]) {
                if(sKeys[pKeys[k]] !== pKeysObj[pKeys[k]]) {
                    anagram = false
                    break
                }
            } else {
                anagram = false
                break
            }
        }
        
        if(anagram) {
            result.push(i)
        }
    }
    return result
};


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// Basically what are we doing here is we are making a map for p
//  then while iterating through s we are again making a map for s and in each step we are incrementing the count in the map for the encountered character
// and in every iteration we are check if the 2 maps are equivalent with each other, if they are equivalent then we are pushing the calculated i to our result which is (i-targetLength+1), plus 1 because i is 0 based and targetLength is 1 based, so we are just adding up that difference between two
// 2nd condition : Here we are cheching once value of i is greater than equal to length of p that is after the 1st time anagar is searched for target length for the first time, then after that every time we have to also subtract the count for the character which is at the starting of the comparision, and we are doing this in evry loop after i>=3 because everytime we are comparing the maps as well

// This is the best solution I have found

 var findAnagramsLinear = function(s, p) {  // complexity: O(s)
    
    const pCount = Array(26).fill(0),
          sCount = Array(26).fill(0),
          result = [],
          targetLength = p.length
    
    // calculate chars in target string
    for (let char of p) pCount[char.charCodeAt() - 97]++
    
    /* 
        1) loop over every char and add it to currWindow frequency
        2) compare with target frequency
    */
    for (let i=0; i<s.length; i++) {
        const char = s[i]
        
        // add p.length elements to window
        sCount[char.charCodeAt() - 97]++
        
        // remove the char which fell out of window
        console.log("i", i)
        if (i >= targetLength) {
            sCount[s[i-targetLength].charCodeAt() - 97]--
        }
        
        // compare 2 maps
        if (compareMaps(sCount, pCount)) {
            result.push(i-targetLength+1)
        }
    }
    
    return result
};

const compareMaps = (curr, target) => {
    for (let i=0; i<26; i++) {
        if (curr[i] !== target[i]) return false
    }
    
    return true
}

console.log(findAnagramsLinear("cbaebabacd", "abc"))
