document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //console.log(e.target.dataset.texto);
    mostrarTexto(e.target.dataset.texto);
  })
})

function mostrarTexto(num){
  fetch(`./data/texto${num}.txt`)
  .then((res) => res.text())
  .then((res) => document.querySelector("main").innerHTML = res);
}

mostrarTexto(1);