function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
}

function handleNumber(value) {
  console.log("number");
}

function handleSymbol(value) {
  console.log("symbol");
}

function init() {
  document
    .querySelector("#buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.value);
    });
}

init();
