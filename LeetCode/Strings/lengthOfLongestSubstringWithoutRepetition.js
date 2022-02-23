function lengthOfLongestSubstring(str)
    {
        let start = 0;
        let end = 0;
        let maxLength = 0;
        let map = {}
        while(end<str.length){
            const char = str[end]
            if(map[char]!==undefined) {
                // because the map[char] found might be in the very starting(even back than start), in which case we have to leave that occurence and start should be after that only
                // but in case our start is befor the next occurence of repeated element in that case start shud be after the previous start
                start = Math.max(map[char], start)
            }
            //  plus 1 to nulify the 0th index
            maxLength = Math.max(maxLength, end-start+1)
            map[char] = end+1
            end++
        }
        return maxLength
    }

    // console.log(lengthOfLongestSubstring("abcabcbb"))
    console.log(lengthOfLongestSubstring("geekforgeeks"))