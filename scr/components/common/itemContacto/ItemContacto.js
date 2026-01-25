import { saveContactsToStorage } from "../../sections/storage/storage.js";
import { ContactList } from "../../sections/storage/db.js";
import { Modal } from "../modal/Modal.js";
import { FormularioEditarContacto } from "../../sections/formularioContacto/FormularioEditarContacto.js";

let ItemContacto = (contacto) => {
    let { id, nombre, telefono, favorito } = contacto;

    let div = document.createElement("div");
    div.className = "item_seleccionado";

    let imgIcon = document.createElement("img");
    imgIcon.src = `./assets/icons/user.svg`;

    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = favorito;
    checkbox.className = "fav-checkbox";

    let fid = `fav-${id}`;
    checkbox.id = fid;

    let label = document.createElement("label");
    label.htmlFor = fid;
    label.className = "fav-heart";

    checkbox.addEventListener("change", () => {
        contacto.favorito = checkbox.checked;
        saveContactsToStorage(ContactList);
    });

    let acciones = document.createElement("div");
    acciones.className = "acciones";

    let btnEditar = document.createElement("button");
    btnEditar.className = "btn_editar";
    let editarIcon = document.createElement("img");
    editarIcon.src = new URL("../../../assets/icons/edit_icon.svg", import.meta.url);
    editarIcon.alt = "Editar";

    btnEditar.appendChild(editarIcon);

    btnEditar.addEventListener("click", () => {
        const modal = Modal();

        const formularioEditar = FormularioEditarContacto(contacto, () => {
            etiquetaNombre.textContent = contacto.nombre;
            etiquetaTelefono.textContent = contacto.telefono;
            modal.cerrar();
        });

        modal.abrir(formularioEditar);
    });

    let btnEliminar = document.createElement("button");
    btnEliminar.className = "btn_eliminar";
    let borrar = document.createElement("img");
    borrar.src = new URL("../../../assets/icons/delete_icon.svg", import.meta.url);
    borrar.alt = "Eliminar";

    btnEliminar.appendChild(borrar);

    btnEliminar.addEventListener("click", () => {
        const index = ContactList.findIndex(c => c.id === id);
        if (index > -1) {
            ContactList.splice(index, 1);
            saveContactsToStorage(ContactList);
            div.remove();
        }
    });

    acciones.appendChild(btnEditar);
    acciones.appendChild(btnEliminar);

    div.appendChild(imgIcon);
    div.appendChild(etiquetaNombre);
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(etiquetaTelefono);
    div.appendChild(acciones);

    return div;
};

export { ItemContacto };
