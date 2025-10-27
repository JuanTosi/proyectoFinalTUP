import Button from "react-bootstrap/Button";
import { FaPencil } from "react-icons/fa6";
import { useProductosStore } from "../../store/useProductosStore.js";

const EditButton = ({ producto, onOpenModal }) => {
    const { setProductoSeleccionado } = useProductosStore();

    const handleEdit = () => {
        setProductoSeleccionado(producto);
        onOpenModal();
    }

    return (
        <div>
            <Button variant="outline-warning" onClick={handleEdit} >
                <FaPencil />
            </Button>
        </div>
    )
}

export default EditButton