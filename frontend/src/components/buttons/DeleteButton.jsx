import Button from 'react-bootstrap/Button';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useProductosStore } from '../../store/useProductosStore';

const DeleteButton = ({ idProducto }) => {
    const { deleteProducto } = useProductosStore();

    const handleDelete = () => {
        if (window.confirm("¿Seguro que desea eleiminar este producto?")) {
            deleteProducto(idProducto);
        }
    }
    return (
        <div>
            <Button variant="outline-danger" onClick={handleDelete}>
                <FaRegTrashAlt />
            </Button>
        </div>
    )
}

export default DeleteButton