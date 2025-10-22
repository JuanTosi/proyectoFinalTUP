import { Card, Col, Row, Button } from 'react-bootstrap';
import img from "../../assets/imgcarrusel2.jpg"
import "../../styles/producto-card.css"

const MostrarProductos = () => {
    return (
        <div className="cards-container">
            <Row xs={2} md={4} className="g-4">
                {Array.from({ length: 20 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>Planta de interior</Card.Title>
                                <Card.Text>
                                    $12.500
                                </Card.Text>
                            </Card.Body>
                            <div className="botones-cards">
                                <Button variant="outline-primary">Ver</Button>
                                <Button variant="outline-secondary">Agregar</Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default MostrarProductos