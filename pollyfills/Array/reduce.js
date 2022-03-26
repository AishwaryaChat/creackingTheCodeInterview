function customReduce(cb, initialVal, context) {
    let accumulator = initialVal === undefined ? this[0] : initialVal
    for(let i=0; i<this.length; i++) {
            accumulator = cb.call(context, accumulator, this[i], i, this)
    }
    return accumulator
}

Array.prototype.reduce = customReduce

let arr = [1, 2, 3, 4]

const red = arr.reduce((acc, ele, index) => {
    acc = {
        ...acc,
        [index]: ele
    }
    return acc
}, {})

console.log("red", red)

