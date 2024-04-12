import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import VacancieService from "../services/VacancieService";

const initialState = {
  vacancie: {},
  error: false,
  succes: false,
  loading: false,
  message: null,
};

//   Vacancie
export const newVacancie = createAsyncThunk(
  "vacancie/send",
  async (vacancie, ThunckAPI) => {
    const data = await VacancieService.newVacancie(vacancie);

    if (data.errors) {
      return ThunckAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

//Vacancie Slices
export const VacancieSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.succes = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //   Vacancies
      .addCase(newVacancie.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(newVacancie.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        state.succes = true;
        state.vacancie = actions.payload;
        state.message = "Pedido enviado, agradecemos pela preferência !."
      }).addCase(newVacancie.rejected, (state, actions) => {
        state.loading = false;
        state.succes = false;
        state.vacancie = null;
        state.error = actions.payload;
      });
  },
});

export const {reset} = VacancieSlice.actions;
export default VacancieSlice.reducer;
