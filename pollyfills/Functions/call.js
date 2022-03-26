Function.prototype.call = function(context, ...args) {
    context.fun = this
    return context.fun(...args)
}

class Person {
    constructor(name, surname, age = 0) {
        this.name = name
        this.surname = surname
        this.age = age
    }
}

function getName(arg1, arg2, arg3) {
    return arg1 + " " + this.name + " " + this.surname + " " + arg2 + " " + arg3
}

function getAge() {
    return this.age
}

let aish = new Person("Aishwarya", "Chaturvedi", 29)
console.log(getName.call(aish, "Hello", "Bollo"))