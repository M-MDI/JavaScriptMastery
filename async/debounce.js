function debounce(func, delay) {
  let timer;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...arg);
    }, delay);
  };
}

function opDebounce(func, delay, leading = false) {
  let timer;

  return function (...arg) {
    if (leading && !timer) {
      func(...arg);
    }
    clearTimeout(timer);
      timer = setTimeout(() => {
        func(...arg);
      }, delay);
  };
}
/*
let c  = opDebounce(console.log, 1000, true)
c('hhh')
c('aaa')
c('bbb')
*/

