/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
function generarAleatorio(opciones) {
  const indiceAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[indiceAleatorio];
}

let pin = generarAleatorio(["1", "2", "3", "4"]);
switch (pin) {
  case "1":
    pin = "&spades;";
    break;
  case "2":
    pin = "<span class='rojo'>&hearts;</span>";
    break;
  case "3":
    pin = "<span class='rojo'>&diams;</span>";
    break;
  case "4":
    pin = "&clubs;";
    break;
}
document.querySelectorAll(".pintaAleatoria").innerHTML = pin;
let pintas = document.querySelectorAll(".pintaAleatoria");
for (let i = 0; i < pintas.length; i++) {
  pintas[i].innerHTML = pin;
}

let num = generarAleatorio([
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13"
]);

switch (num) {
  case "1":
    num = "A";
    break;
  case "11":
    num = "J";
    break;
  case "12":
    num = "Q";
    break;
  case "13":
    num = "K";
    break;
  default:
    num = parseInt(num);
    break;
}

document.querySelectorAll(".cartaAleatoria").innerHTML = num;
let numeros = document.querySelectorAll(".cartaAleatoria");
for (let i = 0; i < numeros.length; i++) {
  numeros[i].innerHTML = num;
}
