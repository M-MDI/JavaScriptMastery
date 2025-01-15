function invert(obj) {

    let res = {};

    for (let k in obj) {
        if (Object.hasOwn(obj , k)){
            res[obj[k]]=k
        }
    }
    return res
}