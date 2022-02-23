const compareMaps = (s1,s2) => {
    console.log("s1", s1)
    console.log("s2", s2)
    let count = 0
    for(let i=0; i<26;i++) {
        if(count>2) return false
        if(s1[i]!==s2[i]) {
            count++
        }
    }
    console.log("count", count)
    if(count === 2) return true
    return false
}

/**
* @param {string} beginWord
* @param {string} endWord
* @param {string[]} wordList
* @return {number}
*/
var ladderLength = function(beginWord, endWord, wordList) {
const length = wordList.length
if(wordList[length-1] !== endWord) return 0
    let map = Array(26).fill(0)
    // console.log("ARR", map)
    for(let char of beginWord) map[char.charCodeAt()-97]++

// console.log("ARR", map)
let count = 0
for(let i=0; i<wordList.length; i++) {
    let s2Map = Array(26).fill(0)
    for(let char of wordList[i] ) {
        let charCode = char.charCodeAt() - 97
        s2Map[charCode]++
    }
    if(compareMaps(map, s2Map)) {
        count+=1
        map=s2Map
    }
    
}
return count === 0 ? count : count+1
};


let beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","jim", "cog"]
console.log(ladderLength(beginWord, endWord, wordList))

