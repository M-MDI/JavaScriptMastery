function throttle(func, delay) {
  let lastcall = 0;
  return function (...arg) {
    if (Date.now() - lastcall > delay) {
      lastcall = Date.now();
      func(...arg);
    }
  };
}
/*
function opThrottle(
  func,
  delay,
  options = { leading: false, trailing: false }
) {
  let lastcall = 0;
  if (!options.leading) {
    return function(...arg) {
        
    }
      func(...arg);
      const bl = true
    } else if (!bl) {
    return function (...arg) {
      if (Date.now() - lastcall > delay) {
        lastcall = Date.now();
        func(...arg);
      }
    };
  }
  if (!options.trailing) {

  }
}
*/