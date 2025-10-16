import "../../styles/footer.css";
import { FaInstagram, FaWhatsapp, FaLocationArrow, FaCalendarAlt, FaPhone, FaInbox } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="content-izq">
                <h2>INFO</h2>
                <p>
                    <FaCalendarAlt /> Lunes a Sábado - 8:00 a 18:00 hs
                    <br />
                    <FaLocationArrow /> Sta. Fe 4600, San Miguel de Tucumán.
                </p>
            </div>
            <div className="content-der">
                <h2>CONTACTO</h2>
                <p>
                    <FaInstagram /> @patio.1220
                    <br />
                    <FaWhatsapp /> 381-1234567
                    {/* <br /> */}
                    {/* <FaPhone /> Teléfono - 381-1234567 */}
                </p>
            </div>
            {/* <div className="content-footer">
                <h2>MAPA</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113951.83867900548!2d-65.34245417571199!3d-26.808289148327574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94225dd5528652f1%3A0x8f508b4561b1dbd1!2sSta.%20Fe%204600%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!3m2!1d-26.808313!2d-65.2600527!5e0!3m2!1ses!2sar!4v1760320534634!5m2!1ses!2sar"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación del vivero"
                ></iframe>
            </div> */}
        </div>
    );
};

export default Footer;
