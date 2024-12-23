const dogYears = (planet,age) => {

    let dogage ;

    if (planet === "mercury") {
         dogage = (0.2408467)*31557600
    } else if (planet === "venus") {
             dogage = (0.61519726)*31557600
    } else if (planet === "mars"){
         dogage = (1.8808158)*31557600
    } else if (planet === "jupiter") {
         dogage = (11.862615)*31557600
    } else if (planet === "saturn") {
         dogage = (29.447498)*31557600
    } else if (planet === "uranus"){
         dogage = (84.016846)*31557600
    } else if (planet === "neptune") {
         dogage = (164.79132)*31557600
    } else if (planet === "earth"){
         dogage = 31557600
    }
        let p = (age/dogage)*7 
        return +p.toFixed(2)
}

