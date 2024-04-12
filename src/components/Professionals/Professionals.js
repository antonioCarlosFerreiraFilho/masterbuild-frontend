//css
import "./Professionals.css";
//react
import { NavLink } from "react-router-dom";

const Professionals = () => {
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

  return (
    <div>
      <div className="Professionals">
        <div className="Professionals_scratched"></div>
        <div className="Professionals_content">
          <div className="Professionals_box-services">
            <p className="Professionals_title">O que Oferecemos</p>
            <h1>
              oferecemos uma ampla gama de serviços para atender às necessidades
              de nossos clientes.
            </h1>
            <div>
              <p className="Professionals_description">
                Com um compromisso com a excelência e a satisfação do cliente,
                estamos prontos para transformar suas ideias em realidade e
                construir espaços que você ama e desfruta por muitos anos.
              </p>
            </div>
          </div>
          <div className="Professionals_Read-more">
            <NavLink to="/services" onClick={scroolTopI}>
              Nossos Proficionais
            </NavLink>
          </div>
        </div>
        <div className="Professionals_services-boxes">
          <div className="Professionals_services">
            <div className="Professionals_box-content-infos">
              <img src="/professionals/skyscraper.png" alt="" />
              <div>
                <p>Construção Predial e restauraçôes</p>
              </div>
            </div>

            <div className="Professionals_box-content-infos">
              <img src="/professionals/home.png" alt="" />
              <div>
                <p>Remodelações residenciais</p>
              </div>
            </div>

            <div className="Professionals_box-content-infos">
              <img src="/professionals/project.png" alt="" />
              <div>
                <p>Projetos Certificados</p>
              </div>
            </div>

            <div className="Professionals_box-content-infos">
              <img src="/professionals/electrician.png" alt="" />
              <div>
                <p>Eletricista 24H</p>
              </div>
            </div>

            <div className="Professionals_box-content-infos">
              <img src="/professionals/plumber.png" alt="" />
              <div>
                <p>Canalizadores</p>
              </div>
            </div>

            <div className="Professionals_box-content-infos">
              <img src="/professionals/painter.png" alt="" />
              <div>
                <p>Pintores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professionals;
