let http = require("http");
let fs = require("fs");
let url = require("url");

http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(data)
    res.end();
    /* console.log(req.url);
    let direccion = url.parse(req.url, true);
    console.log(direccion); */
  })
}).listen(4000);

console.log("Servidor activo en http://localhost:4000")