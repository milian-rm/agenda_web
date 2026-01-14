let Formulario = () =>{
    let sectionFormulario = document.createElement("sections");
    sectionFormulario.className = "formulario"

    let h2 = document.createElement("h2");
    h2.innerHTML = "Crear Contacto"

    let nombre = document.createElement("input");
    user.type = "text";
    user.placeholder = "Nombre";

    let telefono = document.createElement("input");
    password.type = "text";
    password.placeholder = "Teléfono";
    
    let button = document.createElement("button")
    button.innerHTML = "Crear"

    sectionFormulario.appendChild(h2);
    sectionFormulario.appendChild(nombre);
    sectionFormulario.appendChild(telefono);
    sectionFormulario.appendChild(button);

    return sectionFormulario
}

export{Formulario};