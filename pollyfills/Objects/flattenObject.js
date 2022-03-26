function flattenObj (obj) {
    // console.log(obj)
    return Object.keys(obj).reduce((acc, key) => {
        const value = obj[key]
        return typeof value === 'object' ? {...acc, ...flattenObj(value)} : {...acc, [key]: value}
    }, {})
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

const flattenedObj = flattenObj(obj)

console.log(flattenedObj)