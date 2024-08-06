// Operadores matemáticos

let numero1 = 20;
let numero2 = 6;

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);

let numero3 = 10;
numero3 += 10;
console.log(numero3);
numero3 -= 5;
console.log(numero3);
numero3 *= 10;
console.log(numero3);
numero3 /= 100;
console.log(numero3);

numero3 = ++numero3;
console.log(numero3);
numero3++;
console.log(numero3);
numero3--;
console.log(numero3);

// Operadores lógicos

let dato1 = 10;
let dato2 = 20;

console.log(dato1 < dato2);
console.log(dato1 > dato2);

// Igualdad simple
console.log(dato1 == dato2);
let dato3 = 10;
console.log(dato1 == dato3);
console.log(dato1 != dato3);
let dato4 = "10";
console.log(dato1 == dato4);
// Igualdad estricta
console.log(dato1 === dato4);
console.log(dato1 === dato3);

// && (and) y || (or)
console.log(2 == 2 && 3 == 4);
console.log(2 == 1 || 3 == 4);


let valorLogico = true;
console.log(!valorLogico);
