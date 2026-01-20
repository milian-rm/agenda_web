    import { getContactsFromStorage } from "./storage.js";
    import { getTasksFromStorage } from "./storage.js";

    export let ContactList = getContactsFromStorage();
    export let TaskList = getTasksFromStorage();