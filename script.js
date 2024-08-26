const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

const Num1El = document.querySelector("#number1");
const Num2El= document.querySelector("#number2");

const result = document.querySelector("#result");

function calculator(operation) {
  const num1 = Number(Num1El.value);
  const num2 = Number(Num2El.value);

  if (num1 === "" || num2 === "") {
    result("Please enter a numbers");
  } else if (isNaN(num1) || isNaN(num2)) {
    result("Please enter a valid numbers");
  } else {
    let res;
    switch (operation) {
      case "add":
        res = num1 + num2;
        break;
      case "subtract":
        res = num1 - num2;
        break;
      case "multiply":
        res = num1 * num2;
        break;
      case "divide":
        if (num2 == 0) {
          res = "cannot divide by zero";
        } else {
          resres = num1 / num2;
        }
        break;
      default:
        res = "";
        break;
    }
    result.textContent = res;
    clearInputs();
  }
  
}
function clearInputs() {
  Num1El.value = "";
  Num2El.value = "";
}
addBtn.addEventListener("click", () => {
  calculator("add");
});

subBtn.addEventListener("click", () => {
  calculator("subtract");
});

multiplyBtn.addEventListener("click", () => {
  calculator("multiply");
});
divideBtn.addEventListener("click", () => {
  calculator("divide");
});
