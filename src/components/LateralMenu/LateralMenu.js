//css
import "./LateralMenu.css";
//react
import { NavLink, Link, useNavigate } from "react-router-dom";
//reat icons
import { FaPhoneAlt } from "react-icons/fa";
//hook
import { useAuth } from "../../hooks/useAuth";
//Slices
import { logout, reset } from "../../slices/authSlice";
//redux
import { useSelector, useDispatch } from "react-redux";

const LateralMenu = () => {
  //useAuth
  const { auth } = useAuth();
  //react
  const navigate = useNavigate();
  //Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/");
  };

  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 900;

    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }

  function scroolTopI() {
    const top = 0;

    smoothScrollTo(0, 0, 1000);
  }

  function closeMenu() {
    const Line = document.querySelector(".Navbar_content-Line");
    Line.classList.toggle("active");

    const lateralMenu = document.querySelector(".LateralMenu");

    if (lateralMenu.classList.contains("LateralMenu")) {
      lateralMenu.classList.toggle("LateralMenuJS");
      scroolTopI();
    }
  }

  return (
    <div>
      <div className="LateralMenu" onClick={closeMenu}>
        <div className="LateralMenu_box-contentifo">
          {!auth && (
            <div className="LateralMenu_user-name_user-image">
              <div className="LateralMenu_user-image"></div>
              <>
                <NavLink to="/auth">Logar/Cadastrar</NavLink>
              </>
            </div>
          )}
          <div className="LateralMenu_boxContent">
            <div className="LateralMenu_Content-Links">
              <NavLink to="/" className="LateralMenu_Link">
                Ínicio
              </NavLink>
              <NavLink to="/services" className="LateralMenu_Link">
                Serviçõs
              </NavLink>
              <NavLink to="/projects" className="LateralMenu_Link">
                Projetos
              </NavLink>
              <NavLink to="/contact" className="LateralMenu_Link">
                Contato
              </NavLink>
              {auth && (
                <>
                  <NavLink className="LateralMenu_Link" onClick={handleLogout}>
                    Sair...
                  </NavLink>
                </>
              )}
            </div>
            <div>
              <div className="LateralMenu_boxButtons">
                <a href="tel:+351934897540" className="LateralMenu_Button_link">
                  <div className="LateralMenu_Button_box">
                    <FaPhoneAlt />
                    <p>934 897 540</p>
                  </div>
                </a>
              </div>
              <div className="LateralMenu_boxButtons">
                <NavLink to="/contact" className="LateralMenu_Button_link_reservations">
                  Pedir orçãmento
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LateralMenu;
