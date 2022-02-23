/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    if(s==="") return 0
    else {
        const dual = convertRomanToInt(s.slice(0,2))
        const single = convertRomanToInt(s.slice(0,1))
        const slicedStr = dual ? s.slice(2,s.length) : s.slice(1,s.length)
        return  (dual ? dual : single ) + romanToInt(slicedStr)
    }
};

const convertRomanToInt = s => {
    let obj = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900,
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
   return obj[s] || 0
}

var romanToInt2 = function(s) {
    let i=0
    let num = 0
    while(i<s.length) {
        const dual = convertRomanToInt(s[i]+s[i+1])
        num += dual ? dual : convertRomanToInt(s[i])
        dual ? i+=2 : i++
    }
    return num
};

console.log(romanToInt2("MMMCMXCIX"))
