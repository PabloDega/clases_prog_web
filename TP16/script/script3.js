// Tipos de datos

let numero = 23;
let texto = "Texto de ejemplo";
let logicas = false; // Boolean
let indefinido; // undefined
let array = ["zzzdato", 358, false, 23, "Quiniela"];
let objeto = {
    nombre: "Pablo",
    apellido: "Deganis",
    telefono: 1123190348,
    edad: 23,
};

console.log(numero);
console.log(texto);
console.log(logicas);
console.log(indefinido);
console.log(array);
console.log(objeto);

// typeof()
console.log(typeof(numero));
console.log(typeof(texto));
console.log(typeof(logicas));
console.log(typeof(indefinido));
console.log(typeof(array));
console.log(typeof(objeto));

// Sumar

let num1 = "15";
num1 = Number(num1);
let num2 = 30;
let suma = num1 + num2;
console.log(suma);

/* let datoUser1 = window.prompt("Ingrese el primer numero");
datoUser1 = Number(datoUser1);
let datoUser2 = window.prompt("Ingrese el segundo numero");
datoUser2 = Number(datoUser2);
let sumaDeDatos = datoUser1 + datoUser2;
console.log(sumaDeDatos); */

// Conversion a numeros

let valor = "3.1417 esto es PI";
console.log(valor, typeof(valor));

let valorNum = Number(valor);
console.log(valorNum, typeof(valorNum));

let valorInt = parseInt(valor);
console.log(valorInt, typeof(valorInt));

let valorFloat = parseFloat(valor);
console.log(valorFloat, typeof(valorFloat));