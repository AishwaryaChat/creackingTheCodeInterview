function towerOfHanoi(N){
    function TOH(N, A, C, B, Res) {
        if(N === 0) return Res
        TOH(N-1, A, B, C, Res)
        Res.push([N, A, C])
        return TOH(N-1, B, C, A, Res)
    }
    return TOH(N, 1, 3, 2, [])
}

const N = 2
console.log(towerOfHanoi(N))