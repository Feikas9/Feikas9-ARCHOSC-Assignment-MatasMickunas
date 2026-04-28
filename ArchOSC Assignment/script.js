document.addEventListener("DOMContentLoaded", () => {

const button = document.getElementById("themeBtn");

/* Apply saved theme */

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    button.innerHTML = "☀️";
}

/* Button click */

button.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
        button.innerHTML = "☀️";
    } else {
        localStorage.setItem("theme","light");
        button.innerHTML = "🌙";
    }

});

});