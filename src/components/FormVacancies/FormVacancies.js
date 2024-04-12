import "./FormVacancies.css";

const FormVacancies = ({vacanciesCandidade}) => {
  return (
    <div className="FormVacancies">
      <div>

        <div className="FormVacancies_info">
          <div className="FormVacancies_form-box">
            <form className="FormVacancies_form">
              <h1>{vacanciesCandidade}</h1>
              <label htmlFor="">
                <span>Nome Completo</span>
                <input type="text" />
              </label>
              <label htmlFor="">
                <span>Profissão</span>
                <input type="text" disabled  />
              </label>
              <label htmlFor="">
                <span>Expeirencia proficional</span>
                <textarea name="" id="" cols="30" rows="10" placeholder="Diga-nos um pouco da sua experiencia no mercado na sua prosisão" ></textarea>
              </label>
              <div className="FormVacancies_form-submit">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FormVacancies;
