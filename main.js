
//CAPTURAMOS EN CONSTANTES

const form = document.getElementById("formulario");
const input = document.getElementById("nombre");
const saludo = document.getElementById("saludo");
const btnDelete = document.getElementById("delete");

const userCreated = document.getElementById("userCreated");



form.addEventListener("submit", (e) => {

    e.preventDefault();

    const userName = input.value.trim();

    if (userName == "") {
        alert("Ingrese el nombre en el campo");
        return;
    }


    localStorage.setItem("usuario", userName);
    saludo.textContent = "Bienvenido " + userName;
    input.value = "";


});


document.addEventListener("DOMContentLoaded", () => {

    const userSave = localStorage.getItem("usuario");

    if (userSave) {
        saludo.textContent = "Bienvenido De Nuevo " + userSave;

    }


});


btnDelete.addEventListener("click", () => {

    localStorage.removeItem("usuario");
    saludo.textContent = "Bienvenido usuario Indefinido";


});


