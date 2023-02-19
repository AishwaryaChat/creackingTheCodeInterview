// func("world") --> returns --> hiworld
// func()("world") --> returns --> hiiworld
// func()()("world") --> returns --> hiiiworld
// func()()()("world") --> returns --> hiiiiworld
// func()()()()("world") --> returns --> hiiiiiworld
// func()()()()()("world") --> returns --> hiiiiiiworld

function parent() {
  let times = 0;
  function func(param) {
    if (param) {
        const str = "hi" + "i".repeat(times) + param;
        times = 0
        return str
    }
    times += 1;
    return func;
  }
  return func;
}

const func = parent()

console.log(func("world"))
console.log(func()("world")) 
console.log(func()()("world"))  
console.log(func()()()("world"))
// func()()()()("world")
// func()()()()()("world")
