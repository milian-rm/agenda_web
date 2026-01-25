import { saveTasksToStorage } from "../storage/storage.js";
import { TaskList } from "../storage/db.js";

let FormularioEditarTarea = (tarea, onClose) => {
    let { titulo, descripcion, prioridad } = tarea;

    let form = document.createElement("form");
    form.className = "formulario formulario_modal";

    /* ===== TÍTULO ===== */
    let h2 = document.createElement("h2");
    h2.textContent = "Editar tarea";

    /* ===== TÍTULO INPUT ===== */
    let inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.value = titulo;
    inputTitulo.placeholder = "Título";

    /* ===== DESCRIPCIÓN ===== */
    let inputDescripcion = document.createElement("textarea");
    inputDescripcion.value = descripcion;
    inputDescripcion.placeholder = "Descripción";

    /* ===== PRIORIDAD ===== */
    let selectPrioridad = document.createElement("select");
    let prioridades = ["Baja", "Media", "Alta"];

    prioridades.forEach(p => {
        let option = document.createElement("option");
        option.value = p;
        option.textContent = p;
        if (p === prioridad) option.selected = true;
        selectPrioridad.appendChild(option);
    });

    /* ===== BOTÓN ===== */
    let btnGuardar = document.createElement("button");
    btnGuardar.textContent = "Guardar cambios";
    btnGuardar.type = "submit";

    /* ===== SUBMIT ===== */
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        tarea.titulo = inputTitulo.value;
        tarea.descripcion = inputDescripcion.value;
        tarea.prioridad = selectPrioridad.value;

        saveTasksToStorage(TaskList);
        if (onClose) onClose();
    });

    /* ===== ARMADO ===== */
    form.appendChild(h2);
    form.appendChild(inputTitulo);
    form.appendChild(inputDescripcion);
    form.appendChild(selectPrioridad);
    form.appendChild(btnGuardar);

    return form;
};


export { FormularioEditarTarea };
