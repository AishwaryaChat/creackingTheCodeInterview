Array.prototype.forEach = function forEach(cb) {
    for(let i=0; i<this.length; i++) {
        cb(this[i], i)
    }
}

let arr = [2,3,4,8,9]

arr.forEach((ele, index) => {
    console.log("ele ", ele)
    console.log("index ", index)
})