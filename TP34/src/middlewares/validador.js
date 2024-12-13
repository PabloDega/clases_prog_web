let letrasHabilitadas = "abcdefghijklmnñopqrstuvwxyzáéíóúäëïöü ";
letrasHabilitadas = letrasHabilitadas.split("")

export const validarFormContacto = async (datos) => {
  let resp = {
    estado: true,
    msg:[]
  }

  let nombre = datos.nombre.trim().toLocaleLowerCase().split("");

  if(nombre.length === 0){
    resp.estado = false;
    resp.msg.push("Ingrese información en el campo nombre");
  }
  nombre.forEach((letra) => {
    let query = letrasHabilitadas.findIndex((letraH) => {
      return letraH === letra;
    })
    if(query === -1){
      resp.estado = false;
      resp.msg.push("Caracter no válido registrado");
    }
  });

  // ---- Validar telefono
  let telefono = Number(datos.telefono.trim());

  if(isNaN(telefono)){
    resp.estado = false;
    resp.msg.push("Error en el fomato del teléfono, solo ingresar números");
  }

  return resp;
}