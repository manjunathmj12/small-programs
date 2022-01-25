//simple calculator using prompt() as input
let firstInput, operations, secondInput;
firstInput = Number(prompt("enter the first number"));
operations = prompt("enter the operations ");
secondInput = Number(prompt("enter the second number"));
calCulate(firstInput, secondInput);
function calCulate(value1, value2) {
  let add, sub, mul, div, rem;
  if (operations == "+") {
    add = value1 + value2;
    console.log(` ${value1}${operations}${value2}= ${add}`);
  } else if (operations == "-") {
    sub = value1 - value2;
    console.log(` ${value1}${operations}${value2}= ${sub}`);
  } else if (operations == "/") {
    if (firstInput < secondInput) {
      div = Math.round(value1 / value2);
      console.log(` ${value1}${operations}${value2}= ${div}`);
    } else {
      div = Math.round(value2 / value1);
      console.log(` ${value1}${operations}${value2}= ${div}`);
    }
  } else if (operations == "*") {
    mul = value1 * value2;
    console.log(` ${value1}${operations}${value2}= ${mul}`);
  } else if (operations == "%") {
    rem = value1 % value2;
    cconsole.log(` ${value1}${operations}${value2}= ${add}`);
  } else {
    console.log("please enter proper values");
  }
}
