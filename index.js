"use strict";

const resultado = document.getElementById("resultado");
const botones = document.querySelectorAll(".add");

// Agregar valor del boton a la pantalla
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", (ev) =>resultado.textContent += botones[i].textContent);
};

// Borrar un elemento de la pantalla
document.getElementById("delete").addEventListener("click", () => resultado.textContent = resultado.textContent.slice(0, -1));
// Borrar todo el contenido de la pantalla
document.getElementById("deleteAll").addEventListener("click", () => resultado.textContent = "");

// Resolver la operacion de la pantalla
document.getElementById("calcular").addEventListener("click", () => {
    let content = resultado.textContent 

    if (/([0-9])+([+-/*])[0-9]+$/g.test(content)){
        try{resultado.textContent = eval(content)}
        catch(er){resultado.textContent = "Error"}
    }
});
