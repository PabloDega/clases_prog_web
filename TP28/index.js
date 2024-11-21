let http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'});
  res.write("Hola, esta es mi hermosa web");
  res.end();
  console.log(req.url);
}).listen(4000);

console.log("Servidor activo en http://localhost:4000")