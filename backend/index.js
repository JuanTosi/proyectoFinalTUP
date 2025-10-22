import express from "express";
import cors from "cors";
import "dotenv/config"
import productosRoutes from "./routes/productosRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use("/productos", productosRoutes)

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Bienvenido a la db del vivero Patio1220"); // verificacion de conexion
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});