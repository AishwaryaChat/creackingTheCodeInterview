var isPowerOfTwo = function (n) {
    if(n===1) return true
    if(n===0) return false
    while(n%2 === 0) {
        n = n/2
    }
    if(n===1) return true
    return false
}

var isPowerOfTwo = function (n) {
    if(n===1) return true
    if(n===0) return false
    return isPowerOfTwo(n/2)
}

var isPowerOfTwo1 = function(n) {
    return parseInt(Math.log2(n)) === Math.log2(n)
};