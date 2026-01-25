import { saveTasksToStorage } from "../../sections/storage/storage.js";
import { TaskList } from "../../sections/storage/db.js"
import { Modal } from "../modal/Modal.js";
import { FormularioEditarTarea } from "../../sections/formularioTarea/FormularioEditarTarea.js";

//Recibo un Objeto Tarea, lo hago así para poder editarlo más tarde
let ItemTarea = (tarea) => {
    //Defino sus atributos en un array
    let { id, titulo, descripcion, prioridad = "Media", completada } = tarea;
    let div = document.createElement("div");
    div.className = "item_tarea";

    //Checkbox para marcar si está o no completada
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completada;
    //Si está completada, actualiza el css para que se tache
    if (completada) {
        div.classList.add("completada");
    }

    /* Si hay cambio este se guarda automáticamente
    con el evento change */
    checkbox.addEventListener("change", () => {
        tarea.completada = checkbox.checked;
        div.classList.toggle("completada", checkbox.checked);
        saveTasksToStorage(TaskList);
    });

    let contenedorTexto = document.createElement("div");
    contenedorTexto.className = "texto";

    let etiquetaTitulo = document.createElement("h3");
    etiquetaTitulo.textContent = titulo;

    let etiquetaDescripcion = document.createElement("p");
    etiquetaDescripcion.textContent = descripcion;

    contenedorTexto.appendChild(etiquetaTitulo);
    contenedorTexto.appendChild(etiquetaDescripcion);

    let selectPrioridad = document.createElement("select");
    //Creo un array con las opciones
    let prioridades = ["Baja", "Media", "Alta"];

    /* recorro el array que cree antes, evaluando si alguno
    de las opciones es seleccionada */
    prioridades.forEach(p => {  
        let option = document.createElement("option");
        option.value = p;
        option.textContent = p;
        if (p === prioridad) option.selected = true;
        selectPrioridad.appendChild(option);
    });

    //Otorgo el nombre de la prioridad seleccionada al selectPrioridad para guardarlo
    selectPrioridad.className = prioridad.toLowerCase();

    /* Si hay cambio este se guarda automáticamente
    con el evento change */
    selectPrioridad.addEventListener("change", () => {
        tarea.prioridad = selectPrioridad.value;
        selectPrioridad.className = selectPrioridad.value.toLowerCase();
        saveTasksToStorage(TaskList);
    });

    //Creo el botón editar
    let btnEditar = document.createElement("button");
    btnEditar.className = "btn_editar";

    let editarIcon = document.createElement("img");
    editarIcon.src = new URL("../../../assets/icons/edit_icon.svg", import.meta.url);
    editarIcon.alt = "Editar";

    btnEditar.appendChild(editarIcon);

    btnEditar.addEventListener("click", () => {
        const modal = Modal();

        const formularioEditar = FormularioEditarTarea(tarea, () => {
            etiquetaTitulo.textContent = tarea.titulo;
            etiquetaDescripcion.textContent = tarea.descripcion;
            selectPrioridad.value = tarea.prioridad;
            selectPrioridad.className = tarea.prioridad.toLowerCase();

            modal.cerrar();
        });

        modal.abrir(formularioEditar);
    });

    //Creo el botón eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.className = "btn_eliminar";
    let borrar = document.createElement("img");
    borrar.src = new URL("../../../assets/icons/delete_icon.svg", import.meta.url);
    borrar.alt = "Eliminar";

    btnEliminar.appendChild(borrar);

    /*Al hacer click sobre él el array se actualizará, buscando
    el id de la tarea sobre la que presioné el botón de 
    eliminar, también se eliminará el div pero eso es completamente
    visual*/
    btnEliminar.addEventListener("click", () => {
        const index = TaskList.findIndex(t => t.id === id);
        if (index > -1) {
            TaskList.splice(index, 1);
            saveTasksToStorage(TaskList);
            div.remove();
        }
    });

    /*Los botones van a ir dentro de un div, para poder
    ordenarlos mejor */

    let acciones = document.createElement("div");
    acciones.className = "acciones";

    acciones.appendChild(btnEditar);
    acciones.appendChild(btnEliminar);

    div.appendChild(acciones);

    div.appendChild(checkbox);
    div.appendChild(contenedorTexto);
    div.appendChild(selectPrioridad);

    return div;
};

export { ItemTarea };