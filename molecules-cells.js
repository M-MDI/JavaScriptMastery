function RNA(str) {

    let rned = ''  ;

    for (let i = 0 ; i < str.length ; i++) {
            if (str[i] === 'G') {
                rned += 'C'
            } else if (str[i] === 'C') {
                 rned += 'G'
            } else if (str[i] === 'T') {
                 rned += 'A'
            } else if (str[i] === 'A') {
                 rned += 'U'
            }
    }
    return rned    
}

function DNA(str) {

    let dned = ''  ;

    for (let i = 0 ; i < str.length ; i++) {
            if (str[i] === 'C') {
                dned += 'G'
            } else if (str[i] === 'G') {
                 dned += 'C'
            } else if (str[i] === 'A') {
                 dned += 'T'
            } else if (str[i] === 'U') {
                 dned += 'A'
            }
    }
    return dned    
}