
import { ContactList } from "../storage/db.js"
import { saveContactsToStorage } from "../storage/storage.js";

let Formulario = () =>{
    let sectionFormulario = document.createElement("form");
    sectionFormulario.className = "formulario"

    let h2 = document.createElement("h2");
    h2.innerHTML = "Crear Contacto"

    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.placeholder = "Nombre";

    let telefono = document.createElement("input");
    telefono.type = "text";
    telefono.placeholder = "Teléfono";
    
    let button = document.createElement("button")
    button.type = "submit"
    button.innerHTML = "Crear"


    sectionFormulario.appendChild(h2);
    sectionFormulario.appendChild(nombre);
    sectionFormulario.appendChild(telefono);
    sectionFormulario.appendChild(button);


    sectionFormulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let contacto = {
            nombre: nombre.value,
            telefono: telefono.value
        };
        console.log(contacto);
        ContactList.push(contacto);
        saveContactsToStorage(ContactList);
    })

    let contacto = {
        nombre: nombre.value,
        telefono: telefono.value
    }

    return sectionFormulario
}
export{Formulario};