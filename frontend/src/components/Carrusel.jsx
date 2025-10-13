import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/imgcarrusel1.jpg';
import img2 from '../assets/imgcarrusel2.jpg';
import img3 from '../assets/imgcarrusel3.jpg';
import '../styles/carrusel.css';

const Carrusel = () => {
    return (
        <div className="carrusel-container">
            <Carousel fade interval={3000}>
                {[
                    { src: img1, title: 'Plantas', text: 'Cuidamos la naturaleza en tu hogar.' },
                    { src: img2, title: 'Paisajismo', text: 'Diseñamos espacios verdes únicos.' },
                    { src: img3, title: 'Jardinería', text: 'Servicios personalizados y asesoramiento.' }
                ].map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 carrusel-img"
                            src={item.src}
                            alt={item.title}
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Carrusel;
