//css
import "./Vacancies.css";
//react
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//components
import FormVacancies from "../../components/FormVacancies/FormVacancies";
//react icons
import { IoCloseSharp } from "react-icons/io5";
//redux
import { useDispatch, useSelector } from "react-redux";
//components
import MessageAuth from "../MessageAuth/MessageAuth";
//slices
import { newVacancie, reset } from "../../slices/VacancieSlice";

const Vacancies = () => {
  //Initial State Vacancies
  const [name, setName] = useState("");
  const [vacanciesCandidade, setVacanciesCandidade] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");

  //redux
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.vacancies);

  function submitVacancie(e) {
    e.preventDefault();

    const vacancie = {
      name,
      profession: vacanciesCandidade,
      phone,
      experience,
    };

    dispatch(newVacancie(vacancie));

    setName("");
    setPhone("");
    setExperience("");

    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  }

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  function candidate() {
    const vagas = document.querySelectorAll(".Vacancies_event-value");
    const CloseButton = document.querySelector(".Vacancies_Form_iconClik");
    const blockForm = document.querySelector(".Vacancies_Form-candidate");

    vagas.forEach((element) => {
      element.addEventListener("click", () => {
        setVacanciesCandidade(element.value);

        if (blockForm.classList.contains("Vacancies_Form-candidate")) {
          blockForm.classList.add("Vacancies_Form-candidate-block");
        }
      });
    });

    CloseButton.addEventListener("click", () => {
      blockForm.classList.remove("Vacancies_Form-candidate-block");
      blockForm.classList.add("Vacancies_Form-candidate");
      setVacanciesCandidade("");
    });
  }

  useEffect(() => {
    const TimeVacancies = setTimeout(() => {
      candidate();
    });

    return () => clearTimeout(TimeVacancies);
  }, []);

  return (
    <div className="Vacancies">
      <div>
        <div className="Vacancies_Form-candidate">
          <div className="Vacancies_Form-content-box-icon">
            <div className="Vacancies_Form-content-icon">
              <IoCloseSharp className="Vacancies_Form_iconClik" />
            </div>
          </div>
          <div className="Vacancies_Form-content-box">
            <div className="Vacancies_Form-content-infos">
              <div className="Vacancies_Form-content-title">
                <div>
                  <h1>Candidatar-se</h1>
                </div>
                <div className="Vacancies_Form-content-Line"></div>
              </div>
              <form
                action=""
                className="Vacancies_Form"
                onSubmit={submitVacancie}
              >
                <label htmlFor="">
                  <span>Nome</span>
                  <input
                    type="text"
                    className="Vacancies_Form-inputs"
                    onChange={(e) => setName(e.target.value)}
                    value={name || ""}
                    maxLength={20}
                  />
                </label>

                <label htmlFor="">
                  <span>Profição</span>
                  <input
                    type="text"
                    disabled
                    className="Vacancies_Form-Pro"
                    onChange={(e) => setVacanciesCandidade(e.target.value)}
                    value={vacanciesCandidade}
                    maxLength={17}
                  />
                </label>

                <label htmlFor="">
                  <span>Numero de contato</span>
                  <input
                    type="text"
                    className="Vacancies_Form-inputs"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone || ""}
                    maxLength={20}
                  />
                </label>

                <label htmlFor="">
                  <span>Experiencia</span>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Nos conte um pouco da sua experiencia."
                    className="Vacancies_Form-textArea"
                    onChange={(e) => setExperience(e.target.value)}
                    value={experience || ""}
                    maxLength={140}
                  ></textarea>
                </label>
                <div className="Vacancies_Form-box_button">
                  {loading && (
                    <input type="submit" disabled value="aguarde......" />
                  )}
                  {!loading && <input type="submit" value="candidatar" />}
                </div>
              </form>
              <div className="Vacancies_error-views">
                {error && <MessageAuth error={error} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Vacancies_title">
          <p>Vagas Abertas</p>
        </div>
        <div className="Vacancies_boxes">
          <div className="Vacancies_box">
            <div className="Vacancies_info">
              <h1>Carpinteiro</h1>
              <div>
                <p>
                  Estamos buscando um carpinteiro profissional para se juntar à
                  nossa equipe talentosa. O candidato ideal será responsável por
                  interpretar projetos, cortar e moldar materiais, montar
                  estruturas de madeira, instalar portas, janelas, revestimentos
                  e realizar outras tarefas relacionadas à carpintaria.
                </p>
              </div>
            </div>
            <div className="Vacancies_event">
              <button className="Vacancies_event-value" value={"Carpinteiro"}>
                candidatar
              </button>
            </div>
          </div>

          <div className="Vacancies_box">
            <div className="Vacancies_info">
              <h1>Soldador de Gas</h1>
              <div>
                <p>
                  O candidato ideal será responsável por soldar e instalar
                  tubulações de gás em projetos residenciais, garantindo a
                  segurança e a conformidade com os regulamentos e padrões de
                  qualidade é Diagnosticar e reparar problemas em sistemas de
                  gás existentes, conforme necessário.
                </p>
              </div>
            </div>
            <div className="Vacancies_event">
              <button
                className="Vacancies_event-value"
                value={"Soldador de Gas"}
              >
                candidatar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
