import { api, requestConfig } from "../utils/config";

const newVacancie = async (data) => {

  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/vacancie/", config)
      .then((res) => res.json())
      .catch((err) => err);

      return res;
  } catch (err) {
    console.log(err);
  }
};

const VacancieService = {

  newVacancie,
};

export default VacancieService;