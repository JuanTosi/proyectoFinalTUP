// ACA SOLO SE MANEJAN PETICIONES HTTP -> habla con el backend para pedir y con prod.store para exportarle
// funciones que llevaria el crud: get, create, update, delete y exportarlas
import {PRODUCTOS_URL} from "../constants/constants.js"
import axios from "axios"

export const getProductos = async ()=> {
    try {
        const response = await axios.get(PRODUCTOS_URL)
        return response.data;
    } catch (error) {
        console.error("Error al obtener los productos: ",error)
        throw error;
    }
}

export const createProducto = async (productoData) => {
    try {
        const response = await axios.post(PRODUCTOS_URL, productoData)
        return response.data
    } catch (error) {
        console.error("Error al crear el producto: ",error)
        throw error;
    }
}

export const updateProducto = async (idProducto, productoData) => {
    try {
        const response = await axios.put(`${PRODUCTOS_URL}/${idProducto}`, productoData)
        return response.data
    } catch (error) {
        console.error("Error al actualizar el producto: ",error)
        throw error;
    }
}

export const deleteProducto = async (idProducto) => {
    try {
        const response = await axios.delete(`${PRODUCTOS_URL}/${idProducto}`)
        return response.data
    } catch (error) {
        console.error("Error al eliminar el producto: ",error)
        throw error;
    }
}