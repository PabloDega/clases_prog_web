let cursos = [
  {
    id: 1,
    nombre: "Programación Web",
    calificado: false,
    notas: [],
    alumnos: [1, 2, 3, 4]
  },
  {
    id: 2,
    nombre: "Pensamiento computacional",
    calificado: true,
    notas: [10, 9],
    alumnos: [2, 4]
  },
  {
    id: 3,
    nombre: "Sublimación",
    calificado: false,
    notas: [],
    alumnos: [1, 2]
  },
  {
    id: 4,
    nombre: "Impresión 3D",
    calificado: true,
    notas: [10, 9, 5],
    alumnos: [2, 3, 4]
  }
];

let alumnos = [
  {
    id: 1,
    nombre: "Ricardo",
    apellido: "Gonzalez",
    dni: 22544875,
    localidad: "Tres de Febrero"
  },
  {
    id: 2,
    nombre: "Carla",
    apellido: "Perez",
    dni: 33522166,
    localidad: "San Martín"
  },
  {
    id: 3,
    nombre: "José",
    apellido: "Martinez",
    dni: 41578688,
    localidad: "Tres de Febrero"
  },
  {
    id: 4,
    nombre: "Paula",
    apellido: "Gomez",
    dni: 38168726,
    localidad: "San Martín"
  }
]

cursos.forEach((curso) => {
  document.querySelector("#cursos").innerHTML += 
  `<div class="curso">
    <h1>${curso.nombre}</h1>
    <span>Alumnos: ${curso.alumnos.length}</span>
    <span>Calificado: ${curso.calificado}</span>
    <span>
<div class="btn" data-id="${curso.id}">Abrir</div>
    </span>
  </div>`;
});

document.querySelectorAll(".btn").forEach((boton) => {
  boton.addEventListener("click", (e) => {
    //console.log(e.target.dataset.id);
    mostrarCurso(e.target.dataset.id);
  });
});

function mostrarCurso(id){
  let cursoSeleccionado = cursos.find(curso => curso.id == id);
  //console.log(cursoSeleccionado);
  let alumnosDelcurso = buscarAlumnos(cursoSeleccionado.alumnos);
  let htmlDeAlumnos = crearHTMLAlumnos(alumnosDelcurso);
  document.querySelector("#detalles").innerHTML = 
  `<h1>${cursoSeleccionado.nombre}</h1>
  <span>Cantidad de alumnos: ${cursoSeleccionado.alumnos.length}</span>
  <span>
    <h2>Lista de alumnos</h2>
    <div id="listaDeAlumnos">${htmlDeAlumnos}</div>
  </span>`;
}

function buscarAlumnos(listaDeAlumnos){
  let datos = [];
  listaDeAlumnos.forEach((id) => {
    let query = alumnos.find((alumno) => alumno.id == id);
    //console.log(query);
    datos.push(query);
  });
  return datos;
}

function crearHTMLAlumnos(alumnosDelcurso){
  let texto = "";
  alumnosDelcurso.forEach((alumno) => {
    texto += 
    `<div>
      <span>Nombre: ${alumno.nombre}</span>
      <span>Apellido: ${alumno.apellido}</span>
      <span>DNI: ${alumno.dni}</span>
      <span>Localidad: ${alumno.localidad}</span>
    </div>`;
  })
  return texto;
}