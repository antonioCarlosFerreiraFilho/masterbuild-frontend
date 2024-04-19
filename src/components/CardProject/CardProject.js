//Css
import "./CardProject.css";
//react
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//slices
import { allProjects } from "../../slices/projectSlice";
import { uploads } from "../../utils/config";
//components
import Loading from "../../components/Loading/Loading";

const CardProject = () => {
  //slices
  const { projects, loading } = useSelector((state) => state.project);

  //redux

  const dispatch = useDispatch();
  //Rederizando

  useEffect(() => {
    dispatch(allProjects());
  }, [dispatch]);

  //scrool auto
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

  function scroollAuto() {
    const cards = document.querySelectorAll(".CardProject_content-box");

    cards.forEach((Element) => {
      Element.addEventListener("click", () => {
        scroolTopI();
      });
    });
  }

  useEffect(() => {
    const TimeScroll = setTimeout(() => {
      scroollAuto();
    }, 1000);

    return () => clearTimeout(TimeScroll);
  }, []);

  return (
    <div className="CardProject">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="CardProject_boxes-General">
            <div className="CardProject_boxes-content">
              {projects.map((card) => (
                <div className="CardProject_content-box" key={card._id}>
                  <NavLink to={`/article/${card._id}`}>
                    <div className="CardProject_shadowBox"></div>
                    <div className="CardProject_content-infos">
                      <img
                        src={`${uploads}/projects/${card.image[0]}`}
                        alt=""
                      />
                    </div>
                    <div className="CardProject_content-nameCard">
                      <h1>{card.title}</h1>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardProject;
