function pick(obj, str) {
  let res = {};

  if (Array.isArray(str)) {
    for (let i = 0; i < str.length; i++) {
      for (let k in obj) {
        if (k == str[i]) {
          res[k] = obj[k];
        }
      }
    }
  } else {
    for (let k in obj) {
      if (k === str) {
        res[k] = obj[k];
      }
    }
  }
  return res;
}

function omit(obj, str) {
  let res = {};
  for (let key in obj) {
    if (!str.includes(key) && obj.hasOwnProperty(key)) {
      res[key] = obj[key];
    }
  }
  return res;
}
