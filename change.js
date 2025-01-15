const get = (arg) => {
    return sourceObject[arg]
}

const set = (key , value) => {
    sourceObject[key] = value
    return value
}
const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }

console.log(get(sourceObject));
console.log(set(sourceObject));