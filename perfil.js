document.addEventListener("DOMContentLoaded", () => {

    const userSave = localStorage.getItem("usuario");

    if (userSave) {
        userCreated.textContent = "Bienvenido De Nuevo " + userSave;
    }
    else{
        userCreated.textContent = "Usuario Indefinido";
    }

});

