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