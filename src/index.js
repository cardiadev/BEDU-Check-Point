import { header } from "./header.js";

document.write("<h1>" + header + "</h1>");

// console.log("Test " + "el algoritmo de Fibonacci es " + fibonacci(6));

function inputFild() {
  var input = document.createElement("input");
  input.type = "text";
  input.name = "input";
  input.placeholder = "Ingresa un numero";
  return input;
}

function buttonHtml() {
  var btn = document.createElement("button");
  btn.innerHTML = "Calcular";
  return btn;
}

function listFibonacci() {
  var node = document.createElement("ul");
  var li = document.createElement("li");
  li.innerHTML = "jkdashgklsdgl";
  node.appendChild(li);
  return node;
}

document.body.appendChild(inputFild());
document.body.appendChild(buttonHtml());
document.body.appendChild(listFibonacci());

var test = inputFild();
