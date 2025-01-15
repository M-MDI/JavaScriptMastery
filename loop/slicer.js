function slice(str, Index, endex=str.length) {

    let result =  [] ;

    if (Index < 0 ) {
        Index = Index + str.length
    }
    if (endex < 0 ){ 
        endex = str.length + endex
    }

    for (let i = Index; i < endex ; i++) {
        result.push(str[i]);
    }
    if (Array.isArray(str)) {
        return result
    } else {
        return result.join('')
    }
    
}


