//css
import { NavLink } from "react-router-dom";
import "./BannerInfinite.css";
//react
import { useEffect } from "react";

const BannerInfinite = () => {
  function Slider() {
    let counter = 0;
    const box = document.querySelector(".BannerInfinite_container");
    const images = document.querySelectorAll(".BannerInfinite_container img");

    const Muve = () => {
      counter = counter + 1;

      if (counter > images.length - 1) {
        counter = 0;
      }

      box.style.transform = `translateX(${-counter * 100}%)`;
    };

    setInterval(Muve, 4000);
  }

  useEffect(() => {
    Slider();
  }, []);

  return (
    <div className="BannerInfinite">
      <div className="BannerInfinite_contentGeneral">
        <div className="BannerInfinite_carrossel">
          <div className="BannerInfinite_shadow"></div>
          <div className="BannerInfinite_container">
            <img src="/banner/banner_03.jpg" alt="services MasterBuild" />
            <img
              src="/Services_pro/Services_pro-01.jpg"
              alt="services MasterBuild"
            />
            <img
              src="/Services_pro/Services_pro-02.jpg"
              alt="services MasterBuild"
            />
            <img
              src="/Services_pro/Services_pro-03.jpg"
              alt="services MasterBuild"
            />
            <img
              src="/Services_pro/Services_pro-04.jpg"
              alt="services MasterBuild"
            />
            <img
              src="/Services_pro/Services_pro-05.jpg"
              alt="services MasterBuild"
            />
          </div>
          <div className="BannerInfinite_content-infos">
            <h1>Construção feita sob medida, qualidade garantida.</h1>
            <div>
              <p>
                Nossa empresa de construção oferece uma equipe completa de
                profissionais, incluindo eletricistas, canalizadores, pintores e
                engenheiros. Com especialização em todos os aspectos da
                construção
              </p>
            </div>
            <div className="BannerInfinite_box-link">
              <NavLink to="/contact">Contactar</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="BannerInfinite_scratched"></div>
    </div>
  );
};

export default BannerInfinite;
