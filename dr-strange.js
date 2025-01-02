function addWeek(Daye) {
    const week = (['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday'  ,
    'secondMonday' , 'secondTuesday' , 'secondWednesday' , 'secondThursday' , 'secondFriday' , 'secondSaturday' , 'secondSunday' ])
    const ziroDay = new Date('0001-01-01')
    let s = (Daye-ziroDay) / (1000*60*60*24)%14
    return week[s]
}


//console.log(addWeek(new Date('0001-01-09')) )

function timeTravel(Obj) {
    const date = Obj.date
    date.setHours(Obj.hour)
    date.setMinutes(Obj.minute)
    date.setSeconds(Obj.second)
    return Obj.date
}
