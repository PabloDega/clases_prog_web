let tareas = [];

document.querySelector("#btnAgregar").addEventListener("click", () => {
  cargarTarea();
});

function cargarTarea(){
  if(document.querySelector("#tarea").value == ""){
    window.alert("Ingrese un nombre de tarea para registrarla");
    return;
  }
  let tarea = {
    id: tareas.length,
    tarea: document.querySelector("#tarea").value,
    estado: "pendiente"
  }
  //console.log(tarea);
  tareas.push(tarea);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  document.querySelector("#tarea").value = "";
  mostrarDatos();
}

function mostrarDatos(){
  let tareasLocales = localStorage.getItem("tareas");
  //console.log(tareasLocales);
  tareasLocales = JSON.parse(tareasLocales) || [];
  //console.log(tareasLocales);
  tareas = tareasLocales;
  //console.log(tareasLocales);

  document.querySelector("tbody").innerHTML = "";

  tareasLocales.forEach((tarea) => {
    if(tarea.estado === "eliminada"){
      return;
    }
    //console.log(tarea);
    document.querySelector("tbody").innerHTML += 
    `<tr>
      <td>${tarea.id}</td>
      <td>${tarea.tarea}</td>
      <td>${estado()}</td>
      <td>
        <div class="btn btnEditar" data-id="${tarea.id}">Editar</div>
        <div class="btn btnBorrar" data-id="${tarea.id}">Borrar</div>
      </td>
    </tr>`;

    function estado(){
      if(tarea.estado === "pendiente"){
        return `<div class="btn btnPendiente" data-id="${tarea.id}">Pendiente</div>`;
      } else {
        return `<div class="btn btnCompleta" data-id="${tarea.id}">Completa</div>`;
      }
    }
  });

  // Event listeners
  document.querySelectorAll(".btnPendiente").forEach((boton) => {
    boton.addEventListener("click", (e) => {
      //console.log("boton pendiente");
      //console.log(e.target.dataset.id);
      //console.log(tareas[e.target.dataset.id])
      tareas[e.target.dataset.id].estado = "completa";
      localStorage.setItem("tareas", JSON.stringify(tareas));
      mostrarDatos();
    });
  });

  document.querySelectorAll(".btnCompleta").forEach((boton) => {
    boton.addEventListener("click", (e) => {
      tareas[e.target.dataset.id].estado = "pendiente";
      localStorage.setItem("tareas", JSON.stringify(tareas));
      mostrarDatos();
    });
  });

  document.querySelectorAll(".btnBorrar").forEach((boton) => {
    boton.addEventListener("click", (e) => {
      tareas[e.target.dataset.id].estado = "eliminada";
      localStorage.setItem("tareas", JSON.stringify(tareas));
      mostrarDatos();
    });
  });
}

mostrarDatos();