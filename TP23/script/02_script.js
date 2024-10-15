let ejemplo = {
  nombre: "Pablo",
  apellido: "Deganis",
  anioNacimiento: 1983,
}

function Persona(nombre, apellido, anioNacimiento){
  this.nombre = nombre;
  this.apellido = apellido;
  this.anioNacimiento = anioNacimiento;
  this.edad = () => {
    let hoy = new Date();
    return hoy.getFullYear() - this.anioNacimiento;
  };
}

let persona1 = new Persona("Pablo", "Dega", 1983);
console.log(persona1);
let persona2 = new Persona("Lucio", "Dega", 2019);
console.log(persona2.edad());

// -----------------------------

function Productos(codigo, nombre, precio, cantidad){
  this.codigo = codigo;
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;

  this.valuacion = () => this.precio * this.cantidad;
}

let prod1 = new Productos(101, "Teclado", 8500, 25);

console.log(prod1);
console.log(prod1.valuacion());