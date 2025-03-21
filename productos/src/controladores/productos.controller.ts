import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'RodolfoGod02',
    database: process.env.DB_NAME || 'Taller4O'
  });
  
  
  //Obtener
export const getBD = (req: any, res: any) => {
  connection.query('SELECT * FROM productos', (error, results) => {
    if (error) {
      console.error("Error al consultar la base de datos:", error);
      return res.status(500).json({ error: 'Error al obtener productos' });
    }
    res.json(results);
  });
};

// Insertar
export const insertBD = (req: any, res: any) => {
  try {
    const { nombre, precio, descripcion, categoria } = req.body;

    if (!nombre || !precio || !descripcion || !categoria) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if (isNaN(precio)) {
      return res.status(400).json({ error: 'El precio debe ser un número válido' });
    }
    console.log('El numero debe ser valido')

    const sql = 'INSERT INTO productos (nombre, precio, descripcion, categoria) VALUES (?, ?, ?, ?)';
    const values = [nombre, precio, descripcion, categoria];

    connection.query(sql, values, (error) => {
      if (error) {
        console.error('❌ Error al insertar en la base de datos:', error);
        return res.status(500).json({ error: 'Error al insertar el producto' });
      }
      res.status(201).json({ message: '✅ Producto insertado correctamente' });
    });
  } catch (error) {
    console.error('❌ Error inesperado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar
export const updateBD = (req: any, res: any) => {
  try {
    const {id} = req.params;
    const { nombre, precio, descripcion, categoria } = req.body;

    if(!id){
      return res.status(400).json({ error: 'El id del producto es obligatorio'});
    }

    if (!nombre || !precio || !descripcion || !categoria) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if (isNaN(precio)) {
      return res.status(400).json({ error: 'El precio debe ser un número válido' });
    }
    
    const sql = 'UPDATE productos set nombre = ?, precio = ?, descripcion = ?, categoria = ? WHERE id = ?';
    const values = [nombre, precio, descripcion, categoria, id];

    connection.query(sql, values, (error) => {
      if (error) {
        console.error('❌ Error al Actualizar en la base de datos:', error);
        return res.status(500).json({ error: 'Error al Actualizar el producto' });
      }
      res.status(201).json({ message: '✅ Producto Actualizado correctamente' });
    });
  } catch (error) {
    console.error('❌ Error inesperado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


// Eliminar
export const deleteBD = (req: any, res: any) => {
  try {
    const {id} = req.params;

    if(!id){
      return res.status(400).json({ error: 'El id del producto es obligatorio'});
    }
    
    const sql = 'DELETE FROM productos WHERE id = ?';
    const values = [id];

    connection.query(sql, values, (error) => {
      if (error) {
        console.error('❌ Error al Eliminar en la base de datos:', error);
        return res.status(500).json({ error: 'Error al Eliminar el producto' });
      }
      res.status(201).json({ message: '✅ Producto Eliminado correctamente' });
    });
  } catch (error) {
    console.error('❌ Error inesperado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};