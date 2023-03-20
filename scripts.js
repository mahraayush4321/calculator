const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");

let calculation = [];
let accumulation;

function calculate(button) {
  const Value = button.textContent;

  if (Value === "CLEAR") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (Value === "=") {
    console.log(accumulation);
    screenDisplay.textContent = eval(accumulation);
  } else {
    calculation.push(Value);
    accumulation = calculation.join("");
    screenDisplay.textContent = accumulation;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => calculate(button));
});
