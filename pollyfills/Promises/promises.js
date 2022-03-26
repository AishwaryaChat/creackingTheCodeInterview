class MyPromise {
    isResolved = false
    resolvedData
    thenFunc
    chainFunctions = []
    isRejected = false
    rejectedData
    rejectChainingFuncs = []
    constructor(executor) {
        const resolve = (value) => {
            if(!this.isResolved) {
                this.resolvedData = value
                this.isResolved = true
                if(this.chainFunctions.length) {
                    this.chainFunctions.reduce((acc, fn) => fn(acc), this.resolvedData)
                }
            }
        }

        const reject = (value) => {
            if(!this.isRejected) {
                this.isRejected = true
                this.rejectedData = value
                if(this.rejectChainingFuncs.length) {
                    this.rejectChainingFuncs.reduce((acc, fn) => fn(acc), this.rejectedData) 
                }
            }
        }

        executor(resolve, reject)
    }

    then(fn) {
        this.chainFunctions.push(fn)
        if(this.isResolved) {
            this.resolvedData = fn(this.resolvedData)
        }
        return this
    }

    catch(fn) {
        this.rejectChainingFuncs.push(fn)
        if(this.isRejected) {
            this.rejectedData = fn(this.rejectedData)
        }
        return this
    }

    finally(finallyFn) {
        if(this.isResolved) finallyFn(this.resolvedData)
        if(this.isRejected) finallyFn(this.rejectedData)
    }
}

new MyPromise((resolve, reject) => {
    let x = 10
    // setTimeout(() => {
    //     resolve(20)
    // }, 10000)
    if(x>10) {
        resolve(x)
    } else {
        reject(`error rejected ${x}`)
    }
})
.then(data => data*2)
.then(data => console.log(data))
.catch(error => console.log(error))
.finally(data => {
    console.log("data inside finally", data)
})