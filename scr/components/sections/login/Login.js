let Login = (onLogin) => {

    let section = document.createElement("section");
    section.className = "login";

    let h3 = document.createElement("h3");
    h3.textContent = "Login";

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";

    let button = document.createElement("button");
    button.textContent = "Iniciar Sesión";

    button.addEventListener("click", () => {
        window.location.href = "./scr/app.html";
    });

    section.appendChild(h3);
    section.appendChild(user);
    section.appendChild(password);
    section.appendChild(button);

    return section;
};

export { Login };
