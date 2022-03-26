Array.prototype.flatten = function() {
let flattenArr = []
for(let i=0; i<this.length; i++) {
    if(Array.isArray(this[i])) {
        flattenArr = flattenArr.concat(this[i])
    } else {
        flattenArr.push(this[i])
    }
}
return flattenArr
}

let arr = [[1,2,3], 7, [4,5,6]]
console.log(arr.flatten())