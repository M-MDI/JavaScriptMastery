function sameAmount(str , reg1 , reg2) { 
    const newReg = new RegExp(reg1, "g")
    const newRegg = new RegExp(reg2, "g")

const result =  str.match(newReg)

const res    = str.match(newRegg)

if (res != null && result != null) {
    if (res.length === result.length) {
        return true
    }
}
return false
}