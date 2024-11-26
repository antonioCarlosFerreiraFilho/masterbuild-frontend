//css
import "./Banner.css";
//react
import { NavLink } from "react-router-dom";
//react icons
import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="Banner">
        <div className="Banner_content-info">
          <div className="Banner_boxInfos">
            <div className="Banner_slogan-animate">
              <h1>Construindo Sonhos, Erguendo Realidades.</h1>
            </div>
            <div className="Banner_slogan">
              <p>Orçamentos a medida para o seu negocio.</p>
            </div>
            <div className="Banner_boxes">
              <div className="Banner_box-links link-project">
                <NavLink to="/projects" className="Banner_link">
                  Ver Projetos
                </NavLink>
              </div>
              <div className="Banner_box-links">
                <NavLink to="/contact" className="Banner_link">
                  Contactar
                </NavLink>
              </div>
            </div>
            <div className="Banner_box_Contact-Phone">
              <div className="Banner_box_Link-phone">
                <a href="tel:+351934897540">
                  <FaPhoneAlt className="Banner_box_icon-Phone"/>
                </a>
              </div>
              <div className="Banner_box_number-Contact">
                <p>Ligue-nos</p>
                <p>+351 934 897 540</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Banner_scratched"></div>
      </div>
    </div>
  );
};

export default Banner;
