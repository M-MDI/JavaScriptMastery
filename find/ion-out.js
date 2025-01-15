function ionOut(str) {

    const reg =  /\w*t(?=ion)/g

    const matched = str.match(reg)
    if(matched === null) {
        return []
    }


return matched
}