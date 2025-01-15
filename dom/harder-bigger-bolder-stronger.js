export function generateLetters() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 120; i++) {
    const randomCharacter =
      alphabet[Math.floor(Math.random() * alphabet.length)];
    const divs = document.createElement("div");
    divs.innerText = randomCharacter;
    divs.style.fontSize = 11 + i + "px";
    if (i < 40) {
      divs.style.fontWeight = 300;
    } else if (i >= 40 && i < 80) {
      divs.style.fontWeight = 400;
    } else if (i >= 80) {
      divs.style.fontWeight = 600;
    }
    document.body.append(divs);
  }
}
