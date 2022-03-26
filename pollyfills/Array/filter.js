function customFilter(processingFunction) {
    let result = []
    for(let i=0; i<this.length; i++) {
        const ele = processingFunction(this[i], i)
        if(ele) result.push(this[i])
    }
    return result
}

Array.prototype.filter = customFilter

let filtered = arr.filter((ar)=> ar > 2)

console.log(filtered)