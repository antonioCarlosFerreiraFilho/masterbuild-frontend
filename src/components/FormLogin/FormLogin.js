//css
import "./FormLogin.css";
//react
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//components
import MessageAuth from "../MessageAuth/MessageAuth";
//Slices
import { register, login, reset } from "../../slices/authSlice";

const FormLogin = () => {
  //initial State Register
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //initial State login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  //register User
  const SubmitRegister = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    dispatch(register(user));

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      dispatch(reset());
    }, 1000);
  };

  //login User
  const SubmitLogin = (e) => {
    e.preventDefault();

    const user = {
      email: loginEmail,
      password: loginPassword,
    };

    dispatch(login(user));

    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  };

  //reset
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  function MuvForm() {
    const loginFrom = document.querySelector(".FormLogin_box-content");
    const registerFrom = document.querySelector(
      ".FormLogin_box-contentRegister"
    );

    if (loginFrom.classList.contains("FormLogin_box-content")) {
      loginFrom.classList.toggle("FormLogin_box-contentJS");
      registerFrom.classList.toggle("FormLogin_box-contentRegisterJS");
    }
  }

  return (
    <div className="FormLogin">
      <div className="FormLogin_content">
        <div className="FormLogin_box">
          <div className="FormLogin_box-content">
            <div className="FormLogin_box-title">
              <h1>Logar</h1>
              <div className="FormLogin_box-line"></div>
            </div>
            <form className="FormLogin_form" onSubmit={SubmitLogin}>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setLoginEmail(e.target.value)}
                value={loginEmail || ""}
              />
              <input
                type="text"
                placeholder="Senha"
                onChange={(e) => setLoginPassword(e.target.value)}
                value={loginPassword || ""}
              />
              <div className="FormLogin_box-submit">
                {!loading && <input type="submit" value="Logar" />}
                {loading && (
                  <input type="submit" value="Aguarde...." disabled />
                )}
              </div>
            </form>
            <div className="FormLogin_box-redirect">
              <p>
                Ainda não tens Conta ?{" "}
                <strong>
                  <NavLink onClick={MuvForm}>Cadastrar</NavLink>
                </strong>
              </p>
            </div>
          </div>
          <div className="FormLogin_box-contentRegister">
            <div className="FormLogin_box-title">
              <h1>Cadastrar</h1>
              <div className="FormLogin_box-line"></div>
            </div>
            <form
              className="FormLogin_form formRegister"
              onSubmit={SubmitRegister}
            >
              <input
                type="text"
                placeholder="Nome usuario *"
                onChange={(e) => setName(e.target.value)}
                value={name || ""}
              />
              <input
                type="text"
                placeholder="Email *"
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
              />
              <input
                type="text"
                placeholder="Senha *"
                onChange={(e) => setPassword(e.target.value)}
                value={password || ""}
              />
              <input
                type="text"
                placeholder="Confirme sua senha *"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword || ""}
              />
              <div className="FormLogin_box-submit">
                {!loading && <input type="submit" value="cadastrar" />}
                {loading && (
                  <input type="submit" value="Aguarde...." disabled />
                )}
              </div>
            </form>
            <div className="FormLogin_box-redirect">
              <p>
                Ja tem uma Conta ?{" "}
                <strong>
                  <NavLink onClick={MuvForm}>Logar</NavLink>
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="FormLogin_box-errorViews">
          {error && <MessageAuth error={error} />}
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
