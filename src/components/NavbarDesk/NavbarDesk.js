//css
import "./NavbarDesk.css";
//react
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
//hook authUser
import { useAuth } from "../../hooks/useAuth";

const NavbarDesk = () => {

  //useAuth
  const {auth, loading} = useAuth();

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

  function scroolMenu() {
    const itens = document.querySelector(".NavbarDesk_links");

    itens.addEventListener("click", () => {
      scroolTopI();
    });
  }

  useEffect(() => {
    const TimeFun = setTimeout(() => {
      scroolMenu();
    }, 1000);

    return () => clearTimeout(TimeFun);
  }, []);

  return (
    <div className="NavbarDesk">
      <div>
        <div>
          <div className="NavbarDesk_links">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/services">serviçõs</NavLink>
            <NavLink to="/projects">projetos</NavLink>
            <NavLink to="/contact">contato</NavLink>
            {!auth && (
              <>
                <NavLink to="/auth">Logar</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesk;
