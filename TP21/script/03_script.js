document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let validacion = validarForm();
  if(validacion){
    console.log("Enviar formulario");
  } else {
    console.log("Validación rechazada");
  }
});

function validarForm(){
  // console.log("validarForm");
  // verificar campos vacios
  let nombre = document.querySelector("#nombre");
  let apellido = document.querySelector("#apellido");
  let dni = document.querySelector("#dni");

  if(nombre.value === "" || apellido.value === "" || dni.value === ""){
    window.alert("Debe completar todos los campos");
    return false;
  }
  
  if(dni.value.length !== 8){
    window.alert("El DNI debe tener 8 digitos")
    return false;
  }

  // verificar tipo de dato
  if(isNaN(dni.value)){
    window.alert("El campo DNI solo acepta numeros");
    return false;
  }

  let letrasAprobadas = "abcdefghijklmnñopqrstuvwxyzáéíóúàèìòùäëïöü ".split("");
  
  let arrayNombre = nombre.value.split("");
  let resp = true;
  arrayNombre.forEach((letra) => {
    let resultado = letrasAprobadas.indexOf(letra.toLowerCase());
    if(resultado === -1){
      resp = false;
    }
  });

  if(!resp){
    window.alert("El campo nombre solo acepta letras");
    return false;
  }
  //---------------------------
  let arrayApellido = apellido.value.split("");
  resp = true;
  arrayApellido.forEach((letra) => {
    let resultado = letrasAprobadas.indexOf(letra.toLowerCase());
    if(resultado === -1){
      resp = false;
    }
  });

  if(!resp){
    window.alert("El campo apellido solo acepta letras");
    return false;
  }

  document.querySelector("#resultados").innerHTML += `Nombre recibido: ${nombre.value} <br>Apellido recibido: ${apellido.value} <br>DNI recibido: ${dni.value}`;

  return true;
}