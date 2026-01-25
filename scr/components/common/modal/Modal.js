let Modal = () => {
    let fondo = document.createElement("div");
    fondo.className = "modal_fondo";

    let modal = document.createElement("div");
    modal.className = "modal";

    let btnCerrar = document.createElement("button");
    btnCerrar.className = "modal_cerrar";
    btnCerrar.textContent = "×";

    let contenido = document.createElement("div");
    contenido.className = "modal_contenido";

    btnCerrar.addEventListener("click", cerrar);
    fondo.addEventListener("click", (e) => {
        if (e.target === fondo) cerrar();
    });


    modal.appendChild(btnCerrar);
    modal.appendChild(contenido);
    fondo.appendChild(modal);


    function abrir(nodo) {
        contenido.innerHTML = "";
        if (nodo) contenido.appendChild(nodo);
        document.body.appendChild(fondo);
    }

    function cerrar() {
        fondo.remove();
    }

    return {
        abrir,
        cerrar
    };
};


export { Modal };