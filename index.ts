import express from 'express'
import pool from './db';
import userRoutes from './modules/User/userRoutes';

const app = express();
const port = 3000;
app.use(express.json());

(async () => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    console.log('DB conectado, resultado:', rows);
  } catch (err) {
    console.error('Erro ao conectar no banco:', err);
  }
})();

userRoutes(app);

app.get("/", (req, res) => {
    res.send("Servidor Iniciado");
})

app.listen(port, () => {
    console.log("servidor rodando em http://localhost:" + port);
})