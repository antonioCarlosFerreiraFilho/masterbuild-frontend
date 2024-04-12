//css
import "./Navbar.css";
//react
import { NavLink } from "react-router-dom";
//components
import NavbarDesk from "../NavbarDesk/NavbarDesk";

const Navbar = () => {

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

    smoothScrollTo(0, 0, 0);
  }


  //Click Menu Animaded
  function MenuAnimaded(){

    const Line = document.querySelector(".Navbar_content-Line");
    Line.classList.toggle("active");

    const lateralMenu = document.querySelector(".LateralMenu"); 

    if(lateralMenu.classList.contains("LateralMenu")) {

      lateralMenu.classList.toggle("LateralMenuJS");
    }
  }

  return (
    <div>
      <div className="Navbar">
        <div className="Navbar_content">
          <div>
            <NavLink to="/" onClick={scroolTopI} className="Navbar_link-compani">
              <div className="Navbar_content-company-info">
                <div className="Navbar_logo"></div>
                <div className="Navbar_company">
                  <p>Master</p>
                  <p>Build</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="Navber_boxMenu">
            <div className="Navbar_content-Menu" onClick={MenuAnimaded}>
              <span className="Navbar_content-Line"></span>
            </div>
          </div>
          <div className="Navbar_content-menuDesk">
            <NavbarDesk />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
