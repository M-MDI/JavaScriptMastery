function cutFirst(str) {
    return str.slice(2)
}

function cutLast(str) {
    return str.slice(0,-2)
}

function cutFirstLast(str) {
    return str.slice(2,-2)
}

function keepFirst(str) {
    return str.slice(0,2)
}

function keepLast(str) {
    return str.slice(-2)
}

function keepFirstLast(str) {
    if (str.length >= 4 ) {
        const f= str.slice(0,2)
        const l= str.slice(-2)
        return f+l
    }
    return str
}

