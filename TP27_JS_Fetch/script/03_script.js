document.addEventListener("load", cargaTexto(1));

document.querySelectorAll("nav a").forEach((boton) => {
    boton.addEventListener("click", (e) => {
        cargaTexto(e.target.dataset.btn)
    })
});

function cargaTexto(num){
    fetch(`./data/texto${num}.txt`)
    .then((res) => res.text())
    .then((res) => document.querySelector("main").innerHTML = res)
}