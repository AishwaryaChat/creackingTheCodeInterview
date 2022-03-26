function createAsyncTask() {
    let val = Math.floor(Math.random() * 10)
    return function (cb) {
        setTimeout(cb, val, val*1000)
    }
}

function asyncSeries(taskList, callback) {
    let result = []
    let tasksComplted = 0
    taskList.reduce((acc, task) => {
        return acc
        .then(() => {
            return new Promise((resolve, reject) => {
                task((value) => {
                    result.push(value)
                    tasksComplted++
                    if(tasksComplted === taskList.length) {
                        callback.call(null, result)
                    } else {
                        resolve(value)
                    }
                })
            })
        })
    }, Promise.resolve())
}

const taskList = [
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask()
]

asyncSeries(taskList, (result) => {
    console.log("got the results", result)
})