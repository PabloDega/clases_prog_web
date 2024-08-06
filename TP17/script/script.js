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