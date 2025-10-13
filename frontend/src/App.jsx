import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./App.css"

function App() {

  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/busqueda" element={<Busqueda />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<Error />} /> */}
          {/* Ruta solo para admin */}
          {/* <Route
            path="/admin/*"
            element={
              <RutaPrivada rolesPermitidos={["admin"]}>
                <Admin />
              </RutaPrivada>
            }
          /> */}
          {/* Ruta solo para empleado */}
          {/* <Route
            path="/empleado"
            element={
              <RutaPrivada rolesPermitidos={["empleado"]}>
                <Empleado />
              </RutaPrivada>
            }
          /> */}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
