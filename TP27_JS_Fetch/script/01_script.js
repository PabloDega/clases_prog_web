let parrafo = document.querySelector("#txt1");

fetch("./data/data.json")
.then((res) => res.json())
.then((res) => {
    //console.log(res);
    //parrafo.innerHTML = JSON.stringify(res);
    ordenar(res);
    })
.catch((e) => console.log(e));

function ordenar(res){
    let texto = 
    `<table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Mail</th>
                <th>Direccion</th>
                <th>Telefono</th>
            </tr>
        </thead>
        <tbody>`;

    res.forEach((dato) => {
        texto += 
        `<tr>
            <td>${dato.nombre}</td>
            <td>${dato.apellido}</td>
            <td>${dato.mail}</td>
            <td>${dato.direccion}</td>
            <td>${dato.telefono}</td>
        </tr>`;
    });

    texto += "</tbody></table>";
    parrafo.innerHTML = texto;
}

