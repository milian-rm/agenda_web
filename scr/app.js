import { Button } from "./components/common/button/button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { Formulario } from "./components/sections/formulario/Formulario.js";

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
nav.appendChild(Button("ToDoList", "todolist", "agenda"));
nav.appendChild(Button("Crear Tarea", "plus","plus"))

// Section Container
let container = document.getElementById("container");
container.appendChild(Contactos());