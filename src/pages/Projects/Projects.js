//css
import "./Projects.css";
//components
import CardProject from "../../components/CardProject/CardProject";
import Footer from '../../components/Footer/Footer';

const Projects = () => {
  return (
    <div>
      <section className="Projects_Media">
        <div>
          <CardProject />
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Projects;
