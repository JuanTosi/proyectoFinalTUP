import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/header.css"

const Header = () => {

    return (
        <div className='header'>
            <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Patio 1220 🌿</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/productos">Productos</Nav.Link>
                            <Nav.Link href="#NuestrosServicios">Servicios</Nav.Link>
                            <Nav.Link href="#SobreNosotros">Sobre Nosotros</Nav.Link>
                            <NavDropdown title="Mas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Algo 1</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Algo 2</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header