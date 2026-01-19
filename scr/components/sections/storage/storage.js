/**
* Clave utilizada para almacenar los datos en el LocalStorage
* Se ha modificado para almacenar contactos de una agenda telefónica
*/
const LOCAL_STORAGE_KEY = 'agenda_telefonica';
/**
* Guarda la lista de contactos en el LocalStorage
* @param Array} contactos  Lista de contactos a guardar
*/
function saveContactsToStorage(contactos) {
    localStorage.setItem(
        LOCAL_STORAGE_KEY, 
        JSON.stringify(contactos)
    );
}
/**
* Obtiene la lista de contactos desde el LocalStorage
* @returns Array} Lista de contactos, o array vacío si no hay datos
*/
function getContactsFromStorage() {
    return JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}
// Exportar las funciones para su uso en otros módulos
export { LOCAL_STORAGE_KEY, getContactsFromStorage, saveContactsToStorage };