function sign(nm) {
    if (nm > 0) {
        return 1
    } else if (nm === 0) {
        return 0
    } else {
        return -1
    }
}

function sameSign(nm0 , nm1) {
    if ((nm0 < 0) && (nm1 < 0)) {
        return true 
    } else if ((nm0 > 0) && (nm1 > 0)) {
        return true 
    } else if (nm0 === nm1){
        return true
    }else {
        return false 
    }
}