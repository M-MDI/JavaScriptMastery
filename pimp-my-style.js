import { styles } from "./pimp-my-style.data.js";
let counter = 0;

export function pimp() {
  const button = document.querySelector("button.button");

  if (button.classList.contains("unpimp")) {
    if (counter == styles.length) {
      counter--;
    }
    button.classList.remove(styles[counter]);
    if (button.classList.contains("unpimp") && counter == 0) {
      button.classList.remove("unpimp");
    }
    counter--;
  } else {
    button.classList.add(styles[counter]);
    counter++;
  }

  if (counter == styles.length) {
    button.classList.add("unpimp");
  }
}
