function join(str, I) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i];

        if (i !== str.length - 1) {
            result += I;
        }
    }

    return result;
}

function split(str , S = '') { 

    let splitted = [];
   
    let rt = '' ;

    if(S === ''){
        for (let i = 0 ; i< str.length; i++) {
            splitted.push(str[i]);
        }
        return splitted;
    }

    for (let i = 0 ; i < str.length ; i++){
        if (S && str.startsWith(S,i)){
            splitted.push(rt)
            rt = ''
            i +=  S.length-1
        } else  {
            rt += str[i]
        }
}
    splitted.push(rt)
    return splitted;
}