document.querySelector("#vertical").addEventListener("click", (e) => {
  document.getElementById("distribucion").style.flexDirection = "column";
});

document.querySelector("#horizontal").addEventListener("click", (e) => {
  document.getElementById("distribucion").style.flexDirection = "row";
});

document.querySelector("#colorRojo").addEventListener("click", () => {
  document.getElementById("color").style.backgroundColor = "red";
})

document.querySelector("#colorVerde").addEventListener("click", () => {
  document.getElementById("color").style.backgroundColor = "green";
})

document.querySelector("#textoReducir").addEventListener("click", () => {
  document.getElementById("texto").style.fontSize = "10px";
});

document.querySelector("#textoAgrandar").addEventListener("click", () => {
  document.getElementById("texto").style.fontSize = "22px";
});

document.querySelector("#textoColor").addEventListener("change", (e) => {
  document.getElementById("texto").style.color = e.target.value;
})

document.querySelector("#mostrar").addEventListener("click", () => {
  document.getElementById("verOcultar").style.display = "flex";
});

document.querySelector("#ocultar").addEventListener("click", () => {
  document.getElementById("verOcultar").style.display = "none";
});