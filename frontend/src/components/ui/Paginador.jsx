import {
    Button, ButtonGroup, ButtonToolbar
} from 'react-bootstrap';
import "../../styles/producto-card.css"

const Paginador = () => {
    return (
        <div className='cards-container'>
            <div className="paginador">
                <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button variant="secondary">Prev</Button>
                        <Button variant="secondary">1</Button>
                        <Button variant="secondary">2</Button>
                        <Button variant="secondary">3</Button>
                        <Button variant="secondary">4</Button>
                        <Button variant="secondary">5</Button>
                        <Button variant="secondary">Next</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        </div>
    )
}

export default Paginador