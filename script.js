const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      expression += value;
      display.value = expression;
    }
  });
});

document.getElementById("equals").addEventListener("click", () => {
  try {
    const result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (error) {
    display.value = "Error";
    expression = "";
  }
});

document.getElementById("clear").addEventListener("click", () => {
  expression = "";
  display.value = "";
});