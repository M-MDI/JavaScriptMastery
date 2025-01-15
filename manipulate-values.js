function filterValues(obj, func) {
  let res;
  let o = {};
  const values = Object.entries(obj);
  res = values.filter(([key, value]) => func(value));
  for (let [key, val] of res) {
    o[key] = val;
  }
  return o;
}

function mapValues(obj, func) {
  let res;
  let o = {};
  const values = Object.entries(obj);
  res = values.map(([key, value]) => func(value));
  for (let i = 0; i < values.length; i++) {
    const [key] = values[i];
    o[key] = res[i]
  }
  return o;
}

function reduceValues(obj,  func ,acc=0) {
  const values = Object.entries(obj);
  for (let [key, val] of values) {
    acc = func(val, acc)
  }
  return acc;
}
console.log(reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3));
