let numbers = [];
let currentNumber = 0;
let input = "";
let op = "";
let registry = [];
let registryOperation = "";
let registryResult = "";
let flagResult = false;
const result = document.getElementById("result");
result.innerHTML = "0";

const enterNumber = (number) => {
  if(flagResult && op === "") {
    numbers = [];
    input = "";
    flagResult = false;
  }
  if(input.length > 15) {
    return;
  }
  input = input + number;
  result.innerHTML = input;
  registryOperation = "";
  registryResult = "";
}

const operator = (operator) => {
    if(input === "") {
        return;
    } else { 
  numbers.push(parseFloat(input));
  input = "";
  if(operator === "+") {
    result.innerHTML = numbers[0] + "+";
    op = "+";
  }
  if(operator === "-") {
    result.innerHTML = numbers[0] + "-";
    op = "-";
  }
  if(operator === "×") {
    result.innerHTML = numbers[0] + "×";
    op = "×";
  }
  if(operator === "÷") {
    result.innerHTML = numbers[0] + "÷";
    op = "÷";
  }
}
}

const calculate = () => {
    if(numbers.length === 0) {
        return;
    } 
  numbers.push(parseFloat(input));
  if(op === "+") {
    result.innerHTML = parseFloat((numbers[0] + numbers[1]).toFixed(4));
    input = numbers[0] + numbers[1];
    registryOperation = numbers[0].toString() + " + " + numbers[1].toString();
  }
  if(op === "-") {
    result.innerHTML = parseFloat((numbers[0] - numbers[1]).toFixed(4));
    input = numbers[0] - numbers[1];
    registryOperation = numbers[0].toString() + " - " + numbers[1].toString();
  }
  if(op === "×") {
    result.innerHTML = parseFloat((numbers[0] * numbers[1]).toFixed(4));
    input = numbers[0] * numbers[1];
    registryOperation = numbers[0].toString() + " × " + numbers[1].toString();
  }
  if(op === "÷") {
    if(numbers[1] === 0) {
      result.innerHTML = "Can't divide by zero";
      numbers = [];
      input = "";
      return;
    }
    result.innerHTML = parseFloat((numbers[0] / numbers[1]).toFixed(4));
    input = numbers[0] / numbers[1];
    registryOperation = numbers[0].toString() + " ÷ " + numbers[1].toString();;
  }
  input = parseFloat(input.toFixed(4));
  registryResult = input.toString();
  console.log(registryOperation + " = " + registryResult);
  numbers = [];
  registry.push(registryOperation + " = " + registryResult);
  document.getElementById("registry").appendChild(document.createElement("li")).innerHTML = registry[registry.length - 1];
  flagResult = true;
  op = "";
}

const deleteNumbers = () => {
  input = "";
  result.innerHTML = "0";
}

const deleteAll = () => {
  deleteNumbers();
  registry = [];
  document.getElementById("registry").innerHTML = "";
}

window.onkeyup = function (event) {
    if (event.keyCode == 13) {
     calculate();
    }
    if (event.keyCode == 8) {
     deleteNumbers();
    }
    if (event.keyCode == 107) {
     operator("+");
    }
    if (event.keyCode == 109) {
     operator("-");
    }
    if (event.keyCode == 106) {
     operator("×");
    }
    if (event.keyCode == 111) {
     operator("÷");
    }
    if (event.keyCode >= 96 && event.keyCode <= 105) {
     enterNumber(event.keyCode - 96);
    }
    if (event.keyCode >= 48 && event.keyCode <= 57) {
     enterNumber(event.keyCode - 48);
    }
    if (event.keyCode == 110) {
     enterNumber(".");
    }
}
