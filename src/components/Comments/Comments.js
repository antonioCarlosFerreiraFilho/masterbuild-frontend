//css
import "./Comments.css";
//react
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//slices
import { commentProject, resetMessage } from "../../slices/projectSlice";
//componets
import MessageAuth from "../../components/MessageAuth/MessageAuth";
//hooks
import { useAuth } from "../../hooks/useAuth";
//react icons
import { GoAlertFill } from "react-icons/go";

const Comments = () => {
  //hooks
  const { auth, loading } = useAuth();

  //redux
  const dispatch = useDispatch();
  const { project, message, error } = useSelector((state) => state.project);
  const { user } = useSelector((state) => state.auth);

  //initial state Comments
  const [commentText, setCommentText] = useState("");

  //submit Comment
  function HandleComment(e) {
    e.preventDefault();

    const commenData = {
      comentarios: commentText,
      id: project._id,
    };

    dispatch(commentProject(commenData));

    setCommentText("");

    setTimeout(()=> {

      dispatch(resetMessage());
    }, 4000);
  }

  return (
    <div className="Comments_general">
      <div className="Comments">
        <div className="Comments_generalComplete">
          <div className="Commetns_form">
            <div className="Commetns_box-content">
              <form className="Commetns_form-inpus" onSubmit={HandleComment}>
                <textarea
                  wrap="hard"
                  cols="60"
                  rows="8"
                  placeholder="Insira seu comentario"
                  onChange={(e) => setCommentText(e.target.value)}
                  value={commentText || ""}
                  maxLength={160}
                ></textarea>
                <div className="Commetns_form-boxcontent-input">
                  <input type="submit" value="Comentar" />
                </div>
                {!auth && (
                  <>
                    <div className="Commetns_form_auth-content">
                      <div className="Commetns_form-auth">
                        <p>vocé precisa estar logado para comentar</p>
                      </div>
                    </div>
                  </>
                )}
              </form>
            </div>
            <div>
              {error && (
                <>
                  <MessageAuth error={error} />
                </>
              )}
            </div>
          </div>
          <div>
            <div className="Comments_infoCounter">
              <h1>
                Comentarios ({project.comentarios && project.comentarios.length}
                )
              </h1>
              <div className="Comments_Line"></div>
            </div>

            {project.comentarios && project.comentarios.length === 0 && (
              <>
                <p>não há comentarios</p>
              </>
            )}

            {project.comentarios &&
              project.comentarios.map((comment) => (
                <>
                  <div
                    className="Comments_boxesComments"
                    key={comment.comentarios}
                  >
                    <div className="Comments_boxImage">
                      <img src="/userDefault/Man.png" alt="" />
                    </div>
                    <div className="Comments_CommmetUser">
                      <h1>{comment.userName}</h1>
                      <div className="Comments_Commmet-box-content">
                        <p>{comment.comentarios}</p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
