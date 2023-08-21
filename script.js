document.addEventListener("DOMContentLoaded", () => {
  const pantalla = document.getElementById("pantalla");
});

const Operadores = {
  Multiplicar: 1,
  Dividir: 2,
  Sumar: 3,
  Restar: 4,
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
  if (pantalla.innerHTML.length > 1) {
    pantalla.innerHTML = pantalla.innerHTML.slice(0, -1);
  } else {
    borrarTodo();
  }
}

function masMenos() {
  if (pantalla.innerHTML !== "0" && pantalla.innerHTML[0] !== "-") {
    pantalla.innerHTML = "-" + pantalla.innerHTML;
  } else {
    pantalla.innerHTML = pantalla.innerHTML.slice(1);
  }
}

function punto() {
  if (pantalla.innerHTML.length < 9 && !pantalla.innerHTML.includes(".")) {
    pantalla.innerHTML += ".";
  }
}

function teclearOperacion(op) {
  Operador = op;
  Operando = parseFloat(pantalla.innerHTML);
  borrarTodo();
}

function igual() {
  switch (Operador) {
    case Operadores.Multiplicar:
      pantalla.innerHTML = (
        Operando * parseFloat(pantalla.innerHTML)
      ).toString();
      break;
    case Operadores.Dividir:
      if (parseFloat(pantalla.innerHTML) === 0) {
        alert("División entre cero. Es imposible.");
        borrarTodo();
      } else {
        pantalla.innerHTML = (
          Operando / parseFloat(pantalla.innerHTML)
        ).toString();
      }
      break;
    case Operadores.Sumar:
      pantalla.innerHTML = (
        Operando + parseFloat(pantalla.innerHTML)
      ).toString();
      break;
    case Operadores.Restar:
      pantalla.innerHTML = (
        Operando - parseFloat(pantalla.innerHTML)
      ).toString();
      break;
  }
}

function porcentaje() {
  switch (Operadores) {
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
}
