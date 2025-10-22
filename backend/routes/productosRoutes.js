import express from "express";
import {obtenerProductos, obtenerProductoPorID, agregarProducto, editarProducto, eliminarProducto} from "../controllers/productosController.js";

const router = express.Router();

router.get("/", obtenerProductos);
router.get("/:id", obtenerProductoPorID);
router.post("/", agregarProducto);
router.put("/:id", editarProducto);
router.delete("/:id", eliminarProducto);

export default router;