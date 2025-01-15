function citiesOnly(arr) {
  return arr.map((e) => e.city);
}

function upperCasingStates(arr) {
  return arr.map(toCap);
}

function toCap(str) {
  return str
    .split(" ")
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join(" ");
}

function fahrenheitToCelsius(arr) {
   return arr.map(toC)
}

function toC(elem) {
  const num = +elem.slice(0, -2);
  const flooreFtoC =Math.floor((((num - 32) * 5) / 9))
  return  flooreFtoC +"°C";

}

function trimTemp(arr) {
  return arr.map(e => ({
    ...e,
    temperature: e.temperature.replaceAll(" ", "")
  }))
}

function tempForecasts(arr) {
  return arr.map(toTempForecasts)
}

function toTempForecasts(obj) {
  const fahrenheitToCelsius = toC(obj.temperature.replaceAll(" ", "")) + "elsius"
  return `${fahrenheitToCelsius} in ${obj.city}, ${toCap(obj.state)}`
}
