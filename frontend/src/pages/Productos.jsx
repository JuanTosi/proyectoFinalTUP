import Aside from '../components/ui/Aside';
import MostrarProductos from '../components/ui/MostrarProductos';
import Paginador from '../components/ui/Paginador';
import "../styles/producto-card.css"

const Productos = () => {
  return (
    <div className="productos-layout">
      <Aside />
      <div className="productos-main">
        <MostrarProductos />
        <Paginador />
      </div>
    </div>
  )
}

export default Productos