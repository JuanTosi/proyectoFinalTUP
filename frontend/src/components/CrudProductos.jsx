import { useState, useEffect } from "react";
import axios from "axios";
import { PRODUCTOS_URL } from "../constants/constants";
import Table from 'react-bootstrap/Table';


const CrudProductos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get(PRODUCTOS_URL)
            .then((response) => {
                setProductos(response.data)
            })
            .catch((error) => {
                console.error("error al obtener los productos", error)
            })
    }, [])

    return (
        <div>
            <h2 className="mb-3">Listado de Productos</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoría</th>
                        <th>Dimensiones</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod) => (
                        <tr key={prod.idProducto}>
                            <td>{prod.idProducto}</td>
                            <td>{prod.nombreProducto}</td>
                            <td>{prod.descripcionProducto}</td>
                            <td>${prod.precioProducto}</td>
                            <td>{prod.stockProducto}</td>
                            <td>{prod.categoriaProducto}</td>
                            <td>{prod.dimensionProducto}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default CrudProductos