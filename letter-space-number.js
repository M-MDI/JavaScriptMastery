function letterSpaceNumber(str) {

    const reg = /[a-zA-Z]\s\b\d\b/g ;

    if (str.match(reg)=== null){
        return [];
    }
    return str.match(reg);

}
