import mysql2 from 'mysql2/promise';

export const getUsuarios = async () => {
  try {
    const connection = await mysql2.createConnection({
      host: "mysql-profepablo.alwaysdata.net",
      user: "387164",
      password: "compartir406",
      database: "profepablo_programacion"
    });
    let query = await connection.query(`SELECT * FROM usuarios`);
    return query;
  } catch (error) {
    console.log(error);
  }
}