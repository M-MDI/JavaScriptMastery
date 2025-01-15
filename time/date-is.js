function isValid(date) {
    if (isNaN(date) || typeof date === "string" ) {
        return false
    }
return true
}

function isAfter(Date1 , Date2) {
    if ( isValid (Date1) && isValid(Date2)) {
        if (Date1 > Date2) {
            return true
        }
    }
return false
}

function isBefore(Date1 ,Date2) {
    if ( isValid (Date1) && isValid(Date2)) {
        if (Date1 < Date2) {
          return true
        }
    }
return false
}

function isFuture(date) {
    if (isValid(date)) {
        if (date > new Date()) {
            return true
        }
    }
return false
}

function isPast(date) {
    if (isValid(date)) {
        if (date < new Date()) {
            return true
        }
    }
return false
}

