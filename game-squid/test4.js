const getArchitects = () => [
  document.querySelectorAll("a"),
  document.querySelectorAll("span"),
];

const getClassical = () => [
  document.querySelectorAll("classical"),
  document.querySelectorAll(":not(.classical)"),
];

const getActive = () => [
  document.querySelectorAll(".classical.active"),
  document.querySelectorAll(".classical:not(.active)"),
];

const getBonannoPisano = () => [
  document.getElementById("BonannoPisano"),
  document.querySelectorAll(".classical.active"),
];

export { getArchitects, getClassical, getActive, getBonannoPisano };
