export function getArchitects() {
  const aElem = document.querySelectorAll("a");
  const noNarch = document.querySelectorAll("span");
  return [aElem, noNarch];
}

export function getClassical() {
  const classical = document.querySelectorAll(".classical");
  const notclassical = document.querySelectorAll(":not(classical)");
  return [classical, notclassical];
}

export function getActive() {
  const ative = document.querySelectorAll(".active");
  const nonative = document.querySelectorAll(".classical:not(.active)");
  return [ative, nonative];
}

export function getBonannoPisano() {
  const bonanno = document.getElementById("BonannoPisano");
  const activeelm = document.body.querySelectorAll(".classicale");
  return [bonanno, activeelm];
}
