
let firstNumber = null;
let operator = null;
let secondNumber = false;


function appendNumber(num) {
  const display = document.getElementById("output");

  if (secondNumber) {
    display.value = num;
    secondNumber = false;
  } else {
    display.value += num;
  }
}


function setOperator(op) {
  const display = document.getElementById("output");

  firstNumber = parseFloat(display.value);
  operator = op;
  secondNumber = true;
}


function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {

  return num1 / num2;
}

function clearAll() {
  document.getElementById("output").value = "";
  firstNumber = null;
  operator = null;
  secondNumber = false;
}

function calculate() {
  const display = document.getElementById("output");

  const secondNumber = parseFloat(display.value);
  let result;

  switch (operator) {
    case "+":
      result = add(firstNumber, secondNumber);
      break;
    case "-":
      result = subtract(firstNumber, secondNumber);
      break;
    case "x":
      result = multiply(firstNumber, secondNumber);
      break;
    case "/":
      result = divide(firstNumber, secondNumber);
      break;
  }



  display.value = result;


  
}