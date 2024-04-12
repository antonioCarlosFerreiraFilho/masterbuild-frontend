import { configureStore } from "@reduxjs/toolkit";
//User
import authReducer from './slices/authSlice';
//Project
import projectReducer from './slices/projectSlice';
//Contact
import contactReducer from './slices/contactSlice';
//Vacancie
import vacancieReducer from './slices/VacancieSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    contact: contactReducer,
    vacancies: vacancieReducer
  },
});