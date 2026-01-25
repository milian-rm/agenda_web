import { ContactList } from "../storage/db.js";
import { saveContactsToStorage } from "../storage/storage.js";

let FormularioEditarContacto = (contacto, onClose) => {
    let { nombre, telefono } = contacto;

    let form = document.createElement("form");
    form.className = "formulario formulario_modal";

    let h2 = document.createElement("h2");
    h2.textContent = "Editar contacto";

    let inputNombre = document.createElement("input");
    inputNombre.value = nombre;
    inputNombre.placeholder = "Nombre";

    let inputTelefono = document.createElement("input");
    inputTelefono.value = telefono;
    inputTelefono.placeholder = "Teléfono";

    let btnGuardar = document.createElement("button");
    btnGuardar.textContent = "Guardar cambios";
    btnGuardar.type = "submit";

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        contacto.nombre = inputNombre.value;
        contacto.telefono = inputTelefono.value;

        saveContactsToStorage(ContactList);
        if (onClose) onClose();

        Swal.fire({
            icon: 'success',
            title: 'Contacto Editado Exitosamente',
            text: `Se editó ${contacto.nombre} correctamente`,
            confirmButton: 'Ok',
            confirmButtonColor: '#8b0000',
            background: 'linear-gradient(180deg, #151515, #0d0d0d)',           
            color: '#ffffff'
        });

    });

    form.appendChild(h2);
    form.appendChild(inputNombre);
    form.appendChild(inputTelefono);
    form.appendChild(btnGuardar);

    return form;
};

export { FormularioEditarContacto };
