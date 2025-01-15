function get( src , path ) {
    let result = src;

    const Keys = path.split('.')


    for (let i = 0 ; i < Keys.length ; i++) {
        if (result === undefined) return undefined;
        result = result[Keys[i]]
    }
return result
}
