import mysql2 from 'mysql2/promise';

export const getUsuarios = async () => {
  try {
    const connection = await mysql2.createConnection({
      host: "",
      user: "",
      password: "",
      database: ""
    });
    let query = await connection.query(`SELECT * FROM usuarios`);
    return query;
  } catch (error) {
    console.log(error);
  }
}