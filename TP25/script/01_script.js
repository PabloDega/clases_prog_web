localStorage.setItem("curso", "Programación Web");

let cursoLocal = localStorage.getItem("curso");

document.querySelector("#caja1").innerHTML = cursoLocal;

//------------------------------

const datosPersonales = {
  nombre: "Pablo",
  apellido: "Deganis",
  mail: "pdeganis@yahoo.com.ar",
  telefono: 1123190348
}

document.querySelector("#grabar").addEventListener("click", () => {
  localStorage.setItem("datosPersonales",JSON.stringify(datosPersonales));
});

document.querySelector("#obtener").addEventListener("click", () => {
  let datosLocales = localStorage.getItem("datosPersonales");
  console.log(datosLocales);
  datosLocales = JSON.parse(datosLocales);
  console.log(datosLocales);

  document.querySelector("#caja2").innerHTML = `Nombre: ${datosLocales.nombre}<br> Apellido: ${datosLocales.apellido}`;
});

document.querySelector("#limpiar").addEventListener("click", () => {
  document.querySelector("#caja2").innerHTML = "";
  localStorage.clear();
})