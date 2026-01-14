let ItemContacto = (imgC, nombre, telefono) => {
    let div = document.createElement("div");
    div.className = "item_seleccionado"
    
    let img = document.createElement("img");
    img.src = `./assets/icons/${imgC}.svg`;

    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono

    div.appendChild(img);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaTelefono);

    return div;
}

export{ItemContacto};