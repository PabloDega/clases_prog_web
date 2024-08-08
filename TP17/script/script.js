if(2 == 1){
    console.log("Resultado del condicional");
}

/* let dato1 = window.prompt("Ingresar primer dato");
let dato2 = window.prompt("Ingresar segundo dato");
 
if(dato1 == dato2){
    console.log("Comparacion verdadera");
} else {
    console.log("Comparacion falsa");
}*/

// Scoope
let respuesta;
if(2 > 3){
    respuesta = "Primer numero mayor al segundo";
} else {
    respuesta = "Segundo numero mayor al primero";
}
console.log(respuesta);

// If else if

let semaforo = "celeste";

if(semaforo == "verde"){
    console.log("Avanzar");
} else if(semaforo == "amarillo"){
    console.log("Precaución");
} else if(semaforo == "rojo"){
    console.log("Detenerse");
} else {
    console.error("Semaforo roto");
}

// Cargar monto de compra ("window.prompt()") - Si > $50.000 descuento del 25% - Si > $20.000 descuento 10% - sino ningun descuento - devolver valor por consola ("console.log()")

/* let monto = window.prompt("Monto de la compra");

if(monto > 50000){
    let montoFinal = monto * 0.75;
    console.log("Monto final: " + montoFinal);
} else if(monto > 20000){
    let montoFinal = monto * 0.9;
    console.log("Monto final: " + montoFinal);
} else {
    console.log("Monto final: " + monto);
} */

// Operador ternario

/* let edad = window.prompt("Ingrese su edad");

let resp;
if(edad >= 18){
    resp = "Es mayor de edad";
}else{
    resp = "Es menor de edad";
}

let resp2 = edad >= 18 ? "Mayor" : "Menor";

console.log(resp2); */

// Operadores

let valor1 = false;
let valor2 = false;

console.log(valor1 || valor2);

if(10 == 10 && 20 == 19){
    console.log("los numeros coinciden");
} else {
    console.log("los numeros no coinciden");
}

// Ejercicio - llevando mas de 10 pord por un total superior a $20.000 aplicar un descuento del 20% al total

/* let cantidad = window.prompt("Cantida de productos");
let valorCompra = window.prompt("Total de la compra");

if(cantidad >= 10 && valorCompra >= 20000){
    let valorFinal = valorCompra * 0.8;
    console.log("Valor final con descuento:" + valorFinal)
} else {
    console.log("Valor final sin descuento:" + valorCompra)
} */

// Switch

let colorDelSemaforo = window.prompt("Color del semaforo");

switch (colorDelSemaforo) {
    case "verde":
        console.log("Avanzar");
        break;
    case "amarillo":
        console.log("Precaución");
        break;
    case "rojo":
        console.log("Detenerse");
        break;
    default:
        console.log("Semaforo roto");
        break;
}