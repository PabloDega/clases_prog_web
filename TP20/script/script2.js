// Metodo forEach

let items = ["rojos", "naranja", "amarillo", "verde", "azul", "violeta"];

items.forEach((item, i) => {
    console.log("Color: " + item + " / Repeticion:" + i);
});

const numeros = [2, 9, 12, 5, 8, 3];

numeros.forEach((numero) => {
    console.log(numero * 10);
});

numeros.forEach((numero, i) => {
    numeros[i] += 100;
});

console.log(numeros);

let unir = numeros.join();
let separar = unir.split(",");
console.log(separar);

separar.forEach((dato, i) => {
    separar[i] = Number(dato);
    // separar[i] = Number(separar[i]);
});

console.log(separar);

/* items = ["rojo", "naranja", "amarillo", "verde", "azul", "violeta"];

items.forEach((dato, i) => {
    console.log(dato + "txt");
    console.log(i);
    items[i] += "txt2";
})

console.log(items); */

// Metodo find

let buscar = items.find(dato => dato === "verde");
console.log(buscar);

let buscarI = items.findIndex(dato => dato === "sepia");
console.log(buscarI);

// Metodo reduce
let total = numeros.reduce((acumulador, numero) => acumulador + numero);
console.log(total);

// Vaciar

console.log(items);
items = [];
console.log(items);

// Array de Arrays

let datos = [["pablo", 30278003], ["tomas", 42977425], ["carlos", 17542985]];
console.log(datos);