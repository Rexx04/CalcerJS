document.addEventListener("DOMContentLoaded", () => {
  const pantalla = document.getElementById("pantalla");
});

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