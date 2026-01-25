import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { ContactList } from "../storage/db.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.innerHTML = "Contactos";

  
    sectionContactos.appendChild(h2);

    ContactList.forEach((contact) => {
        sectionContactos.appendChild(ItemContacto(contact))
    });

    return sectionContactos;
}

export{Contactos}