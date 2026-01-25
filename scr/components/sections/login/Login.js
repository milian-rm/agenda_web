import { Button } from "../../common/button/button";
import { Contactos } from "../contactos/Contactos";

let login = function () {

    let login = document.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerHTML = "Login"

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";
    
    let button = document.createElement("button")
    button.innerHTML = "Iniciar Sesión"
    Button("Iniciar Sesion","login","",
        function(){
        container.innerHTML = "";
        container.appendChild(Formulario());
    });

    

    login.appendChild(h3);
    login.appendChild(user);
    login.appendChild(password);
    login.appendChild(button);

    return login;
}

let container = document.getElementById("container");


export {login}