const escapeStr = " ` \\ / \" '"

const arr = [4 , "2"]

const obj = ({
    str   : "string",
    num   : 2 , 
    bool  : false ,
    undef : undefined
})

const nested = Object.freeze({
    arr: Object.freeze([4,undefined,"2"]),
    obj : ({
        str : "tet",
        num : 99 ,
        bool : false 
    })
})