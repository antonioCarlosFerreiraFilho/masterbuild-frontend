import { NavLink } from "react-router-dom";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="WhoWeAre-general">
      <div className="WhoWeAre">
        <div>
          <div className="WhoWeAre_content-shadow">
            <div className="WhoWeAre_info">
              <p>Trabalhe conosco.!</p>
              <h1>Sobre nossa Construtora.</h1>
            </div>
            <div className="WhoWeAre_info">
              <p>
                Somos uma empresa de construção civil líder, dedicada a oferecer
                soluções abrangentes e de alta qualidade para uma ampla gama de
                projetos. Contamos com uma equipe diversificada de profissionais
                altamente qualificados, incluindo arquitetos, engenheiros civis,
                eletricistas, canalizadores, pintores e muito mais.
              </p>
            </div>
            <div className="WhoWeAre_professionals">
              <h1>Contamos com diversos Proficionais.</h1>
              <div>
                <ul>
                  <li>Eletricistas</li>
                  <li>Pintores</li>
                  <li>Canalizadores</li>
                  <li>Pedreiros</li>
                  <li>Engenheiros</li>
                  <li>Aplicador de pladur</li>
                  <li>Condutor Manobrador de Gruas</li>
                  <li>Soldador Gas / Metais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
