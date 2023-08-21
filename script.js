document.addEventListener("DOMContentLoaded", () => {
  const pantalla = document.getElementById("pantalla");
});

const Operadores = {
  Multiplicar: 1,
  Dividir: 2,
  Sumar: 3,
  Restar: 4,
  Porcentaje: 5,
};
let Operando = 0;
let Operador = 0;

function teclearNumero(numero) {
  if (pantalla.innerHTML.length < 10) {
    if (pantalla.innerHTML === "0") {
      pantalla.innerHTML = numero.toString();
    } else {
      pantalla.innerHTML += numero.toString();
    }
  }
}

function borrarTodo() {
  pantalla.innerHTML = "0";
}

function borrar() {
  pantalla.innerHTML = pantalla.innerHTML.slice(0, -1);
}

function masMenos() {
  if (pantalla.innerHTML !== "0" && pantalla.innerHTML[0] !== "-") {
    pantalla.innerHTML = "-" + pantalla.innerHTML;
  } else {
    pantalla.innerHTML = pantalla.innerHTML.slice(1);
  }
}

function teclearOperacion(op) {
  switch (op) {
    case Operadores.Multiplicar:
      Operador = Operadores.Multiplicar;
      break;
    case Operadores.Dividir:
      Operador = Operadores.Dividir;
      break;
    case Operadores.Sumar:
      Operador = Operadores.Sumar;
      break;
    case Operadores.Restar:
      Operador = Operadores.Restar;
      break;
    case Operadores.Porcentaje:
      Operador = Operadores.Porcentaje;
      break;
  }
  Operando = parseFloat(pantalla.innerHTML);
}