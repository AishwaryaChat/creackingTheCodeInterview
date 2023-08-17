function solve(A) {
    let mod = Math.pow(10, 9) + 7
    function fact(A) {
        if(A === 1) return 1
        else return Number((BigInt(A%mod) * BigInt(fact((A%mod)-1))) % BigInt(mod))
    }
    let factA = fact(A)
    console.log("fact", factA)
    let count = 0
    while(factA>0) {
        factA = Math.floor(factA/10)
        count++
    }
    return count
}

console.log(solve(9247))