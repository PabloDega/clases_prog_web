function queryChiste(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((res) => {
        //console.log(res);
        mostrarChiste(res);
    });
};

function mostrarChiste(chiste){
    let codigo = `<span>${chiste.setup}</span>
    <span>${chiste.punchline}</span>
    <hr>
    <span>Tipo: ${chiste.type}</span>`;

    document.querySelector("#chiste").innerHTML = codigo;
};

document.querySelector("#btnChiste").addEventListener("click", () => {
    queryChiste()
});

queryChiste();

//--------------------------------

function queryGatos(){
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((res) => {
        //console.log(res);
        mostrarGatos(res);
    })
}

function mostrarGatos(dato){
    let codigo = `<span>${dato.fact}</span>`;
    document.querySelector("#gatos").innerHTML = codigo
}

document.querySelector("#btnGatos").addEventListener("click", () => {
    queryGatos()
})

queryGatos();

//---------------

function queryPerritos(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => {
        //console.log(res)
        mostrarPerritos(res)
    })
}

function mostrarPerritos(img){
    let codigo = `<img src="${img.message}">`
    document.querySelector("#perrito").innerHTML = codigo;
}

document.querySelector("#btnPerrito").addEventListener("click", () => {
    queryPerritos()
})

queryPerritos();

//------------------------

document.querySelector("#btnEdad").addEventListener("click", () => {
    let nombre = document.querySelector("#nombre").value;
    if(nombre === ""){
        window.alert("Ingrese un nombre para calcular la edad");
        return;
    }
    queryEdad(nombre);
})

function queryEdad(nombre){
    fetch(`https://api.agify.io/?name=${nombre}&country_id=AR`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        mostrarEdad(res)
    })
}

function mostrarEdad(res){
    let codigo = `<span>Edad calculada: ${res.age}</span>`
    document.querySelector("#edad").innerHTML = codigo;
}