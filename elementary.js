function multiply(a, b) {
    let result = 0;
    let count = Math.abs(b);
    
    for (let i = 0; i < count; i++) {
        result += a;
    }
    
    if (b < 0) {
        return -result;
    } else {
        return result;
    }
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    
    let count = 0;
    let remain = Math.abs(a);
    
    while (remain >= Math.abs(b)) {
        remain -= Math.abs(b);
        count++;
    }
    
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        return -count;
    } else {
        return count;
    }
}

function modulo(a, b) {
    if (b === 0) {
        throw new Error("Cannot modulo by zero");
    }
    
    let remain = Math.abs(a);
    
    while (remain >= Math.abs(b)) {
        remain -= Math.abs(b);
    }
    
    if (a < 0) {
        return -remain;
    } else {
        return remain;
    }
}


console.log(divide(34,78));
