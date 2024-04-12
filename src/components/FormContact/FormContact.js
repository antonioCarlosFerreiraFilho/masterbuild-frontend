import "./FormContact.css";
//redux
import { useDispatch, useSelector } from "react-redux";
//react
import { useState, useEffect } from "react";
//slices
import { newContact, reset } from "../../slices/contactSlice";
//components
import MessageAuth from "../MessageAuth/MessageAuth";

const FormContact = () => {
  //state form Contact
  const [name, setName] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  //redux
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.contact);

  function newContactClient(e) {
    e.preventDefault();

    const clientContact = {
      name,
      localidade,
      phone,
      description,
    };

    dispatch(newContact(clientContact));

    setName("");
    setLocalidade("");
    setPhone("");
    setDescription("");
    
    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  }

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className="FormContact">
      <div className="FormContact_contentInfos_box">
        <div>
          <div className="FormContact_contentInfos_title">
            <p>Fale Conosco</p>
            <h1>Peça um orçamento detalhado livre de custos.</h1>
          </div>
          <div className="FormContact_contentInfos_phone">
            <p>Preencha o formulario ou ligue:</p>
            <p>(+351) 932 015 787</p>
          </div>
          <div>
            <form className="FormContact_form" onSubmit={newContactClient}>
              <input
                type="text"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
                value={name || ""}
                maxLength={20}
              />
              <input
                type="text"
                placeholder="Localidade"
                onChange={(e) => setLocalidade(e.target.value)}
                value={localidade || ""}
                maxLength={15}
              />

              <input
                type="text"
                placeholder="Numero"
                onChange={(e) => setPhone(e.target.value)}
                value={phone || ""}
                maxLength={12}
              />
              <textarea
                className="FormContact_subject"
                name=""
                placeholder="Assunto a ser resolvido."
                id=""
                cols="30"
                rows="10"
                onChange={(e) => setDescription(e.target.value)}
                value={description || ""}
                maxLength={140}
              ></textarea>
              <div className="FormContact_form_submit">
                
                {loading && (
                  <input type="submit" disabled value="aguarde......" />
                )}
                {!loading && <input type="submit" value="Pedir orçamento" />}
               
              </div>
            </form>
          </div>
        </div>
        <div className="FormContact_form_Errors">
          {error && (
            <MessageAuth error={error} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FormContact;
