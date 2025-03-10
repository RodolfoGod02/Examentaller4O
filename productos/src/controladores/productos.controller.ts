import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'RodolfoGod02',
    database: process.env.DB_NAME || 'Taller4O'
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