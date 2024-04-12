//Css
import "./ArticleInfo.css";
//react icons
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
//icons Full
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { GoAlertFill } from "react-icons/go";

//react
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//images
import { uploads } from "../../utils/config";
//redux
import { useDispatch, useSelector } from "react-redux";
//slices
import { getProject, likeProject } from "../../slices/projectSlice";
//hooks
import { useAuth } from "../../hooks/useAuth";

const ArticleInfo = () => {

  //hooks
  const {auth, loading} = useAuth();

  //react
  const { id } = useParams();

  //redux
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.project);
  const { user } = useSelector((state) => state.auth);

  //Like project
  function like() {

    dispatch(likeProject(project._id));
  }

  //renderizando
  useEffect(() => {
    dispatch(getProject(id));
  }, [dispatch, id]);

  //carrossel
  const DB = [3, 4, 5, 6];

  function arrowLeft() {
    let counter = 0;

    const arrow = document.querySelectorAll(".ArrowClick");
    const Images = document.querySelector(".Article_content-boxes");

    arrow.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        if (arrow.classList.contains("Article_content-arrowLeft")) {
          if (counter == DB.length - 1) {
            counter = 0;
          } else {
            counter = counter + 1;
          }

          Images.style.transform = `translateX(${-counter * 100}%)`;
        } else {
          if (counter <= 0) {
            counter = DB.length - 1;
          } else {
            counter = counter - 1;
          }

          Images.style.transform = `translateX(${-counter * 100}%)`;
        }
      });
    });
  }

  useEffect(() => {
    const TimeMuve = setTimeout(() => {
      arrowLeft();
    }, 1000);

    return () => clearTimeout(TimeMuve);
  }, []);


  return (
    <div className="ArticleInfo">
      <div>
        <div className="ArticleInfo_box">
          <div className="ArticleInfo_box-carrossel">
            <div className="Article_content-arrow">
              <div className="Article_content-arrowRight ArrowClick">
                <FaArrowLeft />
              </div>
              <div className="Article_content-arrowLeft ArrowClick">
                <FaArrowRight />
              </div>
            </div>
            <div className="Article_content-boxes">
              <div className="Article_content-boxesTest">
                {project.image?.map((image, index) => (
                  <img
                    src={`${uploads}/projects/${image}`}
                    alt="Beach Images"
                    className="Article_content-box_image-carrossel"
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="ArticleInfo_boxTXT">
            <h1>{project.title}</h1>
            <div>
              <p>{project.description}</p>
            </div>
            <div>
              {project.likes && user && (
                <>
                  <div className="ArticleInfo_contenticons-like">
                    <div className="ArticleInfo_counter">
                      {project.likes.includes(user._id) ? (
                        <div className="ArticleInfo_iconsBOX">
                          <AiFillLike className="ArticleInfo_icons ArticleInfo-iconLike FullLike" />
                        </div>
                      ) : (
                        <div className="ArticleInfo_iconsBOX">
                          <AiTwotoneLike className="ArticleInfo_icons ArticleInfo-iconLike" onClick={like}/>
                        </div>
                      )}
                      <p>{project.likes.length}</p>
                    </div>
                    <div className="ArticleInfo_counter">
                      <div className="ArticleInfo_iconsBOX">
                        <AiTwotoneDislike className="ArticleInfo_icons ArticleInfo-iconLikeBad" />
                      </div>
                      <p>0</p>
                    </div>
                  </div>
                </>
              )}
              {!auth && project.likes && (
                <>
                  <div className="ArticleInfo_contenticons-likeAuth">
                    <div className="ArticleInfo_contenticons-likeAuth-box-incon">
                      <GoAlertFill />
                    </div>
                    <div className="ArticleInfo_contenticons-likeAuth-box-TXT">
                      <p>vocé precisa estar logado para curtir</p>
                    </div>
                  </div>
                  <div className="ArticleInfo_contenticons-like">
                    <div className="ArticleInfo_counter">
                     
                        <div className="ArticleInfo_iconsBOX">
                          <AiTwotoneLike className="ArticleInfo_icons ArticleInfo-iconLike" />
                        </div>
                     
                      <p>{project.likes.length}</p>
                    </div>
                    <div className="ArticleInfo_counter">
                      <div className="ArticleInfo_iconsBOX">
                        <AiTwotoneDislike className="ArticleInfo_icons ArticleInfo-iconLikeBad" />
                      </div>
                      <p>0</p>
                    </div>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInfo;
