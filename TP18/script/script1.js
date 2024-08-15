console.log("Hola mundo (Global)");

// Funcion declarada
function holaMundoDec(){
    console.log("Hola mundo (Local/declarada)");
}
holaMundoDec();

// Funcion de flecha
let holaMundoExp = () => {
    console.log("Hola mundo (Local/anonima/expresión)");
}
holaMundoExp();

// Return
function calculo(num1, num2){
    let suma = num1 + num2;
    return suma;
}

let resultado = calculo(2, 6);
console.log(resultado)
resultado = calculo(4, 24);
console.log(resultado)

// Parametros
function saludar(nombre){
    return "Hola " + nombre;
}
let texto = saludar("Pablo");
console.log(texto);

texto = saludar("Tomas");
console.log(texto);

// Calculadora

function suma(numero1, numero2){
    let suma = numero1 + numero2;
    return suma;
}

let suma1 = suma(5, 7);
console.log(suma1);

let suma2 = suma(12346545, 6846135465);
console.log(suma2);

function resta(numero1, numero2){
    let resta = numero1 - numero2;
    return resta;
}
let resta1 = resta(12, 8);
console.log(resta1);

// Funcion flecha
const sumador = (a, b) => a + b;

console.log(sumador(5, 6));

// Callback

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const calculadora = (a, b, cb) => cb(a, b);

console.log(calculadora(21, 7, sumar));
console.log(calculadora(14, 9, restar));
console.log(calculadora(3, 52, multiplicar));