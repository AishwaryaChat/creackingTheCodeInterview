function isArray(val) {
    return Array.isArray(val)
}

function isObject(val) {
    return val !== null && typeof val==="object" && !isArray(val)
}

function checkType(val) {
    if(isObject(val)) return "Object"
    if(isArray(val)) return 'Array'
    if(val === null) return null
    return 'default'
}

function getTypes(val1, val2) {
    return [checkType(val1), checkType(val2)]
}

/**
 * @param {Object|Array} obj1
 * @param {Object|Array} obj2
 * @return {Object|Array}
 */
function objDiff(obj1, obj2,) {
    console.log(obj1)
    const [type1, type2] = getTypes(obj1, obj2)
    let midAns = {}
    if((type1 != type2) || (type1!=="Object" && type1!=="Array" && type1!==null && obj1 !== obj2)) return [obj1, obj2]
    else if(type1 !== 'default'){
        for(let key in obj1) {
            if(obj2[key] !== undefined) {
                const diff = objDiff(obj1[key], obj2[key])
                if((isObject(diff) && Object.keys(diff).length>0) || diff.length>0) midAns[key] = diff
            }
        }
    }
    return midAns
};

const obj1 = {"m": "f", "c": [0,true], "v": false}
const obj2 = {"m": "f", "c":[0,false], "v": 0}
objDiff(obj1,obj2)