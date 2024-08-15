let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

// Largo
let largo = letras.length;
console.log(largo);

// Extraer letra
let letraN = letras.charAt(2);
console.log(letraN);
letraN = letras.at(3);
console.log(letraN);
letraN = letras[4];
console.log(letraN);

// Extraer sección

let frase = "Vive como si fueras a morir mañana. Aprende como si fueras a durar para siempre.";



let seccion = frase.slice(25, 37);
console.log(seccion);
seccion = frase.substring(0, 3);
console.log(seccion);

let nombre = "Nombre: Ignacio Gonzalez Ibañez";

seccion = nombre.slice(8, nombre.length);
console.log(seccion);

// Conversion de caja
let mayusculas = nombre.toUpperCase();
console.log(mayusculas);
let minusculas = nombre.toLowerCase();
console.log(minusculas);

// Trim
let espaciado = "  texto con espacio extra al rededor           ";
let ajustado = espaciado.trim();
console.log(espaciado);
console.log(ajustado);

// Reemplazar
let saludo = "Hola Pablo";
console.log(saludo);
saludo = saludo.replace("Pablo", "Tomás");
console.log(saludo);

// Split
let colores = "Rojo, verde, azul";
colores = colores.split(",");
console.log(colores);

// Includes
let busqueda = colores.includes("zul");
console.log(busqueda);

// Comillado
let dobles = "Comillas dobles permiten comillas simples dentro, I'm Jhonny Walker's";
let simple = 'Comillas simples permiten "Comillas" dobles';
let grave = `El batik permite 'Simples' y "Dobles"`;

let localidad = "3F";
console.log("Localidad: " + localidad + ", Bs As");

console.log(`Localidad: ${localidad}, Bs As`);