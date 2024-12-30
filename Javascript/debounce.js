function debounce(func, wait) {
  let last = new Date();
  return function () {
    console.log(last);
    let now = new Date();
    if (last - now < wait) {
      last = now;
      return;
    }
    last = now;
    func();
  };
}

let i = 0;

function increment() {
    console.log("iiiii", i)
  i++;
}
const debouncedIncrement = debounce(increment, 100);
debouncedIncrement();
setTimeout(() => {
    debouncedIncrement();

}, 200)
