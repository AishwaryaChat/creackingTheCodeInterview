function rotateMatrix(A) {
    function transpose(A) {
        for(let i=0; i<A.length; i++) {
            for(let j=0; j<i; j++) {
                   [A[i][j], A[j][i]] = [A[j][i], A[i][j]]
            }
        }
        return A
    }

    function reverseRow(A) {
        for(let i=0; i<A.length; i++) {
            for(let j=A.length-1, k=0; j>k; j--, k++) {
                   [A[i][j], A[i][k]] = [A[i][k], A[i][j]]
            }
        }
        return A
    }

    return reverseRow(transpose(A))
}

const x = [[1,2], [3,4]]
console.log(rotateMatrix(x))