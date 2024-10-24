let divConData = document.querySelector("#div1");

document.querySelector("#btn1").addEventListener("click", () => {
  console.log(divConData.dataset);
});

document.querySelector("#btn2").addEventListener("click", () => {
  console.log(divConData.dataset.id);
});

document.querySelector("#btn3").addEventListener("click", () => {
  console.log(divConData.dataset.precio);
});

document.querySelector("#btn4").addEventListener("click", () => {
  console.log(divConData.dataset.nombre);
});

/* document.querySelector("#btnHome").addEventListener("click", (e) => {
  console.log(e.target.dataset.boton);
});

document.querySelector("#btnProds").addEventListener("click", (e) => {
  console.log(e.target.dataset.boton);
});

document.querySelector("#btnEnvios").addEventListener("click", (e) => {
  console.log(e.target.dataset.boton);
}); */


document.querySelectorAll(".btnWeb").forEach((boton) => {
  boton.addEventListener("click", (e) => {
    console.log(e.target.dataset.url);
    window.location = e.target.dataset.url
  });
});