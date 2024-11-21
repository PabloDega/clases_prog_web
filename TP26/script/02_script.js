const datos = [{
  nombre: "Pablo",
  apellido: "Lopez",
  mail: "lopez@yahoo.com.ar",
  direccion: "Calle falsa 123",
  telefono: 23451234
}, {
  nombre: "Juan",
  apellido: "Gonzalez",
  mail: "gonzalez@yahoo.com.ar",
  direccion: "Calle falsa 456",
  telefono: 23452345
}, {
  nombre: "Pedro",
  apellido: "Ibañez",
  mail: "ibañez@yahoo.com.ar",
  direccion: "Calle falsa 789",
  telefono: 23453456
}, {
  nombre: "Mateo",
  apellido: "Perez",
  mail: "perez@yahoo.com.ar",
  direccion: "Calle falsa 101",
  telefono: 23455678
}];

// Funcion sincronica

/* function getDatos(){
  return datos
}

console.log(getDatos()); */

// Funcion asincronica

/* function getDatos(){
  setTimeout(() => datos, 2000);
}

console.log(getDatos()) */

// Solucion con promise
function getDatos(){
  return new Promise((res) => {
    setTimeout(() => res(datos), 2000)
  })
}
getDatos().then((datos) => {console.log(datos)})

// Solucion con async await
async function getDatos2(){
  let info = new Promise((res) => {
    setTimeout(()=> res(datos), 2000);
  });
  console.log(await info)
}
getDatos2()