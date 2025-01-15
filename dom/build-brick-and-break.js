export function build(bAmount) {
  for (let i = 1; i <= bAmount; i++) {
    const divs = document.createElement("div");
    if (i % 3 == 2) {
      divs.setAttribute("data-foundation", true);
    }
    divs.id = "brick-" + i;
    setTimeout(() => {
      document.body.append(divs);
    }, i * 100);
  }
}

export function repair(...ids) {
  for (let i = 0; i < ids.length ; i++) {
    const elem = document.getElementById(ids[i]);
    if (elem.getAttribute("data-foundation")) {
        elem.setAttribute('data-repaired' ,"in progress")
    } else {
        elem.setAttribute('data-repaired' , "true")
    }
  }
}


export function destroy() {
    const selectedDivs = document.querySelectorAll('div')
    selectedDivs[selectedDivs.length-1].remove()
}