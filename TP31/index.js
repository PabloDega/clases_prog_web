let http = require("http")

let PORT = 4000;

http.createServer((req, res) => {
  if(req.url === "/"){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("<h1>Home</h1>")
    res.end();
  } else if(req.url === "/productos"){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("<h1>Productos</h1>")
    res.end();
  } else if (req.url === "/contactos"){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("<h1>Contactos</h1>")
    res.end();
  } else {
    res.writeHead(404, {'Content-type': 'text/html'});
    res.write("<h1>404</h1>")
    res.write("<p>Dirección inexistente</p>")
    res.end();
  }
}).listen(PORT);