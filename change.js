const get = (arg) => {
    return sourceObject[arg]
}

const set = (key , value) => {
    sourceObject[key] = value
    return value
}
