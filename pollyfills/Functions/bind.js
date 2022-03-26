// method 1
function customBind (context, ...args) {
    const fun = this
    return function (...args2) {
        return fun.apply(context, [...args, ...args2])
    }
}

// method 2, without using existingMethods
function customBind2 (context, ...args) {
    console.log("context", context)
    let random = Math.random()
    context[`_this_${random}`] = this
    return function(...args2) {
        return context[`_this_${random}`](...args, ...args2)
    }
}

class Person {
    constructor(name, surname, age = 0) {
        this.name = name
        this.surname = surname
        this.age = age
    }
}

function getName(arg1, arg2, arg3) {
    console.log("arg 3", arg3)
    return arg1 + " " + this.name + " " + this.surname + " " + arg2 + " " + arg3
}

function getAge() {
    return this.age
}

Function.prototype.bind = customBind2

let aish = new Person("Aishwarya", "Chaturvedi", 29)
let getAish = getName.bind(aish, "Hello", "Bollo")
let getAishAge = getAge.bind(aish)
console.log(getAish("How are you?"))
console.log(getAishAge())
console.log(getAish("Yellow"))
