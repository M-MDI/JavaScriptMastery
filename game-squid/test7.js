function debounce(func, delay) {
  let timer;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...arg);
    }, delay);
  };
}

function debounce(func, delay) {
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
