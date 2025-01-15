export function getArchitects() {
  const a = document.querySelectorAll('a');
  const nonarch = document.querySelectorAll('span');
  return [a, nonarch];
}

export function getClassical() {
  const classical = document.querySelectorAll('.classical');
  const nonclassical = document.querySelectorAll(':not(.classical)');
  return [classical, nonclassical];
}

export function getActive() {
    const active = document.querySelectorAll('.active')
    const nonactive = document.querySelectorAll(':not(active)')
    return [active ,nonactive ]
}

export function getBonannoPisano() {
    const classicalactive = document.getElementById('BonannoPisano')
    const classicalnonactive = document.querySelectorAll('.classical,.active')
    return [classicalactive ,classicalnonactive ]
}
