
function generateAllParanthesis(A) {
    let ans = []
    function generate(curr, open, close) {
        if(open === close && open === A) {
            ans.push(curr)
            return
        }

        if(open < A){
            generate(curr+"(", open+1, close)
        }
        if(close < open) {
            generate(curr+")", open, close+1)
        }
        return
    }
    generate("", 0, 0)
    return ans
}

const A = 3
console.log(generateAllParanthesis(A))