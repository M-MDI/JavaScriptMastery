function longWords(arr) {
  return arr.every((word) => word.length >= 5);
}

function oneLongWord(arr) {
  return arr.some((word) => word.length >= 10);
}

function noLongWords(arr) {
  return arr.every((word) => word.length < 7);
}
