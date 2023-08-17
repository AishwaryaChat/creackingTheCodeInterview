// const p = new Promise((resolve) => {
//     console.log(1)
//     setTimeout(() => {
//         resolve()
//     })
// })

// Promise.resolve().then(() => console.log(2))
// setTimeout(() => {
//     console.log(3)
// }, 0)
// p.then(() => console.log(4))
// setTimeout(() => {
//     console.log(5)
// })

// function dosomething() {
//     return new Promise((resolve, reject) => {
//         reject()
//         resolve()
//     })
// }

// const promise = dosomething()
// promise.then(() => {console.log("success1")})
// .then(() => {console.log("success2")})
// .catch(() => {
//     console.log("Error1")
// })
// .then(() => {console.log("success3")})
// .finally(() => {console.log("finally")})

// function add(a,b) {
//     return a+b
// }


// function sub(a,b) {
//     return a-b
// }

// function op(operation, ab,b) {
//     switch(operation) {
//         case "ADD":
//                 return add
//         case "SUB":
//         return sub
//     }
// }

// console.log(op("ADD")(5,3), op("SUB")(5,3))