import connection from "../config/DB.js";

//obtener todos los productos
export const obtenerProductos = (req, res) => {
    connection.query("SELECT * from productos;", (error,results) => {
        if (error) throw error;
        res.json(results)
    })
}

//obtener un producto unico por id
export const obtenerProductoPorID = (req, res) => {
    const id = req.params.id

    connection.query("SELECT * from productos WHERE idProducto=?", [id], (error, results) => {
        if (error) throw error;
        res.json(results[0])
    })
}

//agrergar un producto
export const agregarProducto = (req, res) => {
    const {nombreProducto, descripcionProducto, precioProducto, stockProducto, categoriaProducto, imagenProducto, dimensionProducto} = req.body
    const query = "INSERT into productos (nombreProducto, descripcionProducto, precioProducto, stockProducto, categoriaProducto, imagenProducto, dimensionProducto) VALUES (?,?,?,?,?,?,?)"
    const values = [nombreProducto, descripcionProducto, precioProducto, stockProducto, categoriaProducto, imagenProducto, dimensionProducto]

    connection.query(query, values, (error, results) => {
        if (error) throw error;
        const nuevoId = results.insertId;
            connection.query("SELECT * from productos where idProducto=?", [nuevoId], (error, data) => {
                if (error) throw error;
                res.json(data[0])
            }
        );
    });
}

//editar un producto
export const editarProducto = (req, res) => {
    const id = req.params.id
    const {nombreProducto, descripcionProducto, precioProducto, stockProducto, categoriaProducto, imagenProducto, dimensionProducto} = req.body
    const query = "UPDATE productos SET nombreProducto=? , descripcionProducto=?, precioProducto=?, stockProducto=?, categoriaProducto=?, imagenProducto=?, dimensionProducto=? WHERE idProducto=?"
    const values = [nombreProducto, descripcionProducto, precioProducto, stockProducto, categoriaProducto, imagenProducto, dimensionProducto, id]

    connection.query(query, values, (error, results) => {
        if (error) throw error;
        res.json(results)
    })
}


//eliminar un producto
export const eliminarProducto = (req, res) => {
    const id = req.params.id
    const query = "DELETE from productos WHERE idProducto=?";

    connection.query(query, [id], (error, results) => {
        if (error) throw error;
        res.json(results)
    })
}