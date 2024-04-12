import { api, requestConfig } from "../utils/config";

//All Projects
const allProjects = async () => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/projects/", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

//Get Projects
const getProject = async (id) => {
  const config = requestConfig("GET");

  try {
    const res = await fetch(api + "/projects/getProject/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

//Like Project
const likeProject = async (id, token) => {
  const config = requestConfig("PUT", null, token);

  try {
    const res = await fetch(api + "/projects/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

//Comments Project
const commentProject = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/projects/comments/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (err) {
    console.log(err);
  }
};

const projectService = {
  allProjects,
  getProject,
  likeProject,
  commentProject,
};

export default projectService;
