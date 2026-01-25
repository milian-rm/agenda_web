let ItemContacto = (imgC, nombre, telefono, favorita = false) => {
    let div = document.createElement("div");
    div.className = "item_seleccionado";
    
    let img = document.createElement("img");
    img.src = `./assets/icons/${imgC}.svg`;

    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = favorita;
    checkbox.className = "fav-checkbox";

    let id = `fav-${Date.now()}`;
    checkbox.id = id;

    let label = document.createElement("label");
    label.htmlFor = id;
    label.className = "fav-heart";

    div.appendChild(img);
    div.appendChild(etiquetaNombre);
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(etiquetaTelefono);

    return div;
}

export { ItemContacto };
