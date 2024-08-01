let nombre;
nombre = "Pablo";
nombre = "Ignacio";
console.log(nombre);

const apellido = "Deganis";
//apellido = "Villalba";
console.log(apellido);

let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

//let dni = window.prompt("Ingrese su numero de DNI");
//console.log("Su DNI es: " + dni);

let numero1 = 6;
let numero2 = 4;
let suma = numero1 + numero2;
console.log(suma);

/* let numero3 = window.prompt("Ingrese el primer número");
numero3 = Number(numero3);
let numero4 = window.prompt("Ingrese el segundo número");
numero4 = Number(numero4);
let sumaDeInputs = numero3 + numero4;
console.log(sumaDeInputs); */

// Scoope
let num = 12;
console.log(num)
{
    let num = 13;
    console.log(num);
    let sanMartin = "A";
    console.log(sanMartin);
}
console.log(num);
