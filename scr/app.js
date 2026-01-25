import { Button } from "./components/common/button/button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { Formulario } from "./components/sections/formularioContacto/Formulario.js";
import { Tareas } from "./components/sections/tareas/Tareas.js";
import { FormularioTarea } from "./components/sections/formularioTarea/FormularioTarea.js";
import { Favoritos } from "./components/sections/contactos/Favoritos.js"
import { Login } from "./components/sections/login/Login.js"

// App
let app = document.getElementById("app");

// Section Menu
let nav = document .getElementById("nav");

// Agregar botones
nav.appendChild(Button(
    "Agenda", 
    "agenda", 
    "users",
    function(){
        container.innerHTML = "";
        container.appendChild(Contactos());
    }
));
nav.appendChild(Button(
    "Crear contacto", 
    "plus", 
    "plus",
    function(){
        container.innerHTML = "";
        container.appendChild(Formulario());
    }
));
nav.appendChild(Button(
    "ToDoList",
    "todolist",
    "agenda",
    function () {
        container.innerHTML = "";
        container.appendChild(Tareas());
    }
));

nav.appendChild(Button(
    "Crear Tarea",
    "plus",
    "plus",
    function () {
        container.innerHTML = "";
        container.appendChild(FormularioTarea());
    }
));

nav.appendChild(Button(
    "Favoritos",
    "favorite",
    "favorite",
    function (){
        container.innerHTML = "";
        container.appendChild(Favoritos()); 
    }
));

nav.appendChild(Button(
    "Log-Out",
    "logout",
    "logout",
    function () {
        window.location.href = "/index.html";
    }
));

//recargar la vista de Favoritos
document.addEventListener("favoritos-updated", () => {
    container.innerHTML = "";
    container.appendChild(Favoritos());
});

// Section Container
let container = document.getElementById("container");
container.appendChild(Contactos());


