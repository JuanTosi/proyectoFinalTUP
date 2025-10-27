// ACA SE MANEJA LA LOGICA (FUNCIONES) Y LOS ESTADOS
// importa las funciones del service y las usa para devolver UI en componentes
import {create} from "zustand"
import { getProductos , createProducto , updateProducto , deleteProducto } from "../services/productosServices.js"

export const useProductosStore = create ((set,get) => ({
    productos: [],
    productoSeleccionado: null,
    isLoading: false,
    error: null,

    fetchProductos: async () => {
        try {
            set({ isLoading: true, error: null});
            const data = await getProductos();
            set ({productos: data, isLoading: false});
        } catch (error) {
            console.error("Error al obtener productos: ",error)
            set ({error: "No se pudieron cargar los productos", isLoading: false})
        }
    },

    addProducto: async (productoData) => {
        try {
            set({ isLoading: true, error: null});
            const nuevoProducto = await createProducto(productoData);
            const productosActuales = get().productos;
            set ({productos:[...productosActuales, nuevoProducto], isLoading: false})
        } catch (error) {
            console.error("Error al agregar el producto: ",error)
            set ({error: "No se pudo agregar el producto", isLoading: false})
        }
    },

    // updateProducto: async (idProducto, productoData) => {
    //     try {
    //         set ({ isLoading: true, error: null });
    //         const productoActualizado = await updateProducto(idProducto, productoData);
    //         const productosActuales = get().productos;
    //         const productosActualizados = productosActuales.map((prod) =>
    //         prod.idProducto === idProducto ? productoActualizado : prod);
    //         set({productos: productosActualizados, isLoading: false})
    //     } catch (error) {
    //         console.error("Error al editar el producto: ",error)
    //         set ({error: "No se pudo editar el producto", isLoading: false})
    //     }
    // },

    updateProducto: async (idProducto, productoData) => {
  try {
    set({ isLoading: true, error: null });
    const productoActualizado = await updateProducto(idProducto, productoData);
    const productosActuales = get().productos;
    const productoValido =
      productoActualizado && productoActualizado.idProducto
        ? productoActualizado
        : { ...productoData, idProducto: Number(idProducto) };
    const productosActualizados = productosActuales.map((prod) =>
      Number(prod.idProducto) === Number(idProducto) ? productoValido : prod
    );
    set({ productos: productosActualizados, isLoading: false });
  } catch (error) {
    console.error("Error al editar el producto:", error);
    set({
      error: "No se pudo editar el producto",
      isLoading: false,
    });
  }
},

    deleteProducto: async (idProducto) => {
        try {
            set ({ isLoading: true, error: null });
            await deleteProducto(idProducto);
            const productosActuales = get().productos;
            const productosActualizados = productosActuales.filter((prod) =>
            prod.idProducto !== idProducto);
            set ({ productos: productosActualizados, isLoading: false});
        } catch (error) {
            console.error("Error al eliminar el producto: ",error)
            set ({error: "No se pudo eliminar el producto", isLoading: false})
        }
    },

    setProductoSeleccionado: (producto) => {
        set({ productoSeleccionado: producto});
    }
}))






