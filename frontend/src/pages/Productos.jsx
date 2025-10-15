import {
  Card, Col, Row, Button, ButtonGroup, ButtonToolbar, Form, InputGroup
} from 'react-bootstrap';
import img from "../assets/imgcarrusel2.jpg"
import "../styles/producto-card.css"

const Productos = () => {
  return (
    <div>
      <div className="separador">
        <div className="aside">
          <h4>Filtros</h4>
          <h5>Barra de busqueda</h5>
          <h5>Ordenar por: A/Z - $+ / $-</h5>
          <h5>Categorias: plantas - macetas - fertilizantes - herramientas</h5>
          <h5>Precio: desde - hasta</h5>
        </div>

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
                  <div className="botones-container">
                    <Button variant="outline-primary">Ver</Button>
                    <Button variant="outline-secondary">Agregar</Button>
                  </div>
                </Card>
              </Col>
            ))}
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
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Productos