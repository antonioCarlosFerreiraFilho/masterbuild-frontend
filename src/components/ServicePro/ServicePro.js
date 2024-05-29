//css
import "./ServicePro.css";
//react
import { useEffect } from "react";

const ServicePro = () => {
  function AnimateView() {
    const CardL = document.querySelectorAll(".CardsProjects-card");

    let Scrool = window.addEventListener("scroll", () => {
      const winTop = Math.floor(
        window.pageYOffset + (window.innerHeight * 2) / 4
      );

      CardL.forEach((element) => {
        if (winTop > element.offsetTop) {
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      });
    });
  }

  useEffect(() => {
    const Timer = setTimeout(() => {
      AnimateView();
    }, 1000);

    return () => clearTimeout(Timer);
  }, []);

  return (
    <div>
      <div className="ServicePro">
        <div className="ServicePro_content-cards">
          <div className="CardsProjects-card">
            <div className="ServicePro_boxContent-image">
              <img src="/Services_pro/Services_pro-00.jpg" alt="" />
            </div>
            <div className="ServicePro_content-info">
              <div className="ServicePro_Line"></div>
              <div className="ServicePro_contentTXT">
                <h1>Eletricidade</h1>
                <p>
                  Oferecemos serviços elétricos residenciais de alta qualidade,
                  disponíveis 24 horas por dia, 7 dias por semana. Nossa equipe
                  de eletricistas certificados está pronta para resolver
                  qualquer problema elétrico com rapidez e segurança.
                </p>
                <p>
                  Seja para uma simples troca de lâmpadas ou uma remodelação
                  elétrica completa, estamos aqui para oferecer a expertise e o
                  profissionalismo necessários para garantir que sua residência
                  esteja sempre segura e totalmente equipada para atender às
                  suas necessidades de energia elétrica.
                </p>
              </div>
            </div>
          </div>

          <div className="CardsProjects-card">
            <div className="ServicePro_boxContent-image ServicePro_boxContent-imageDesk">
              <img src="/Services_pro/Services_pro-01.jpg" alt="" />
            </div>
            <div className="ServicePro_content-info ServicePro_content-infoDesk">
              <div className="ServicePro_Line"></div>
              <div className="ServicePro_contentTXT">
                <h1>Pintura</h1>
                <p>
                  Nosso serviço de pintura residencial e externa oferece uma
                  transformação completa para sua casa, adicionando beleza e
                  proteção às superfícies internas e externas. Com uma equipe de
                  pintores altamente qualificados e experientes, estamos
                  comprometidos em fornecer resultados excepcionais que atendam
                  às suas expectativas e excedam suas necessidades.
                </p>
                <p>
                  Além de oferecer uma ampla gama de cores e acabamentos para
                  atender ao seu estilo e preferências, também fornecemos
                  consultoria especializada para garantir a escolha certa de
                  produtos e cores para cada ambiente e superfície.
                </p>
              </div>
            </div>
          </div>

          <div className="CardsProjects-card">
            <div className="ServicePro_boxContent-image">
              <img src="/Services_pro/Services_pro-02.jpg" alt="" />
            </div>
            <div className="ServicePro_content-info">
              <div className="ServicePro_Line"></div>
              <div className="ServicePro_contentTXT">
                <h1>Construções</h1>
                <p>
                  Nosso serviço de construção predial e reformas de prédios
                  históricos combina a expertise moderna com um profundo
                  respeito pela herança arquitetônica. Com uma equipe de
                  profissionais especializados em preservação histórica e
                  restauração, estamos comprometidos em revitalizar e preservar
                  os tesouros arquitetônicos do passado para as gerações
                  futuras.
                </p>
                <p>
                  Quando se trata de reformas de prédios históricos, nossa
                  abordagem é guiada pelo respeito pela história e autenticidade
                  do edifício. Trabalhamos em estreita colaboração com
                  arquitetos e historiadores especializados para preservar e
                  restaurar elementos originais, ao mesmo tempo em que
                  introduzimos atualizações modernas necessárias para garantir a
                  funcionalidade e a conformidade com os padrões contemporâneos.
                </p>
              </div>
            </div>
          </div>

          <div className="CardsProjects-card">
            <div className="ServicePro_boxContent-image ServicePro_boxContent-imageDesk">
              <img src="/Services_pro/Services_pro-03.jpg" alt="" />
            </div>
            <div className="ServicePro_content-info ServicePro_content-infoDesk">
              <div className="ServicePro_Line"></div>
              <div className="ServicePro_contentTXT">
                <h1>Remodelações</h1>
                <p>
                  Para projetos de construção residencial, oferecemos um serviço
                  completo desde o planejamento inicial até a entrega final.
                  Trabalhamos em estreita colaboração com você para entender
                  seus objetivos e requisitos, garantindo que cada detalhe do
                  projeto seja cuidadosamente considerado e implementado. Nosso
                  foco está na qualidade, durabilidade e funcionalidade,
                  utilizando materiais de alta qualidade e técnicas de
                  construção comprovadas para garantir resultados excepcionais.
                </p>
                <p>
                  No que diz respeito às remodelações internas, nossa equipe
                  especializada é especializada em transformar espaços
                  existentes em ambientes renovados e funcionais. Seja uma
                  renovação completa de uma cozinha ou banheiro, ou uma
                  atualização de áreas comuns, estamos equipados para lidar com
                  projetos de todos os tamanhos e complexidades.
                </p>
              </div>
            </div>
          </div>

          <div className="CardsProjects-card">
            <div className="ServicePro_boxContent-image">
              <img src="/Services_pro/Services_pro-04.jpg" alt="" />
            </div>
            <div className="ServicePro_content-info">
              <div className="ServicePro_Line"></div>
              <div className="ServicePro_contentTXT">
                <h1>Persianas é Stores Eletricos</h1>
                <p>
                  Nosso serviço de manutenção e montagem de persianas e stores
                  elétricos oferece conveniência e funcionalidade para seus
                  espaços, combinando tecnologia avançada com expertise em
                  instalação. Com uma equipe dedicada de profissionais, estamos
                  comprometidos em fornecer soluções personalizadas que atendam
                  às suas necessidades de iluminação, privacidade e controle de
                  temperatura.
                </p>
                <p>
                  Além disso, nosso serviço de manutenção garante que suas
                  persianas e stores elétricos permaneçam em perfeitas condições
                  de funcionamento ao longo do tempo. Realizamos verificações
                  regulares, ajustes e lubrificação de componentes para garantir
                  que tudo funcione conforme o esperado e prolongar a vida útil
                  do seu sistema.
                </p>
              </div>
            </div>
          </div>

          <div className="CardsProjects-card">
            <div className="ServicePro_boxContent-image ServicePro_boxContent-imageDesk">
              <img src="/Services_pro/Services_pro-05.jpg" alt="" />
            </div>
            <div className="ServicePro_content-info ServicePro_content-infoDesk">
              <div className="ServicePro_Line"></div>
              <div className="ServicePro_contentTXT">
                <h1>Canalização</h1>
                <p>
                  Para serviços de canalização residencial, oferecemos uma ampla
                  gama de soluções, desde a instalação de novas tubulações até a
                  reparação de vazamentos e entupimentos. Utilizamos técnicas
                  avançadas e equipamentos especializados para diagnosticar e
                  resolver problemas com precisão e eficiência, garantindo a
                  segurança e funcionalidade de suas instalações.
                </p>
                <p>
                  Além disso, nossa equipe é especializada em realizar pequenos
                  reparos, como substituição de torneiras, reparação de duches e
                  conserto de válvulas de descarga. Entendemos que esses
                  pequenos problemas podem causar grandes inconvenientes em sua
                  vida diária, por isso nos esforçamos para fornecer soluções
                  rápidas e eficazes que minimizem o tempo de inatividade e o
                  transtorno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePro;
