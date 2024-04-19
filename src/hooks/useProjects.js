import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//slices
import { allProjects } from "../slices/projectSlice";
import { uploads } from "../utils/config";

export const useProjects = () => {
  
  

  //stages Projects
  const [allProjectss, setAllProjectss] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  setTimeout(()=> {

    setLoadingProjects(false);
  });

  return projects;
};
