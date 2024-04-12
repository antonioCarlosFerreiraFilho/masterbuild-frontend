//css
import "./Contact.css";
//componentds
import FormContact from "../../components/FormContact/FormContact";
import Footer from "../../components/Footer/Footer";
import Ads_03 from "../../components/Ads/Ads_03";
import Ads_04 from "../../components/Ads/Ads_04";
const Contact = () => {
  return (
    <div>
      <section className="Contact_Media">
        <div className="Contact_components">

          <div className="Contact_Ads">
            <Ads_03 />
          </div>

          <div className="Contact_Form">
            <FormContact />
          </div>

          <div className="Contact_Ads">
            <Ads_04 />
          </div>
          
        </div>
        <div className="Contact_Media-footer">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Contact;
