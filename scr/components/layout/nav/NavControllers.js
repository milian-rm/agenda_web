import { Contactos } from "../../sections/contactos/Contactos.js";
import { Formulario } from "../../sections/formulario/Formulario.js";

import { Tareas } from "../../sections/tareas/Tareas.js";
import { FormularioTarea } from "../../sections/formulario/FormularioTarea.js";

let container = document.getElementById("container");

// CONTACTOS
let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContact = function () {
    container.innerHTML = "";
    container.appendChild(Formulario());
}

// TAREAS
let viewTareas = function () {
    container.innerHTML = "";
    container.appendChild(Tareas());
}

let viewNewTarea = function () {
    container.innerHTML = "";
    container.appendChild(FormularioTarea());
}

export { 
    viewContacts, 
    viewNewContact,
    viewTareas,
    viewNewTarea
};
