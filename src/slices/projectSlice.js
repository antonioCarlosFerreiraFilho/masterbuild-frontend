import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import projectService from "../services/projectService";

const initialState = {
  projects: [],
  project: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

//All projects
export const allProjects = createAsyncThunk("project/all", async () => {
  const data = await projectService.allProjects();

  return data;
});

//Get a project
export const getProject = createAsyncThunk("project/get", async (id) => {
  const data = await projectService.getProject(id);

  return data;
});

//Like project
export const likeProject = createAsyncThunk(
  "project/like",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await projectService.likeProject(id, token);

    //check errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

//Comments Project
export const commentProject = createAsyncThunk(
  "project/comments",
  async (commentData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await projectService.commentProject(
      { comentarios: commentData.comentarios },
      commentData.id,
      token
    );

    //check errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.loading = false;
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allProjects.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(allProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.projects = action.payload;
      })
      .addCase(getProject.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getProject.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.project = action.payload;
      })
      .addCase(likeProject.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.error = null;

        if (state.project.likes) {
          state.project.likes.push(actions.payload.userId);
        }
      })
      .addCase(likeProject.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.error = actions.payload;
      })
      .addCase(commentProject.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.error = null;
 
        state.project.comentarios.push(actions.payload.comentarios);
      })
      .addCase(commentProject.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.error = actions.payload;
      });
  },
});

export const { resetMessage } = projectSlice.actions;
export default projectSlice.reducer;
