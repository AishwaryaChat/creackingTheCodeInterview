var maxProfitFun = function(prices) { // complexity - O(n)
    let maxProfit = 0
    let min = Infinity
    prices.forEach(price => {
        if(price < min) min = price
        else if(price - min > maxProfit) maxProfit = price - min
    })
    return maxProfit
};

var maxProfitBruteForce = function(prices) { // Complexity - O(n^2)
    let maxProfit = 0
    for(let i=0; i<prices.length-1;i++) {
        for(let j = i+1; j<prices.length; j++)
        if(prices[j]>prices[i]) {
            let profit = prices[j] - prices[i]
            maxProfit = Math.max(maxProfit, profit)
        }
    }
    return maxProfit
}

console.log(maxProfitBruteForce([1]))