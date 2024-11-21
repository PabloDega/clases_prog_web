document.querySelector("#btnChiste").addEventListener("click", () => {
  queryChiste();
})

function queryChiste(){
  fetch("http://www.official-joke-api.appspot.com/random_joke")
  .then((res) => res.json())
  .then((res) => {
    //console.log(res);
    mostrarChiste(res);
  })
}

function mostrarChiste(chiste){
  let codigo = 
  `<span>${chiste.setup}</span>
  <span>${chiste.punchline}</span>
  <hr>
  <span>Categoria: ${chiste.type}</span>`;
  document.querySelector("#chiste").innerHTML = codigo;
}

queryChiste();

//------------------------------

document.querySelector("#btnGatos").addEventListener("click", () => {
  queryGatos();
})

function queryGatos(){
  fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((res) => {
    //console.log(res);
    mostrarGatos(res);
  })
}

function mostrarGatos(hecho){
  let codigo = `<span>${hecho.fact}</span>`;
  document.querySelector("#gatos").innerHTML = codigo;
}

queryGatos();

//-----------------------------------------

document.querySelector("#btnPerro").addEventListener("click", () => {
  queryPerro();
});

function queryPerro(){
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((res) => {
    //console.log(res)
    mostrarPerro(res);
  })
}

function mostrarPerro(imagen){
  let codigo = `<img src="${imagen.message}">`;
  document.querySelector("#perro").innerHTML = codigo;
}

queryPerro();

//-------------------------------------

document.querySelector("#btnEdad").addEventListener("click", () => {
  let nombre = document.querySelector("#nombre").value;
  if(nombre === ""){
    window.alert("Ingrese un nombre para calcular la edad");
    return;
  }
  queryEdad(nombre);
});

function queryEdad(nombre){
  fetch(`https://api.agify.io?name=${nombre}&country_id=AR`)
  .then((res) => res.json())
  .then((res) => {
    //console.log(res);
    mostrarEdad(res)
  });
}

function mostrarEdad(edad){
  let codigo = `<span>Edad estimada: ${edad.age}</span>`;
  document.querySelector("#edad").innerHTML = codigo;
}