const state = {
  mode: "COMP",
  shift: false,
  alpha: false,
};
const memory = [];
let temp = null;
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["+", "-", "*", "/", "^", "%"];

const sentence = document.querySelector("#sentence");

function buttonClick(value) {
  if (numbers.includes(Number(value))) {
    if (temp !== null) {
      temp = `${temp}${value}`;
    } else {
      temp = value;
    }
    sentence.innerHTML = temp;
  }
}

function init() {
  document
    .querySelector(".calcButtons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.name);
    });
}

init();
