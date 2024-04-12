//css
import "./Auth.css";
//components
import FormLogin from '../../components/FormLogin/FormLogin';
import Footer from '../../components/Footer/Footer';

const Auth = () => {
  return (
    <div>
      <section className="Auth_Media">
        <div>
          <FormLogin />
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Auth;
