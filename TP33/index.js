const express = require("express");
const app = express();

const PORT = 4000;

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
  res.send(`<form action="/" method="post">
  <input type="text" name="nombre" placeholder="nombre">
  <input type="text" name="apellido" placeholder="apellido">
  <input type="submit" value="Enviar">
</form>`);
})

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Post recibido, gracias")
});

app.listen(PORT, () => {
  console.log(`Servidor está activo en http://localhost:${PORT}`);
})