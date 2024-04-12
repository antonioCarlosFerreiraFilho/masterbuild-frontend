//css
import "./DescriptionServices.css";
//react
import { NavLink } from "react-router-dom";

const DescriptionServices = () => {
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
    <div className="Description_contentMedia">
      <div className="Description">
        <div className="Description_box">
          <div className="Description_content">
            <img src="/professionals/skyscraper.png" alt="" />
            <div>
              <h1>Construção Predial</h1>
            </div>
            <div className="Description_line-backgroud"></div>
          </div>
          <div className="Description_content-infos">
            <p>
              Nosso serviço de construção predial e reformas de prédios
              históricos combina a expertise moderna com um profundo respeito
              pela herança arquitetônica. Com uma equipe de profissionais
              especializados em preservação histórica e restauração, estamos
              comprometidos em revitalizar e preservar os tesouros
              arquitetônicos do passado para as gerações futuras.
            </p>
            <p>
              Quando se trata de reformas de prédios históricos, nossa abordagem
              é guiada pelo respeito pela história e autenticidade do edifício.
              Trabalhamos em estreita colaboração com arquitetos e historiadores
              especializados para preservar e restaurar elementos originais, ao
              mesmo tempo em que introduzimos atualizações modernas necessárias
              para garantir a funcionalidade e a conformidade com os padrões
              contemporâneos.
            </p>
          </div>
          <div className="Description_contentLink">
            <NavLink
              className="Description_Link-contact"
              to="/contact"
              onClick={scroolTopI}
            >
              Pedir orçãmento
            </NavLink>
          </div>
        </div>

        <div className="Description_box">
          <div className="Description_content">
            <img src="/professionals/home.png" alt="" />
            <div>
              <h1>Remodelações Residenciais</h1>
            </div>
            <div className="Description_line-backgroud"></div>
          </div>
          <div className="Description_content-infos">
            <p>
              Para projetos de construção residencial, oferecemos um serviço
              completo desde o planejamento inicial até a entrega final.
              Trabalhamos em estreita colaboração com você para entender seus
              objetivos e requisitos, garantindo que cada detalhe do projeto
              seja cuidadosamente considerado e implementado. Nosso foco está na
              qualidade, durabilidade e funcionalidade, utilizando materiais de
              alta qualidade e técnicas de construção comprovadas para garantir
              resultados excepcionais.
            </p>
            <p>
              No que diz respeito às remodelações internas, nossa equipe
              especializada é especializada em transformar espaços existentes em
              ambientes renovados e funcionais. Seja uma renovação completa de
              uma cozinha ou banheiro, ou uma atualização de áreas comuns,
              estamos equipados para lidar com projetos de todos os tamanhos e
              complexidades.
            </p>
          </div>
          <div className="Description_contentLink">
            <NavLink
              className="Description_Link-contact"
              to="/contact"
              onClick={scroolTopI}
            >
              Pedir orçãmento
            </NavLink>
          </div>
        </div>

        <div className="Description_box">
          <div className="Description_content">
            <img src="/professionals/electrician.png" alt="" />
            <div>
              <h1>Eletricistas Disponives 24H</h1>
            </div>
            <div className="Description_line-backgroud"></div>
          </div>
          <div className="Description_content-infos">
            <p>
              Nosso serviço de eletricista 24 horas está disponível para atender
              emergências elétricas a qualquer momento do dia ou da noite. Nossa
              equipe altamente qualificada e experiente está pronta para lidar
              com uma ampla gama de situações, desde quedas de energia
              repentinas até curtos-circuitos e problemas de fiação.
            </p>
            <p>
              Além de lidar com emergências elétricas, nosso serviço de
              eletricista 24 horas também está disponível para instalações
              elétricas urgentes, reparos de curto prazo e consultas sobre
              questões elétricas imprevistas. Independentemente do problema,
              estamos aqui para oferecer soluções confiáveis e profissionais que
              proporcionem tranquilidade e segurança em momentos de emergência.
            </p>
          </div>
          <div className="Description_contentLink">
            <NavLink
              className="Description_Link-contact"
              to="/contact"
              onClick={scroolTopI}
            >
              Pedir orçãmento
            </NavLink>
          </div>
        </div>

        <div className="Description_box">
          <div className="Description_content">
            <img src="/professionals/plumber.png" alt="" />
            <div>
              <h1>Canalizadores Certificados</h1>
            </div>
            <div className="Description_line-backgroud"></div>
          </div>
          <div className="Description_content-infos">
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
              conserto de válvulas de descarga. Entendemos que esses pequenos
              problemas podem causar grandes inconvenientes em sua vida diária,
              por isso nos esforçamos para fornecer soluções rápidas e eficazes
              que minimizem o tempo de inatividade e o transtorno.
            </p>
          </div>
          <div className="Description_contentLink">
            <NavLink
              className="Description_Link-contact"
              to="/contact"
              onClick={scroolTopI}
            >
              Pedir orçãmento
            </NavLink>
          </div>
        </div>

        <div className="Description_box">
          <div className="Description_content">
            <img src="/professionals/painter.png" alt="" />
            <div>
              <h1>Cerviços de Pintura</h1>
            </div>
            <div className="Description_line-backgroud"></div>
          </div>
          <div className="Description_content-infos">
            <p>
              Nosso serviço de pintura residencial e externa oferece uma
              transformação completa para sua casa, adicionando beleza e
              proteção às superfícies internas e externas. Com uma equipe de
              pintores altamente qualificados e experientes, estamos
              comprometidos em fornecer resultados excepcionais que atendam às
              suas expectativas e excedam suas necessidades.
            </p>
            <p>
              Além de oferecer uma ampla gama de cores e acabamentos para
              atender ao seu estilo e preferências, também fornecemos
              consultoria especializada para garantir a escolha certa de
              produtos e cores para cada ambiente e superfície.
            </p>
          </div>
          <div className="Description_contentLink">
            <NavLink
              className="Description_Link-contact"
              to="/contact"
              onClick={scroolTopI}
            >
              Pedir orçãmento
            </NavLink>
          </div>
        </div>

        <div className="Description_box">
          <div className="Description_content">
            <img src="/professionals/project.png" alt="" />
            <div>
              <h1>Projetos Certificados</h1>
            </div>
            <div className="Description_line-backgroud"></div>
          </div>
          <div className="Description_content-infos">
            <p>
              Com uma abordagem focada na inovação e na excelência técnica,
              nossos engenheiros trabalham em estreita colaboração com cada
              cliente para entender suas necessidades específicas e desenvolver
              soluções sob medida que atendam aos requisitos do projeto e aos
              padrões regulatórios. Desde o dimensionamento e distribuição de
              circuitos até o projeto de iluminação e sistemas de automação,
              nossa equipe utiliza tecnologias avançadas e práticas de
              engenharia comprovadas para garantir a funcionalidade, eficiência
              e segurança de cada projeto elétrico.
            </p>
            <p>
              nosso serviço de engenharia elétrica inclui a elaboração de
              documentação técnica detalhada, como diagramas de circuito,
              especificações de equipamentos e relatórios de conformidade, para
              garantir uma execução precisa e eficiente do projeto. Nossa
              prioridade é fornecer projetos elétricos completos que atendam às
              necessidades de nossos clientes
            </p>
          </div>
          <div className="Description_contentLink">
            <NavLink
              className="Description_Link-contact"
              to="/contact"
              onClick={scroolTopI}
            >
              Pedir orçãmento
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionServices;
