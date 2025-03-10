import express from "express";
import dotenv from "dotenv";
import usuariosRoutes from "./routes/usuario.routes";

dotenv.config({ path: "/home/taller4O/usuarios/src/.env" });

const app = express();
const PORT = process.env.PORT || 3008;

app.use("/usuarios", usuariosRoutes);

app.get('/', (req, res) => {
    res.send('Hola USUARIO!');
});

app.listen(PORT, () => {
    console.log("Puerto corriendo en el Puerto:", PORT);
});