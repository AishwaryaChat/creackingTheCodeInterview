// Invalid Transactions
// Medium

// Share
// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.

// Example 1:

// Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
// Example 2:

// Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// Output: ["alice,50,1200,mtv"]
// Example 3:

// Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
// Output: ["bob,50,1200,mtv"]

// Constraints:

// transactions.length <= 1000
// Each transactions[i] takes the form "{name},{time},{amount},{city}"
// Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
// Each {time} consist of digits, and represent an integer between 0 and 1000.
// Each {amount} consist of digits, and represent an integer between 0 and 2000.

// TC - O(N^2)

const invalidTransactions = (transactions) => {
    let ans = [];
    for (let i = 0; i < transactions.length; i++){
        let [name, time, amount, city] = transactions[i].split(",");
        if (amount>1000){
            ans.push(transactions[i])
            continue
        }
        for (let j = 0; j < transactions.length; j++){
            if (j!==i){
                let [name1, time1, , city1] = transactions[j].split(",");
                if (name1==name && Math.abs(time1-time)<=60 && city!==city1){
                    ans.push(transactions[i]);
                    break
                }
            }
        }
    }
    return ans
}

// const transactions = ["alice,20,800,mtv", "alice,10,100,beijing"];
// const transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// const transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
// ["alice,20,800,mtv","alice,50,100,beijing"]
// ["alice,20,800,mtv","alice,50,1200,mtv"]
// const transactions = [
//   "alice,20,1200,mtv",
//   "bob,80,1200,mtv",
//   "alice,10,800,mtv",
//   "bob,50,1200,mtv",
//   "alice,70,700,PG",
//   "alice,30,800,tata",
// ];
// const transactions = [
//     "alice,10,800,mtv",
//     "alice,20,1200,mtv",
//     "alice,30,800,tata",
//     "alice,70,700,PG",
//     "bob,50,1200,mtv",
//     "bob,80,1200,mtv",
//   ];

const transactions = ["alice,20,800,mtv","alice,50,100,mtv","alice,51,100,frankfurt"]
console.log(invalidTransactions(transactions));
