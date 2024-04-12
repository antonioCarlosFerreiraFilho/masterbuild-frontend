//css
import "./Services.css";
//Components
import DescriptionServices from "../../components/DescriptionServices/DescriptionServices";
import Footer from "../../components/Footer/Footer";
import BannerInfiniti from "../../components/BannerInfinite/BannerInfinite";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Vacancies from "../../components/Vacancies/Vacancies";

const Services = () => {
  return (
    <div>
      <section className="Services_Media">
        <div>
          <BannerInfiniti />
          <DescriptionServices />
          <div className="Services_Res-tablet">
            <WhoWeAre className="Services_infos"/>
            <Vacancies className="Services_Res-vacancies"/>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Services;
