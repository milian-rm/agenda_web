import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";

let Contactos = () => {
    let sectionContactos = document.createElement("sections");
    sectionContactos.className = "contactos";
    let h2 = document.createElement("h2");
    h2.innerHTML = "Contactos";
    sectionContactos.appendChild(h2);

    sectionContactos.appendChild(ItemContacto("user", "Josue Fuentes", "12345678"));
    sectionContactos.appendChild(ItemContacto("user", "Josue Fuentes", "12345678"));
    sectionContactos.appendChild(ItemContacto("user", "Josue Fuentes", "12345678"));
    sectionContactos.appendChild(ItemContacto("user", "Josue Fuentes", "12345678"));
    sectionContactos.appendChild(ItemContacto("user", "Josue Fuentes", "12345678"));
    return sectionContactos;
}

export{Contactos}