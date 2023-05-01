const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];
let acumulativeCalculator;

function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    screenDisplay.textContent = eval(acumulativeCalculator);
  } else {
    calculation.push(value);
    acumulativeCalculator = calculation.join("");
    screenDisplay.textContent = acumulativeCalculator;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
