//css
import "./InfoServices.css";
//react
import {NavLink} from 'react-router-dom';

const InfoServices = () => {

  
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
      <div className="InfoServices">

        <div className="InfoServices_content">
          <div>
            <h1>Excelência em Construção</h1>
          </div>
          <div>
            <p>a <strong>MasterBuild</strong> atua em toda grande Lisboa</p>
          </div>
          <div className="InfoServices_boxContent-link">
            <NavLink to="/contact" className="InfoServices_Link-contact"  onClick={scroolTopI}>Peça um orçamento</NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoServices;
