function changeColor() {
    changeClasses();
    changeText();
}

function changeClasses() {
    h1.classList.toggle(darkModeClass);
    btn.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)) {
        btn.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    btn.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const darkModeClass = 'dark-mode'
const h1 = document.getElementById("page-title");
const btn = document.getElementById("mode-selector");
const footer = document.getElementById("footer");
const body = document.getElementById("body");

btn.addEventListener("click", changeColor);

