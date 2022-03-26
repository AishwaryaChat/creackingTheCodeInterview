function customMap (processingFunction) {
    let result = []
    for(let i=0; i<this.length; i++) {
        let ele = processingFunction(this[i], i)
        result.push(ele)
    }
    return result
}

Array.prototype.map = customMap
let arr = [1, 2, 3, 4, 5]
let newArr = arr.map((item) => {
    return item
})

console.log(newArr)

