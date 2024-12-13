import mysql2 from 'mysql2/promise';

export const insertarDatosDeFormulario = async (datos) => {
  // Abrir conexion con la BBDD
  // instalar modulo (npm) mysql2
  try{
    const connection = await mysql2.createConnection({
      host: "mysql-profepablo.alwaysdata.net",
      user: "387164",
      password: "compartir406",
      database: "profepablo_programacion"
    });
    await connection.query(`INSERT INTO clase (nombre, telefono) VALUES ("${datos.nombre}", "${datos.telefono}")`);
  } catch(error) {
    console.log(error)
  }
}