let Button = (title, id, img, callback) => {
    let div = document.createElement("div");
    div.id = id;

    let divImage = document.createElement("div");
    divImage.className = "button_image";

    let imgIcon = document.createElement("img");
    imgIcon.src = `./assets/icons/${img}.svg`;
    imgIcon.alt = title;
    divImage.appendChild(imgIcon);

    let divText = document.createElement("div");
    divText.className = "button_text";
    divText.textContent = title;

    div.appendChild(divImage);
    div.appendChild(divText);

    div.addEventListener("click", () => {   
        callback(); 
        console.log("sección completada")  
    });

    return div;
}

export{Button}