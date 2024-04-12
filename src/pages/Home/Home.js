//css
import "./Home.css";
//components
import Banner from "../../components/Banner/Banner";
import InfoServices from "../../components/InfoServices/InfoServices";
import ServicePro from "../../components/ServicePro/ServicePro";
import Professionals from "../../components/Professionals/Professionals";
import Footer from '../../components/Footer/Footer';
import Ads_01 from "../../components/Ads/Ads_01";
import Ads_02 from "../../components/Ads/Ads_02";
import Whatsapp from "../../components/Whatsapp/Whatsapp";

const Home = () => {
  return (
    <div>
      <section className="Home_Media">
        <div>
          <Banner />
          <InfoServices />
          <div className="Home_Ads-Service">
            <div className="Home_Ads">
              <Ads_01 />
            </div>
            <div className="Home_service">
              <ServicePro />
            </div>
            <div className="Home_Ads">
              <Ads_02 />
            </div>
            <Whatsapp />
          </div>
          <Professionals />
        </div>
        <div>
          <Footer />
        </div>
      </section>
      
    </div>
  );
};

export default Home;
