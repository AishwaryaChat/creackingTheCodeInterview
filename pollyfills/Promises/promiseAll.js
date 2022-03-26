function createTask(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(time>= 3000) reject(time)
            else resolve(time)
        }, time)
    })
}

function myPromiseAll(tasks) {
    return new Promise((resolve, reject) => {
        let results = []
        let promisesCompleted = 0
        tasks.forEach((promise, index) => {
                promise
            .then((data) => {
                promisesCompleted+=1
                results[index] = data
                if(promisesCompleted === tasks.length) {
                    resolve(results)
                }
            })
            .catch(error => reject(error))
        })
    })
}

Promise.all = myPromiseAll

let taskList = [
    createTask(2000),
    createTask(5000),
    createTask(1000)
]

Promise.all(taskList)
.then(result => {
    console.log("result", result)
})
.catch(error => console.log("error ", error))