import Button from 'react-bootstrap/Button';
import { FaEye } from 'react-icons/fa';
import { useProductosStore } from '../../store/useProductosStore';

const ViewButton = ({ producto, onOpenModal }) => {
    const { setProductoSeleccionado } = useProductosStore();

    const handleView = () => {
        setProductoSeleccionado(producto);
        onOpenModal();
    }

    return (
        <div>
            <Button variant="outline-primary" onClick={handleView}>
                <FaEye />
            </Button>
        </div>
    )
}

export default ViewButton