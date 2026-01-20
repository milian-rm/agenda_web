import { TaskList } from "../storage/db.js";
import { saveTasksToStorage } from "../storage/storage.js";

let FormularioTarea = () => {
    let sectionFormulario = document.createElement("form");
    sectionFormulario.className = "formulario";

    let h2 = document.createElement("h2");
    h2.innerHTML = "Crear Tarea";

    let titulo = document.createElement("input");
    titulo.type = "text";
    titulo.placeholder = "Título";

    let descripcion = document.createElement("textarea");
    descripcion.placeholder = "Descripción";

    let prioridad = document.createElement("select");

    let prioridades = ["Baja", "Media", "Alta"];
    prioridades.forEach(p => {
        let option = document.createElement("option");
        option.value = p;
        option.textContent = p;
        prioridad.appendChild(option);
    });

    let button = document.createElement("button");
    button.type = "submit";
    button.innerHTML = "Crear";

    sectionFormulario.appendChild(h2);
    sectionFormulario.appendChild(titulo);
    sectionFormulario.appendChild(descripcion);
    sectionFormulario.appendChild(prioridad);
    sectionFormulario.appendChild(button);

    sectionFormulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let tarea = {
            titulo: titulo.value,
            descripcion: descripcion.value,
            prioridad: prioridad.value,
            completada: false
        };

        console.log(tarea);
        TaskList.push(tarea);
        saveTasksToStorage(TaskList);
    });

    return sectionFormulario;
}

export { FormularioTarea };
