import { Nav } from "react-bootstrap";
import { Link, useLocation, Routes, Route } from "react-router-dom";
import CrudProductos from "../components/CrudProductos";


const Admin = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div>
            <Nav justify variant="tabs" activeKey={currentPath}>
                <Nav.Item>
                    <Nav.Link as={Link} to="/admin" eventKey="/admin">
                        Inicio
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/admin/peliculas" eventKey="/admin/peliculas">
                        Productos
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/admin/productos" eventKey="/admin/productos">
                        Otros
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <div style={{ padding: "20px" }}>
                <CrudProductos />
                <Routes>
                    <Route path="/" element="" />
                    <Route path="productos" element="" />
                    <Route path="" element="" />
                    <Route path="" element="" />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;