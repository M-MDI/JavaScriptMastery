function indexOf(arr , elem , index=0)      {
    for (let i = index ; i < arr.length ;i++) {
        if ( arr[i] === elem) {
            return i
        }
    }
    return -1 
}

function lastIndexOf(arr , elem , index=arr.length  )  {
    for (let i = index ; i >= 0 ; i--) {
        if ( arr[i] === elem) {
            return i
        }
    }
    return -1 
}

function includes(arr , elem , index=0)     {
    for (let i = index ; i < arr.length ;i++) {
        if ( arr[i] === elem) {
            return true
        }
    }
    return false
}
