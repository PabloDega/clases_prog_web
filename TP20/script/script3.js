let miArray = [1, 2, 3, 4, 5, 6];
console.log(miArray);

let miSet = new Set(miArray);
console.log(miSet);

// Agregar dato
miArray.push(7);
console.log(miArray);

miSet.add(7);
console.log(miSet);

// Agregar dato repetido
miArray.push(7);
console.log(miArray);

miSet.add(7);
console.log(miSet);

// Borrar un elemento

miArray.splice(3, 1);
console.log(miArray);

miSet.delete(4);
console.log(miSet);

// Medir largo

console.log(miArray.length);
console.log(miSet.size);

// Buscar un valor

console.log(miArray.find(dato => dato == 30));
console.log(miSet.has(30));

// Vaciar
miArray = [];
console.log(miArray);
miSet.clear();
console.log(miSet);