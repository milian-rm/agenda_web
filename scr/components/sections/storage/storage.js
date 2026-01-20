/* =========================
   CONTACTOS
========================= */
const CONTACTS_STORAGE_KEY = "agenda_telefonica";

function saveContactsToStorage(contactos) {
    localStorage.setItem(
        CONTACTS_STORAGE_KEY,
        JSON.stringify(contactos)
    );
}

function getContactsFromStorage() {
    return JSON.parse(
        localStorage.getItem(CONTACTS_STORAGE_KEY)
    ) || [];
}

/* =========================
   TAREAS
========================= */
const TASKS_STORAGE_KEY = "lista_tareas";

function saveTasksToStorage(tareas) {
    localStorage.setItem(
        TASKS_STORAGE_KEY,
        JSON.stringify(tareas)
    );
}

function getTasksFromStorage() {
    return JSON.parse(
        localStorage.getItem(TASKS_STORAGE_KEY)
    ) || [];
}

export {
    saveContactsToStorage,
    getContactsFromStorage,
    saveTasksToStorage,
    getTasksFromStorage
};
