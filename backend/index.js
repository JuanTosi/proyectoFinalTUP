const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config(); // Carga de variables del archivo .env
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Bienvenido a la db del vivero Patio1220"); // Verificacion de conexion
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});