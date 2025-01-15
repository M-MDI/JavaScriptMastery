function map(arr,fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i, arr));
  }
  return res;
}

function flatMap(arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const value = fn(arr[i], i, arr);

    if (Array.isArray(value)) {
      res.push(...fn(arr[i], i, arr));
    } else res.push(fn(arr[i], i, arr));
  
  }
  return res;
}
