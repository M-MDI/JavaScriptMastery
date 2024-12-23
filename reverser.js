function reverse(str) {

    let rev = [] ;

    for (let i =  str.length-1 ;  i >= 0 ; i--) {
        rev.push(str[i])
    } 

    if (Array.isArray(str)) {
        return rev
    } else {
        return rev.join('')
    }

}