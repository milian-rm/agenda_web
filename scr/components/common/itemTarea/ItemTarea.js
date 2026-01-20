let ItemTarea = (titulo, descripcion, prioridadSeleccionada = "Media", completada = false) => {
    let div = document.createElement("div");
    div.className = "item_tarea";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completada;

    let contenedorTexto = document.createElement("div");
    contenedorTexto.className = "texto";

    let etiquetaTitulo = document.createElement("h3");
    etiquetaTitulo.textContent = titulo;

    let etiquetaDescripcion = document.createElement("p");
    etiquetaDescripcion.textContent = descripcion;

    contenedorTexto.appendChild(etiquetaTitulo);
    contenedorTexto.appendChild(etiquetaDescripcion);

    let selectPrioridad = document.createElement("select");

    let prioridades = ["Baja", "Media", "Alta"];

    prioridades.forEach(prioridad => {
        let option = document.createElement("option");
        option.value = prioridad;
        option.textContent = prioridad;

        if (prioridad === prioridadSeleccionada) {
            option.selected = true;
            selectPrioridad.className = prioridad.toLowerCase();
        }

        selectPrioridad.appendChild(option);
    });

    selectPrioridad.className = prioridadSeleccionada.toLowerCase();

    selectPrioridad.addEventListener("change", () => {
        selectPrioridad.className = selectPrioridad.value.toLowerCase();
    });

    if (completada) {
        div.classList.add("completada");
    }

    checkbox.addEventListener("change", () => {
        div.classList.toggle("completada", checkbox.checked);
    });

    let btnEliminar = document.createElement("button");
    btnEliminar.className = "btn_eliminar";
    let borrar = document.createElement("img");
    borrar.src = new URL("../../../assets/delete_icon.svg", import.meta.url);
    borrar.alt = "Eliminar";

    btnEliminar.appendChild(borrar);

    btnEliminar.addEventListener("click", () => {
        div.remove();
    });

    div.appendChild(checkbox);
    div.appendChild(contenedorTexto);
    div.appendChild(selectPrioridad);
    div.appendChild(btnEliminar);

    return div;
};

export { ItemTarea };