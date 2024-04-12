import { api, requestConfig } from "../utils/config";

const newContact = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/contact/", config)
      .then((res) => res.json())
      .catch((err) => err);

      return res;
  } catch (err) {
    console.log(err);
  }
};

const ContactService = {

  newContact,
};

export default ContactService;
