import { ItemTarea } from "../../common/itemTarea/ItemTarea.js";
import { TaskList } from "../storage/db.js";

let Tareas = () => {
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";

    let h2 = document.createElement("h2");
    h2.textContent = "Tareas";

    sectionTareas.appendChild(h2);

    //Le damos un valor númerico a las prioridades que tenemos
    const prioridadOrden = {
        Alta: 1,
        Media: 2,
        Baja: 3
    };

    /*Ordenamos con sort, con respecto al valor de antes,
    sort va comparando los pares de la lista de Tareas */
    const tareasOrdenadas = TaskList.sort(
        (a, b) => prioridadOrden[a.prioridad] - prioridadOrden[b.prioridad]
    );

    tareasOrdenadas.forEach(tarea => {
        sectionTareas.appendChild(
            ItemTarea(tarea)
        );
    });

    return sectionTareas;
};


export { Tareas };
