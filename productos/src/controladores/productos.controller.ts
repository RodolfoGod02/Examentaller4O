import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DB || 'Taller4O'
  });
  
  export const getAll = (req: any, res: any) => {
    connection.query('SELECT * FROM productos', (error, results) => {
      if (error) {
        console.error("Error al consultar la base de datos:", error);
        return res.status(500).json({ error: 'Error al obtener productos' });
      }
      res.json(results);
    });
  };