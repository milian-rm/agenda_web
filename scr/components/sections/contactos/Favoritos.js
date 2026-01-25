import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { ContactList } from "../storage/db.js";

let Favoritos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.innerHTML = "Contactos Favoritos";

    sectionContactos.appendChild(h2);

    const refrescar = () => {
        sectionContactos.querySelectorAll(".item_seleccionado").forEach(e => e.remove());

        ContactList
            .filter(contact => contact.favorito === true)
            .forEach(contact => {
                sectionContactos.appendChild(ItemContacto(contact));
            });
    };

    refrescar();

    document.addEventListener("favoritos-updated", refrescar);

    return sectionContactos;
}

export { Favoritos };
