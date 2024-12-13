import express from "express";
import { validarFormContacto } from "./src/middlewares/validador.js";
import { insertarDatosDeFormulario } from "./src/services/formularios.js";
import { getUsuarios } from "./src/services/login.js";
const app = express();
const PORT = 4000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.post("/contacto", async (req, res) => {
  console.log(req.body);
  // Validar
  const validacion = await validarFormContacto(req.body);
  //res.send(JSON.stringify(validacion))
  if (validacion.estado) {
    //codigo para validacion aprobada
    res.send("<h2>Formulario enviado con éxito</h2>");
    // etapa 2 - insertar datos en BBDD
    await insertarDatosDeFormulario(req.body);
  } else {
    //codigo para validacion desaprobada
    let respuesta = "<h2>Error en los datos ingresados</h2>";
    validacion.msg.forEach((msgError) => {
      respuesta += `<p>Error: ${msgError}</p>`;
    });
    res.send(respuesta);
  }
});

app.post("/login", async (req, res) => {
  //console.log(req.body)
  // comparar datos del body con bbdd
  let usuariosQuery = await getUsuarios()
  //console.log(usuariosQuery[0]);
  // Validacion del req.body!!!!!!
  let buscarUsuario = usuariosQuery[0].findIndex((reg) => reg.user === req.body.user);
  //console.log(buscarUsuario);
  if(buscarUsuario === -1){
    res.send("<h2>Datos erroneos</h2>");
    return;
  }
  if(req.body.pass !== usuariosQuery[0][buscarUsuario].pass){
    res.send("<h2>Datos erroneos</h2>");
    return;
  }
  res.send("<h2>Login correcto</h2>");
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
