import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ContactService from "../services/contactService";

const initialState = {
  contactClient: {},
  error: false,
  succes: false,
  loading: false,
  message: null,
};

//   Contact
export const newContact = createAsyncThunk(
  "contact/send",
  async (contactClient, ThunckAPI) => {
    const data = await ContactService.newContact(contactClient);

    if (data.errors) {
      return ThunckAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

//Contact Slices
export const contactSlice = createSlice({
  name: "contact",
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
      //   Contact
      .addCase(newContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(newContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        state.succes = true;
        state.contactClient = actions.payload;
        state.message = "Pedido enviado, agradecemos pela preferência !."
      }).addCase(newContact.rejected, (state, actions) => {
        state.loading = false;
        state.succes = false;
        state.contactClient = null;
        state.error = actions.payload;
      });
  },
});

export const {reset} = contactSlice.actions;
export default contactSlice.reducer;