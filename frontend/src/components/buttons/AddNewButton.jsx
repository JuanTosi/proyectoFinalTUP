import Button from 'react-bootstrap/Button';
import { FaPlus } from 'react-icons/fa';

const AddNewButton = ({ onOpenModal }) => {
    return (
        <div>
            <Button variant="outline-success" onClick={onOpenModal}>
                Agregar
                <FaPlus />
            </Button>
        </div>
    )
}

export default AddNewButton