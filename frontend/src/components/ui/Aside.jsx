import { Form, Button, InputGroup } from "react-bootstrap";
import "../../styles/producto-card.css";

const Aside = () => {
    return (
        <div className="aside">
            <div className="aside-bar bg-light py-3 px-4 shadow-sm rounded d-flex flex-wrap gap-3 justify-content-between align-items-center">                <InputGroup className="w-auto">
                <Form.Control type="text" placeholder="Buscar producto..." />
                <Button variant="outline-secondary">🔍</Button>
            </InputGroup>
                <Form.Select className="w-auto">
                    <option value="">Todas las categorías</option>
                    <option value="plantas">Plantas</option>
                    <option value="macetas">Macetas</option>
                    <option value="fertilizantes">Fertilizantes</option>
                    <option value="herramientas">Herramientas</option>
                    <option value="herramientas">Otros</option>
                </Form.Select>
                <Form.Select className="w-auto">
                    <option value="az">Ordenar A-Z</option>
                    <option value="precioAsc">Menor precio</option>
                    <option value="precioDesc">Mayor precio</option>
                </Form.Select>
                <div className="d-flex align-items-center gap-2">
                    <Form.Control type="number" placeholder="Desde" className="w-25" />
                    <span>-</span>
                    <Form.Control type="number" placeholder="Hasta" className="w-25" />
                    <Button variant="outline-secondary">Aplicar filtros</Button>
                </div>
            </div>
        </div>
    )
}

export default Aside