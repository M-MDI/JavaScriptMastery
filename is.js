const is = {}

is.num = (nm) => {
    if (typeof nm === 'number') {
        return true
    }
}

is.nan = (nm) =>  {
    if (Number.isNaN(nm)) {
        return true
    }
}

is.str = (nm) => {
    if (typeof nm === 'string') { 
        return true
    } 
}

is.bool = (nm) => {
    if (typeof nm === 'boolean') {
        return true
    } 
}

is.undef=(nm)=> {
    if (typeof(nm)=="undefined") {
        return true
    }
}

is.def = (nm) => {
    if (typeof nm !== 'undefined') {
        return true
    } 
}

is.arr = (nm) => {
    if (Array.isArray(nm)) {
        return true
    } 
}

is.obj = (nm) => {
    if (typeof nm === 'object' && !Array.isArray(nm) && nm !== null) {
        return true;
    }
}


is.fun = (nm) => {
    if (typeof nm === 'function') {
        return true
    } 
}

is.truthy = (nm) => {
    if (nm) {
        return true
    } 
}

is.falsy = (nm) => {
    if (!nm) {
        return true
    } 
}