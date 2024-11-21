fetch("./data/data.json")
.then((res) => res.json())
.then((res) => {
  console.log(res);
  mostrarDatos(res);
})
.catch((err) => {console.log(err)})

function mostrarDatos(datos){
  let vista = `<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Mail</th>
      <th>Dirección</th>
      <th>Teléfono</th>
    <tr>
  </thead>
  <tbody>`;
  datos.forEach((dato) => {
    vista += `<tr>
      <td>${dato.nombre}</td>
      <td>${dato.apellido}</td>
      <td>${dato.mail}</td>
      <td>${dato.direccion}</td> 
      <td>${dato.telefono}</td>
    </tr>`;
  });
  vista += `</tbody></table>`;
  document.querySelector("#txt").innerHTML = vista;
}