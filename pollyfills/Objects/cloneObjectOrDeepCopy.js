function deepCopy(obj) {
    if(obj===null || typeof obj !== "object") {
        return obj
    }
    let tempObj = {}
    for(let key in obj) {
        tempObj[key] = deepCopy(obj[key])
    }
    return tempObj
}

const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: {
            g: 5
        },
        h: 6
    },
    i: 7
}

const clonedObj = deepCopy(obj)
console.log("clonedObj", clonedObj)

