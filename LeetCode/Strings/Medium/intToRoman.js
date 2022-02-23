const CHARS = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}
var intToRoman = function(num) {
let result = ""
let objKeys = Object.keys(CHARS)
while(num>0) {
    for(let i=objKeys.length-1; i>=0; i--) {
        let key = objKeys[i]
        if(num-key>=0) {
            let quo = Math.floor(num/key)
            result+= CHARS[key].repeat(quo)
            num=num%key
            break
        }
    }
}
return result
};

console.log(intToRoman(3999))