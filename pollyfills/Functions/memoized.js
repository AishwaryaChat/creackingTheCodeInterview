function memoized(fn) {
    const cache = {}
    return function(al) {
        const args = JSON.stringify(arguments)
        console.log("cache", cache)
        if(cache[args]) {
            return cache[args]
        }
        const evaluatedValue = fn.apply(this, arguments)
        cache[args] = evaluatedValue
        return evaluatedValue
    }
}

function factorial(n) {
    if(n === 0 || n === 1) {
      return 1
    }
    return factorial(n-1) * n; 
 }

let memoizedFact = memoized(factorial)
const m1 = memoizedFact(20) // slow
console.log("m1", m1)
const m2 = memoizedFact(20) // fast
console.log("m2", m2)
