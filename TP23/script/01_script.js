let datos = {
  nombre: "Pablo",
  apellido: "Deganis",
  mail: "pdeganis@yahoo.com",
  direccion: "Calle falsa 123",
  telefono: 1146421317,
  registrado: true,
};

console.log(datos);

console.log(datos.mail);
console.log(datos["mail"]);

// Modificar propiedad
datos.nombre = "Ignacio";
console.log(datos);

// Añadir una propiedad
datos.edad = 41;
console.log(datos);

// Eliminar una propiedad
delete datos.direccion;
console.log(datos)

// Loop For in

for(const x in datos){
  //console.log(x);
  console.log(datos[x])
}

const curso = {
  nombre: "Programacion web",
  sede: "San Martín",
  turno: "Tarde",
  inscriptos: 26,
  saludar: () => {
    console.log("Hola alumnos de " + curso.nombre);
  },
  estado: () => {
    if(curso.inscriptos > 25){
      console.log("Curso completo");
    } else {
      console.log("Curso con vacantes");
    }
  },
}

curso.saludar();
curso.nombre = "Sublimación";
curso.saludar();

curso.estado();
curso.inscriptos--;
curso.estado();
