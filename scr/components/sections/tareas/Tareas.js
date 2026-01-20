import { ItemTarea } from "../../common/itemTarea/ItemTarea.js";
import { TaskList } from "../storage/db.js";

let Tareas = () => {
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";

    let h2 = document.createElement("h2");
    h2.innerHTML = "Tareas";

    sectionTareas.appendChild(h2);

    TaskList.forEach((tarea) => {
        sectionTareas.appendChild(
            ItemTarea(
                tarea.titulo,
                tarea.descripcion,
                tarea.prioridad,
                tarea.completada
            )
        );
    });

    return sectionTareas;
}

export { Tareas };
