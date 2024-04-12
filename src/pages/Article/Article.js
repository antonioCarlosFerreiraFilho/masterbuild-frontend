//Css
import "./Article.css";
//components
import ArticleInfo from "../../components/ArticleInfo/ArticleInfo";
import Footer from "../../components/Footer/Footer";
import Comments from "../../components/Comments/Comments";

const Article = () => {
  return (
    <div>
      <section className="Article_Media">
        <div className="Article_boxes">
          <div className="Article_components">
            <ArticleInfo className="Article_Info" />
            <Comments className="Article_Comments" />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Article;
